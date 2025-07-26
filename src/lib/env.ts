import { isTauri as _isTauri } from "@tauri-apps/api/core";

export const isTauri = _isTauri();
export const isWeb = !isTauri;

export const isMobile = navigator.maxTouchPoints > 0;
export const isDesktop = !isMobile;

export const isTauriMobile = isTauri && isMobile;
export const isTauriDesktop = isTauri && isDesktop;

export const isWebMobile = isWeb && isMobile;
export const isWebDesktop = isWeb && isDesktop;
