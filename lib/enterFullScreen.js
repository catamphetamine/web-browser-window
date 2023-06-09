import getFullScreenElement from './getFullScreenElement.js'

// Returns a `Promise` that resolves to `undefined`.
export default function enterFullScreen(element) {
	if (getFullScreenElement()) {
		if (getFullScreenElement() === element) {
			return Promise.resolve()
		} else {
			return Promise.reject(new TypeError('Another Element holds the fullscreen mode'))
		}
	} else if (element.requestFullscreen) {
		return element.requestFullscreen()
	} else {
		return Promise.reject(new TypeError('Fullscreen mode is not supported'))
	}
}