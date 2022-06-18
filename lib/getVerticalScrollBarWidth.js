export default function getVerticalScrollBarWidth() {
	// This won't return correct scrollbar width
	// in iOS Safari when the page is zoomed,
	// because in iOS Safari, `document.documentElement.clientWidth`
	// doesn't reflect page zoom.
	return window.innerWidth - document.documentElement.clientWidth
}