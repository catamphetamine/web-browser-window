// https://javascript.info/size-and-scroll-window
// `<!DOCTYPE html>` may be required in order for this to work correctly.
export default function getViewportWidthWithScrollbar() {
	// Correctly reflects page zoom in iOS Safari.
	// (scales viewport width accordingly).
	return window.innerWidth
}
