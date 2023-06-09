export function requestFullScreen(element: HTMLElement): Promise<void>;
export function exitFullScreen(): Promise<void>;
export function toggleFullScreen(element: HTMLElement): Promise<void>;
export function isFullScreen(): boolean;
export function isFullScreenSupported(): boolean;
export function isFullScreenElement(element: HTMLElement): boolean;
export function getFullScreenElement(): HTMLElement;
export function onFullScreenChange(handler: () => void): () => void;

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