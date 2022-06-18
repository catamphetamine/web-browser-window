export default function getViewportWidth() {
	// Doesn't correctly reflect page zoom in iOS Safari.
	// (doesn't scale viewport width accordingly).
	// (but does reflect page zoom in desktop Chrome).
	return document.documentElement.clientWidth
}
