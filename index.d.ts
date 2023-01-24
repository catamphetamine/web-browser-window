export function requestFullScreen(element: HTMLElement): boolean;
export function exitFullScreen(): void;
export function onFullScreenChange(handler: () => void): () => void;

export function roundAndStringify(pixelsCount: number, options: { precision: number }): string;
export function roundAsPixels(pixelsCount: number): string;
// export function roundPixelsForScreen(pixelsCount: number): number;

interface ScrollIntoViewOptions {
	duration: number;
}

export async function scrollIntoView(element: HTMLElement, options: ScrollIntoViewOptions): void;

export async function getScrollBarWidth(): number;
export async function getViewportWidth(): number;
export async function getViewportHeight(): number;
export async function getViewportWidthWithScrollbar(): number;
export async function getViewportHeightWithScrollbar(): number;