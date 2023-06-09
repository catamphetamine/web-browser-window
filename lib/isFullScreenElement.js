import getFullScreenElement from './getFullScreenElement.js'

export default function isFullScreenElement(element) {
	return getFullScreenElement() === element
}