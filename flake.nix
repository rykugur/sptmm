{
  description = "Flake for SPTMM (SPTarkov Mod Manager).";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = { flake-parts, ... }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems =
        [ "aarch64-darwin" "aarch64-linux" "x86_64-darwin" "x86_64-linux" ];

      perSystem = { pkgs, lib, ... }:
        let
          libraries = lib.optionals pkgs.stdenv.isLinux [
            pkgs.webkitgtk_4_1
            pkgs.gtk3
            pkgs.cairo
            pkgs.gdk-pixbuf
            pkgs.glib
            pkgs.dbus
            pkgs.openssl_3_5
            pkgs.librsvg
          ];
        in {
          devShells.default = pkgs.mkShell {

            packages = [
              pkgs.bun

              # tauri
              pkgs.cargo
              pkgs.rustc
              pkgs.rustup

              pkgs.nodejs
            ] ++ (lib.optionals pkgs.stdenv.isLinux [
              pkgs.curl
              pkgs.wget
              pkgs.pkg-config
              pkgs.dbus
              pkgs.openssl_3
              pkgs.glib
              pkgs.gtk3
              pkgs.libsoup_2_4
              pkgs.webkitgtk_4_1
              pkgs.librsvg
            ]);

            shellHook = lib.optionalString pkgs.stdenv.isLinux ''
              export LD_LIBRARY_PATH=${
                pkgs.lib.makeLibraryPath libraries
              }:$LD_LIBRARY_PATH
              export XDG_DATA_DIRS=${pkgs.gsettings-desktop-schemas}/share/gsettings-schemas/${pkgs.gsettings-desktop-schemas.name}:${pkgs.gtk3}/share/gsettings-schemas/${pkgs.gtk3.name}:$XDG_DATA_DIRS
            '';
          };

          formatter = pkgs.nixfmt-rfc-style;
        };
    };
}
