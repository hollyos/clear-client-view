import { pxToEm, numToPx } from './converters';

describe('pxToEm Tests', () => {
    it('should return "0.0000rem" if provided "0"', () => {
        expect(pxToEm('0')).toBe('0.0000rem');
    });

    it('should return "0.0625rem" if provided "1"', () => {
        expect(pxToEm('1')).toBe('0.0625rem');
    });

    it('should return "0.0000rem" if provided 0', () => {
        expect(pxToEm(0)).toBe('0.0000rem');
    });

    it('should return "0.0625rem" if provided 1', () => {
        expect(pxToEm(1)).toBe('0.0625rem');
    });
});

describe('numToPx Tests', () => {
    it('should return "-1px" if provided -1', () => {
        numToPx(-1);
    });

    it('should return "0px" if provided 0', () => {
        numToPx(0);
    });

    it('should return "4px" if provided 4', () => {
        numToPx(4);
    });

    it('should return "40px" if provided 40', () => {
        numToPx(40);
    });

    it('should return "400px" if provided 400', () => {
        numToPx(400);
    });

    it('should return "-1px" if provided -1px', () => {
        numToPx('-1px');
    });

    it('should return "0px" if provided "0px"', () => {
        numToPx('0px');
    });

    it('should return "4px" if provided "4px"', () => {
        numToPx('4px');
    });

    it('should return "40px" if provided "40px"', () => {
        numToPx('40px');
    });

    it('should return "400px" if provided "400px"', () => {
        numToPx('400px');
    });

    it('should return "test" if provided "test"', () => {
        numToPx('test');
    });
});
