# SPTMM

## SPTarkov Mod Manager

### What

A simple mod-manager for SPTarkov, ideally compatible with both Linux and (yuck)
Windoze.

### Why

Because the existing mod-manager for SPTarkov doesn't work very well on linux.

I'm a mobile app dev by day - Native and React Native. I wanted an excuse to
start a new project and learn Next.js and Shadcn. This seemed like a good way to
do it.

Tauri let me do that in a way that let me avoid some jank, and let's me learn a
little Rust as well.

### How

Bun + Next.js + Shadcn + Tauri

## Usage

- Download the latest release
- Install*
- Run
- Profit

### Requirements

- `wmctrl` (or `hyprctl` if using hyprland).

## Building/running from source

### Requirements

- `bun` installed and available on `PATH`.
- `node` - because the Tauri CLI requires it.
- `rustc`/`rustup`/`cargo` - for Tauri.
- Check the official [prerequisites](https://tauri.app/start/prerequisites/) for
  your specific system.

A [flake.nix](./flake.nix) is provided with a default devShell if you prefer to
use that.

### Instructions

- Clone the repo
- `cd` to the repo
- `bun install`
- `bun run tauri dev`
