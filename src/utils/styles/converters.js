import Big from 'big.js';

/**
 * Convert pixels to rems based on the base font size.
 *
 * @param {number|string} pixels The number of pixels to be converted to rems.
 * @param {number} baseFontSize The base font size for the typography of the application (usually `<p>` `font-size`).
 * @param {string} unit The string value of the units to be used. Can be null, will default to 'rem'.
 * @return {string} Returns the em value of the pixel size provided offset from the base font.
 */
const pxToEm = (pixels, baseFontSize = 16, unit = 'rem') => {
    let pixelValue = pixels;
    let baseFontSizeValue = baseFontSize;

    if (typeof pixelValue === 'string') {
        // If the pixel value is a string remove the `px` unit from the string and convert the string to a number.
        pixelValue = Number(pixelValue.replace('px', ''));
    }

    if (typeof baseFontSize === 'string') {
        // If the pixel value is a string remove the `px` unit from the string and convert the string to a number.
        baseFontSizeValue = Number(baseFontSize.replace('px', ''));
    }

    // Only to 4 decimals as any more gets rounded to an improper value in the DOM.
    return `${Big(pixelValue).div(baseFontSizeValue).toFixed(4)}${unit}`;
};

/**
 * Take in a number or string and return the value as a px.
 *
 * @param {number|string} number The number attempting to be converted to px value.
 * @return {string} Returns the px value based on the number received.
 */
const numToPx = (number) => {
    if (typeof number === 'number') {
        return `${number}px`;
    }

    return number;
};

export { numToPx, pxToEm };
