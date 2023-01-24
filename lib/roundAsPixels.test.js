import roundAsPixels from './roundAsPixels.js'

describe('roundAsPixels', function() {
	it('should round pixels', function() {
		roundAsPixels(0).should.equal('0px')
		roundAsPixels(1).should.equal('1px')
		roundAsPixels(1.2).should.equal('1.200px')
		roundAsPixels(1.23).should.equal('1.230px')
		roundAsPixels(1.234).should.equal('1.234px')
		roundAsPixels(1.2345).should.equal('1.234px')
		roundAsPixels(1.23456).should.equal('1.235px')
	})
})