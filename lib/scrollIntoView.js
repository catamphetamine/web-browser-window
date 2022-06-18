// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// https://github.com/stipsan/scroll-into-view-if-needed#quality
// import scrollIntoView from 'scroll-into-view-if-needed'
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed'

// const scrollIntoViewSmoothly =
// 	'scrollBehavior' in document.documentElement.style
// 		? scrollIntoView
// 		: smoothScrollIntoView

// `smooth-scroll-into-view-if-needed` returns a `Promise`
// so it is used here instead of the native `scrollIntoView()`.
export default function(element, { duration }) {
	return smoothScrollIntoView(element, {
		scrollMode: 'if-needed',
		ease: EASING.easeInOutSine,
		duration,
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
		// "Defines the transition animation. One of auto or smooth. Defaults to auto."
		behavior: 'smooth',
		// "Defines vertical alignment. One of start, center, end, or nearest. Defaults to start."
		block: 'nearest',
		// "Defines horizontal alignment. One of start, center, end, or nearest. Defaults to nearest."
		inline: 'nearest'
	})
}

// https://gist.github.com/gre/1650294#file-easing-js
const EASING = {
	easeInOutSine: t => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
}