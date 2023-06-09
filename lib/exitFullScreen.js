// Returns a `Promise` that resolves to `undefined`.
export default function exitFullScreen() {
	if (document.exitFullscreen) {
		return document.exitFullscreen()
	} else {
		return Promise.reject(new TypeError('Fullscreen mode is not supported'))
	}
}