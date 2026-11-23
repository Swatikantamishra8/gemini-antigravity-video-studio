# Gemini Antigravity Video Studio

[![Antigravity Plugin](https://img.shields.io/badge/Antigravity-Plugin%20v1.0.0-6366F1?style=for-the-badge&logo=google)](https://github.com/Swatikantamishra8/gemini-antigravity-video-studio)
[![Remotion Engine](https://img.shields.io/badge/Remotion-Three.js%20%2B%20Rapier-8B5CF6?style=for-the-badge)](https://remotion.dev)
[![Audio Analysis](https://img.shields.io/badge/Audio-SciPy%20Spectral%20Onset-EC4899?style=for-the-badge)](https://scipy.org)
[![Social Compliance](https://img.shields.io/badge/Compliance-YouTube%20%7C%20Reels%20%7C%20TikTok-10B981?style=for-the-badge)](./rules/AGENTS.md)

**Gemini Antigravity Video Studio** is an autonomous AI Video Editor, 3D Motion Engine, and Viral Social Media Production Pipeline designed natively for **Google Antigravity** and powered by Gemini.

It functions both as a complete workspace video production suite and as a standard **Antigravity Plugin & Skill bundle** that can be loaded globally across Antigravity sessions.

---

## 🎬 Architecture & Capabilities

```
gemini-antigravity-video-studio/
├── plugin.json                 # Antigravity Plugin Manifest (v1.0.0)
├── mcp_config.json             # Portable Blender MCP Server bridge (${PLUGIN_ROOT})
├── assets/logo.svg             # Plugin branding & UI icon
├── rules/AGENTS.md             # Social media compliance gates & safe-zone constraints
├── skills/                     # Packaged Antigravity Skills
│   ├── antigravity-video-studio/ # Master Showrunner & CLI tools
│   ├── lemo-opuscar/           # 99 procedural film styles (WebGL / Canvas)
│   ├── video-shotcraft/        # 124 shot recipes & 150 motion cards
│   ├── pixelfx/                # 244+ seeded pixel VFX & particle animations
│   ├── gemini-beatlock/        # Frame-accurate STFT spectral flux beatmaps
│   ├── gemini-video-director/  # Directorial composition engine
│   ├── viral-director/         # Pacing curves & retention grammar
│   └── dsh-orchestrator/       # Parallel batch rendering harness
├── engine/                     # Remotion + React Three Fiber + Rapier physics
└── python_audio/               # Standalone SciPy STFT onset & beat tracker
```

---

## 🚀 Using as an Antigravity Skill & Plugin

### 1. Global Installation in Antigravity
Link or install into your local Antigravity configuration directory:
```bash
# Link workspace directly into Antigravity global plugins
ln -s "$(pwd)" ~/.gemini/config/plugins/antigravity-video-studio

# Or install via agy CLI from GitHub
agy plugin install https://github.com/Swatikantamishra8/gemini-antigravity-video-studio.git
```

### 2. Verify Plugin Discovery
Check that Antigravity discovers all 9 skills, rules, and MCP servers:
```bash
agy plugin list
# Output:
# Installed plugins:
# - antigravity-video-studio (enabled, 1.0.0)
#     Components: 9 skills, 1 rule, 1 MCP server

agy plugin validate . --strict
# Output:
# ✔ Validation passed
```

### 3. Prompting Antigravity
Once enabled, simply ask Antigravity to produce or edit videos. Example prompts:
- *"Create a 9:16 viral vertical video using Three.js and beat sync"*
- *"Analyze and remix raw footage from assets/input/ with auto-captions and sound effects"*
- *"Extract beatmap and viral blueprint from reference audio"*
- *"Direct a 15-second tech intro in the style of exploded-teardown"*

---

## 🎥 3 Production Modes

### 1. Mode A: Text-to-Video (100% Code-Driven Generation)
- **Zero Stock Footage**: Generates full cinematics purely through code (Remotion, Three.js, Rapier physics, PixelFX).
- **Style Library**: Choose from 99 procedural film styles in `skills/lemo-opuscar/styles/`.
- **Hardware-Optimal**: Remotion rendered with `--gl=angle` and `--concurrency=2`.

### 2. Mode B: Raw Video Remixer
- **Ingestion**: Drops into `assets/input/`.
- **Automatic Silence Removal**: Removes dead pauses using FFmpeg filters.
- **Kinetic Subtitles & Callouts**: Safe-zone typography synced to speech cadence.
- **CapCut / JianYing Export**: Automatically exports editable desktop draft timelines.

### 3. Mode C: Viral Video Cloner & Retention Optimizer
- **Deconstruction**: Extracts hook timing, cut intervals, and audio peaks with `analyze_media.py --reference-video`.
- **Copyright-Safe Rebuild**: Rebuilds equivalent high-retention pacing using original code assets and CC0 audio.

---

## 🛡️ Monetization & Compliance Gates

Every export automatically enforces the strict compliance rules defined in `rules/AGENTS.md`:

1. **YouTube Partner & Meta Bonus Safety**: 100% synthesized canvas/WebGL or multi-layered transformation ensuring zero unoriginal/reused content strikes.
2. **9:16 Vertical Safe Zones**: Guarantees critical typography and UI badges stay outside the bottom 22% (captions/audio title) and right 15% (engagement buttons).
3. **Retention Cadence**: Enforces visual pattern interrupts every 2.5 - 4.0 seconds locked to audio beats.
4. **Broadcast Audio Standards**: Normalizes all exports to **-14 LUFS** (+/- 1.0 LUFS) with true peak <= -1.0 dBFS (AAC 320 kbps).

---

## 🛠️ CLI Quick Reference

```bash
# Verify environment & dependencies
./skills/antigravity-video-studio/scripts/bootstrap.sh

# Analyze audio rhythm (BPM, spectral onsets, drops)
./skills/antigravity-video-studio/scripts/analyze.py --audio assets/audio/test_bgm.wav --fps 60

# Render Remotion composition
./skills/antigravity-video-studio/scripts/render.sh StudioMasterVertical renders/out_vertical.mp4 2

# Validate plugin integrity
agy plugin validate . --strict
```

---

## 📄 License & Upstream Attribution
This project incorporates open-source tools and design patterns from Remotion, Three.js, DeepSeek Harness, Lemo-Opuscar, PixelFX, and Video-Shotcraft. See `CREDITS.md` and `NOTICE` for full upstream licensing and attribution details.
