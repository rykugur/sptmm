# SPTMM

## SPTarkov Mod Manager

### What

A simple mod-manager for SPTarkov, ideally compatible with both Linux and
(yuck) Windoze.

### Why

Because the existing mod-manager for SPTarkov doesn't work very well on linux.

I'm a mobile app dev by day - Native and React Native. I wanted an excuse to
start a new project and learn Next.js and Shadcn. This seemed like a good way
to do it.

Eventually I will consider moving this into a tauri app for a desktop-app-like
experience... when I feel like learning Rust.


### How

Bun + Next.js + Shadcn

## Requirements

- `bun` installed and available on `PATH`.
	- A [flake.nix](./flake.nix) is provided with a default devShell if you
  prefer to use that.

## Installation/usage

- Clone the repo
- `cd` to the repo
- `bun install`
- `bun run build`
- `bun start`
- Navigate to [localhost:3000](http://localhost:3000)
