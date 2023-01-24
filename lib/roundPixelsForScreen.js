/** Rounds the amount of pixels specifically for the current device's
 * max resolution (aka "pixel ratio"). For example, on a "2x" "retina" screen,
 * `roundAsPixels(123.45678)` would return `"123.456px"` while
 * `roundPixelsForScreen(123.45678)` would return `123.5` because that
 * specific device's screen can only resolve at most up to a half of a pixel.
 *
 * This is more of an experimental "proof of concept" function though because
 * the regular `roundAsPixels()` function works just fine.
 *
 * @param {number}
 * @return {number}
 */
export default function roundPixelsForScreen(value) {
	if (typeof window === 'undefined' || !window.devicePixelRatio) {
		return Math.round(value)
	}
	const step = 1 / window.devicePixelRatio
	let roundedValue = Math.floor(value)
	while (roundedValue < value - step / 2) {
		roundedValue += step
	}
	return roundedValue
}