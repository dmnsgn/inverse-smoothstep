/** @module inverseSmoothstep */

/**
 * The inverse of the smoothstep function
 *
 * @alias module:inverseSmoothstep
 * @param {number} x
 * @returns {number}
 */
const inverseSmoothstep = (x) => 0.5 - Math.sin(Math.asin(1.0 - 2.0 * x) / 3.0);

export default inverseSmoothstep;
