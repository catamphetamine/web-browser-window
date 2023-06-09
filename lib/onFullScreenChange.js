import isFullScreen from './isFullScreen.js'

export default function onFullScreenChange(handler) {
	const listener = (event) => handler()
	document.addEventListener('fullscreenchange', listener)
	return () => {
		document.removeEventListener('fullscreenchange', listener)
	}
}