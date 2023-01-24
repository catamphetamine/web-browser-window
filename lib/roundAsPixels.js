import roundAndStringify from './roundAndStringify.js'

/**
 * Rounds the amount of pixels to a sensible precision value.
 * Example: `123.456789` → `"123.457px"`, because no screen could currently resolve
 * up to a 10,000th fraction of a pixel, and for the time being resolving up to
 * a 1,000th franction of a pixel seems more than enough.
 *
 * This function could be used for less clutter in debugging and also for dealing with
 * really big or really small numbers which could end up converted to a string using
 * "exponential" format as `"1.2345e-50"`, and when a web browser receives such a weird value
 * for a pixels amount, it considers it invalid.
 *
 * And if such an "invalid" pixels amount is used as part of a "complex" CSS property
 * like `box-shadow` then the whole such property gets discarded.
 *
 * @param {number}
 * @return {string}
 */
export default function roundAsPixels(number) {
  return roundAndStringify(number, { precision: 3 }) + 'px'
}
