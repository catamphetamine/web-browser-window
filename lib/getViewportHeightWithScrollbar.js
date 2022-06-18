// https://javascript.info/size-and-scroll-window
// `<!DOCTYPE html>` is required in order for this to work correctly.
// Without it, the returned height would be the height of the entire document.
export default function getViewportHeightIncludingScaleAndScrollbar() {
	// This variant of `getViewportHeight()`
	// supports iOS Safari's dynamically shown/hidden
	// top URL bar and bottom actions bar.
	// https://codesandbox.io/s/elegant-fog-iddrh
	// Tested in IE 11.
	// It also correctly reflects page zoom in iOS Safari.
	// (scales viewport height accordingly).
	return window.innerHeight
}
