#!/usr/bin/env python3
"""
CLI wrapper for Antigravity Video Studio audio analysis and viral blueprinting.
Usage:
  python3 analyze.py --audio <audio_path> [--fps 60] [--output beatmap.json]
  python3 analyze.py --reference-video <video_path> [--output blueprint.json]
"""
import sys
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "../../.."))
sys.path.insert(0, os.path.join(REPO_ROOT, "python_audio"))

from analyze_media import main

if __name__ == "__main__":
    main()
