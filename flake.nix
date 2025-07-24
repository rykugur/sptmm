{
  description = "Bun flake.";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = { self, ... }@inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems =
        [ "aarch64-darwin" "aarch64-linux" "x86_64-darwin" "x86_64-linux" ];

      perSystem = { pkgs, ... }: {
        devShells.default = pkgs.mkShell { packages = [ pkgs.bun ]; };

        formatter = pkgs.nixfmt-rfc-style;
      };
    };
}
