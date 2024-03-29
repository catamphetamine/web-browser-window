import {
	enterFullScreen,
	exitFullScreen,
	toggleFullScreen,
	isFullScreen,
	isFullScreenSupported,
	isFullScreenElement,
	getFullScreenElement,
	onFullScreenChange,

	// roundPixelsForScreen,
	scrollIntoView,

	getVerticalScrollBarWidth,
	getViewportWidth,
	getViewportHeight,
	getViewportWidthWithScrollbar,
	getViewportHeightWithScrollbar
} from '../index.js'
// } from 'web-browser-window'

describe('exports', function() {
	it('should export stuff', function() {
		enterFullScreen.should.be.a('function')
		exitFullScreen.should.be.a('function')
		onFullScreenChange.should.be.a('function')
		toggleFullScreen.should.be.a('function')
		isFullScreen.should.be.a('function')
		isFullScreenSupported.should.be.a('function')
		isFullScreenElement.should.be.a('function')
		getFullScreenElement.should.be.a('function')

		// roundPixelsForScreen.should.be.a('function')
		scrollIntoView.should.be.a('function')

		getVerticalScrollBarWidth.should.be.a('function')
		getViewportWidth.should.be.a('function')
		getViewportHeight.should.be.a('function')
		getViewportWidthWithScrollbar.should.be.a('function')
		getViewportHeightWithScrollbar.should.be.a('function')
	})
})