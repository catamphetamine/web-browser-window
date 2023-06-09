import getFullScreenElement from './getFullScreenElement.js'

export default function isFullScreen() {
	return Boolean(getFullScreenElement())
}