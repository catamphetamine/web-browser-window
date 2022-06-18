export default function getViewportHeight() {
	// Doesn't support iOS Safari's dynamically shown/hidden
	// top URL bar and bottom actions bar.
	// https://codesandbox.io/s/elegant-fog-iddrh
	// Tested in IE 11.
	// It also doesn't correctly reflect page zoom in iOS Safari.
	// (doesn't scale viewport height accordingly).
	// (but does reflect page zoom in desktop Chrome).
	return document.documentElement.clientHeight
}

// // This variant of `getViewportHeight()`
// // supports iOS Safari's dynamically shown/hidden
// // top URL bar and bottom actions bar.
// // https://codesandbox.io/s/elegant-fog-iddrh
// // Tested in IE 11.
// // It doesn't correctly reflect page zoom in iOS Safari.
// // (doesn't scale viewport height accordingly).
// // (but does reflect page zoom in desktop Chrome).
// function getViewportHeight() {
// 	const div = document.createElement('div')
// 	div.style.position = 'fixed'
// 	div.style.left = 0
// 	div.style.top = 0
// 	div.style.right = 0
// 	div.style.bottom = 0
// 	div.style.zIndex = -1
// 	document.body.appendChild(div)
// 	const height = div.clientHeight
// 	document.body.removeChild(div)
// 	return height
// }