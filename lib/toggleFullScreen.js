import getFullScreenElement from './getFullScreenElement.js'
import exitFullScreen from './exitFullScreen.js'
import enterFullScreen from './enterFullScreen.js'

// Returns a `Promise` that resolves to `undefined`.
export default function toggleFullScreen(element) {
	if (getFullScreenElement() === element) {
		return exitFullScreen()
	} else {
		return enterFullScreen(element)
	}
}