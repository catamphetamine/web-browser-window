export function requestFullScreen(element: HTMLElement): boolean;
export function exitFullScreen(): void;
export function onFullScreenChange(handler: () => void): () => void;

export function roundPixels(pixelsCount: number): number;

interface ScrollIntoViewOptions {
	duration: number;
}

export async function getScrollBarWidth(): number;
export async function getViewportWidth(): number;
export async function getViewportHeight(): number;
export async function getViewportWidthWithScrollbar(): number;
export async function getViewportHeightWithScrollbar(): number;