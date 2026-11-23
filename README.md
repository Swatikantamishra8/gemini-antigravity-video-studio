# Gemini Antigravity & Claude Video Studio

[![Antigravity Plugin](https://img.shields.io/badge/Antigravity-Plugin%20v1.0.0-6366F1?style=for-the-badge&logo=google)](https://github.com/Swatikantamishra8/gemini-antigravity-video-studio)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Plugin%20%2B%20Skill-D97706?style=for-the-badge&logo=anthropic)](https://github.com/Swatikantamishra8/gemini-antigravity-video-studio)
[![Remotion Engine](https://img.shields.io/badge/Remotion-Three.js%20%2B%20Rapier-8B5CF6?style=for-the-badge)](https://remotion.dev)
[![Audio Analysis](https://img.shields.io/badge/Audio-SciPy%20Spectral%20Onset-EC4899?style=for-the-badge)](https://scipy.org)
[![Social Compliance](https://img.shields.io/badge/Compliance-YouTube%20%7C%20Reels%20%7C%20TikTok-10B981?style=for-the-badge)](./rules/AGENTS.md)

**Gemini Antigravity Video Studio** is an autonomous AI Video Editor, 3D Motion Engine, and Viral Social Media Production Pipeline designed natively for **Google Antigravity** and **Claude Code**.

It features a **universal cross-agent architecture** that operates as:
1. An official **Google Antigravity Plugin & Skill Bundle** (`plugin.json`, `rules/AGENTS.md`, `mcp_config.json`, `skills/`).
2. An official **Claude Code Plugin & Skill Bundle** (`CLAUDE.md`, `.claude-plugin/plugin.json`, `.claude/commands/`, `.claude/mcp.json`).

---

## 🎬 Architecture & Capabilities

```
gemini-antigravity-video-studio/
├── plugin.json                 # Antigravity Plugin Manifest (v1.0.0)
├── mcp_config.json             # Antigravity Blender MCP Server bridge (${PLUGIN_ROOT})
├── rules/AGENTS.md             # Antigravity compliance gates & safe-zone constraints
├── CLAUDE.md                   # Claude Code master showrunner & instructions
├── .claude-plugin/plugin.json  # Claude Code Plugin Manifest (v1.0.0)
├── .claude/
│   ├── commands/               # Claude Code slash commands (/video-generate, /video-remix, etc.)
│   └── mcp.json                # Claude Code Blender MCP bridge
├── assets/logo.svg             # Plugin branding & UI icon
├── skills/                     # Packaged Skills (Compatible with Antigravity & Claude)
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

## 🚀 Using with Google Antigravity

### 1. Global Installation in Antigravity
```bash
# Link workspace directly into Antigravity global plugins
ln -s "$(pwd)" ~/.gemini/config/plugins/antigravity-video-studio

# Or install via agy CLI from GitHub
agy plugin install https://github.com/Swatikantamishra8/gemini-antigravity-video-studio.git
```

### 2. Verify Plugin Discovery
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

---

## 🤖 Using with Claude Code

### 1. Global Installation in Claude Code
```bash
# Link into Claude Code global plugins
mkdir -p ~/.claude/plugins ~/.claude/skills
ln -s "$(pwd)" ~/.claude/plugins/claude-video-studio

# Link master skill into Claude Code skills
ln -s "$(pwd)/skills/antigravity-video-studio" ~/.claude/skills/video-studio
```

### 2. Claude Code Slash Commands
When running `claude` in this project or with the plugin enabled, you have instant access to custom slash commands:
- `/video-generate`: Generate a 100% code-driven cinematic video from scratch (Mode A).
- `/video-remix`: Remix raw user footage with silence trimming, captions, and sound effects (Mode B).
- `/video-analyze`: Extract audio beatmaps, spectral onsets, and viral blueprints (Mode C).
- `/video-render`: Render a Remotion composition with `--gl=angle` and concurrency control.

### 3. Automatic Project Discovery
Opening this directory with Claude Code automatically loads:
- **`CLAUDE.md`**: Master showrunner directives, engineering standards, and safe zones.
- **`.claude/mcp.json`**: Headless Blender MCP server for 3D generation.
- **`skills/`**: All 9 skills and 99 procedural style guides.

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

Every export automatically enforces the strict compliance rules defined in `rules/AGENTS.md` and `CLAUDE.md`:

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
python3 python_audio/analyze_media.py --audio assets/audio/test_bgm.wav --fps 60

# Render Remotion composition
./skills/antigravity-video-studio/scripts/render.sh StudioMasterVertical renders/out_vertical.mp4 2

# Validate Antigravity plugin integrity
agy plugin validate . --strict
```

---

## 📄 License & Upstream Attribution
This project incorporates open-source tools and design patterns from Remotion, Three.js, DeepSeek Harness, Lemo-Opuscar, PixelFX, and Video-Shotcraft. See `CREDITS.md` and `NOTICE` for full upstream licensing and attribution details.
