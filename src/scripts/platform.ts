const ua = navigator.userAgent;

export const isIOS = /iPhone|iPad|iPod/.test(ua);
export const isAndroid = /Android/.test(ua);
