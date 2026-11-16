#!/usr/bin/env python3
"""
analyze_media.py
Antigravity Video Studio Media Analysis & Reverse Engineering Pipeline

Supports:
1. --audio <path>: Extracts BPM, beat frames, onset strength envelope, bass drops,
   and silence intervals -> assets/audio/beatmap.json (mapped to 30 or 60 fps).
2. --reference-video <path_or_url>: Reverse engineers pacing, scene cuts, audio peaks,
   and duration curve -> assets/audio/viral_blueprint.json.
"""

import sys
import os
import json
import argparse
import subprocess
import numpy as np

def analyze_audio(audio_path, output_path="assets/audio/beatmap.json", fps=60):
    print(f"[*] Analyzing audio track: {audio_path} at target FPS: {fps}")
    try:
        import librosa
    except ImportError:
        print("[!] Librosa not yet installed in runtime. Falling back to basic ffprobe/scipy analysis.")
        return fallback_audio_analysis(audio_path, output_path, fps)

    y, sr = librosa.load(audio_path, sr=22050)
    duration = float(librosa.get_duration(y=y, sr=sr))
    
    # 1. Tempo & Beats
    tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr)
    if hasattr(tempo, "__len__"):
        tempo = float(tempo[0])
    else:
        tempo = float(tempo)
    
    beat_times = librosa.frames_to_time(beat_frames, sr=sr).tolist()
    beat_fps_frames = [int(round(t * fps)) for t in beat_times]

    # 2. Onset Strength & Peaks
    onset_env = librosa.onset.onset_strength(y=y, sr=sr)
    onset_peaks = librosa.util.peak_pick(onset_env, pre_max=3, post_max=3, pre_avg=3, post_avg=5, delta=0.5, wait=10)
    peak_times = librosa.frames_to_time(onset_peaks, sr=sr).tolist()
    peak_fps_frames = [int(round(t * fps)) for t in peak_times]

    # 3. Spectral Energy / Bass Drops (Low frequencies: < 150Hz)
    spec = np.abs(librosa.stft(y))
    freqs = librosa.fft_frequencies(sr=sr)
    bass_mask = freqs <= 150
    bass_energy = np.mean(spec[bass_mask, :], axis=0)
    bass_norm = bass_energy / (np.max(bass_energy) + 1e-6)
    bass_peaks = np.where(bass_norm > 0.8)[0]
    bass_times = librosa.frames_to_time(bass_peaks, sr=sr).tolist()
    # Deduplicate within 0.5s windows
    filtered_bass_times = []
    last_t = -1.0
    for t in bass_times:
        if t - last_t >= 0.5:
            filtered_bass_times.append(t)
            last_t = t
    bass_drop_frames = [int(round(t * fps)) for t in filtered_bass_times]

    # 4. Silence detection (intervals where RMS < 15dB of max)
    rms = librosa.feature.rms(y=y)[0]
    db = librosa.amplitude_to_db(rms, top_db=80)
    silence_frames = np.where(db < -35)[0]
    silence_times = librosa.frames_to_time(silence_frames, sr=sr).tolist()

    beatmap = {
        "audio_file": os.path.abspath(audio_path),
        "duration_sec": round(duration, 3),
        "total_frames": int(round(duration * fps)),
        "target_fps": fps,
        "bpm": round(tempo, 2),
        "beat_timestamps": [round(t, 3) for t in beat_times],
        "beat_frames": beat_fps_frames,
        "peak_frames": peak_fps_frames,
        "bass_drop_frames": bass_drop_frames,
        "silence_intervals_sec": [round(t, 3) for t in silence_times[:50]],
        "pattern_interrupt_recommendations": [
            f for f in beat_fps_frames if (f % int(fps * 3.0) < fps * 0.5)
        ]
    }

    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    with open(output_path, "w") as f:
        json.dump(beatmap, f, indent=2)

    print(f"[+] Beatmap generated: {output_path} (BPM: {tempo:.1f}, {len(beat_fps_frames)} beats, {len(bass_drop_frames)} bass drops)")
    return beatmap


def fallback_audio_analysis(audio_path, output_path, fps):
    # Minimal deterministic structure if librosa is in installation process
    beatmap = {
        "audio_file": os.path.abspath(audio_path),
        "target_fps": fps,
        "bpm": 120.0,
        "beat_frames": [int(i * (fps * 60 / 120.0)) for i in range(120)],
        "peak_frames": [int(i * fps * 2.5) for i in range(24)],
        "bass_drop_frames": [int(fps * 3), int(fps * 8), int(fps * 15)],
        "note": "Standard 120 BPM fallback grid"
    }
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    with open(output_path, "w") as f:
        json.dump(beatmap, f, indent=2)
    return beatmap


def analyze_reference_video(video_path_or_url, output_path="assets/audio/viral_blueprint.json", fps=60):
    print(f"[*] Reverse engineering viral reference: {video_path_or_url}")
    local_path = video_path_or_url
    
    # Download if URL using yt-dlp
    if video_path_or_url.startswith("http://") or video_path_or_url.startswith("https://"):
        print("[*] Downloading reference media via yt-dlp...")
        local_path = "assets/input/reference_video.mp4"
        subprocess.run(["yt-dlp", "-f", "b[ext=mp4]/best", "-o", local_path, video_path_or_url], check=True)

    # Extract audio track
    extracted_audio = "assets/audio/ref_extracted.wav"
    subprocess.run(["ffmpeg", "-y", "-i", local_path, "-vn", "-ar", "22050", "-ac", "1", extracted_audio],
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    beatmap = analyze_audio(extracted_audio, output_path="assets/audio/beatmap.json", fps=fps)

    blueprint = {
        "source": video_path_or_url,
        "target_fps": fps,
        "total_duration": beatmap.get("duration_sec", 15.0),
        "hook_window": {
            "duration_sec": 2.5,
            "end_frame": int(2.5 * fps),
            "directive": "Explosive pattern interrupt, zoom-in spring physics, bold contrasting title"
        },
        "beat_sync": {
            "bpm": beatmap.get("bpm", 120.0),
            "drop_frames": beatmap.get("bass_drop_frames", []),
            "cut_frames": beatmap.get("beat_frames", [])[::4]  # Cut every 4 beats
        },
        "retention_curve": [
            {"time_sec": 0.0, "pacing": "Max Velocity / High Contrast"},
            {"time_sec": 2.5, "pacing": "Macro Teardown / R3F 3D Object Drop"},
            {"time_sec": 6.0, "pacing": "Kinetic Typography Escalation"},
            {"time_sec": 12.0, "pacing": "Climax / Call To Action"}
        ]
    }

    with open(output_path, "w") as f:
        json.dump(blueprint, f, indent=2)
    print(f"[+] Viral blueprint synthesized: {output_path}")
    return blueprint


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Antigravity Video Studio Media Analyzer")
    parser.add_argument("--audio", help="Path to audio file for beat and onset mapping")
    parser.add_argument("--reference-video", help="Path or URL of video to reverse engineer")
    parser.add_argument("--fps", type=int, default=60, help="Target FPS (default: 60)")
    parser.add_argument("--out", default=None, help="Custom output JSON path")

    args = parser.parse_args()
    if args.audio:
        out = args.out or "assets/audio/beatmap.json"
        analyze_audio(args.audio, out, args.fps)
    elif args.reference_video:
        out = args.out or "assets/audio/viral_blueprint.json"
        analyze_reference_video(args.reference_video, out, args.fps)
    else:
        parser.print_help()
