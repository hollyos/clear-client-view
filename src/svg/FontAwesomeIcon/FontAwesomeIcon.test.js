import React from 'react';
import { render } from '@testing-library/react';

import { testId } from '../../utils/enums/testEnums';
import FontAwesomeIcon from './FontAwesomeIcon';

describe('FontAwesomeIcon Tests', () => {
    it('should render without errors with required props', () => {
        const { getByTestId } = render(<FontAwesomeIcon icon="spinner" data-testid={testId} />);

        expect(getByTestId(testId)).toBeDefined();
    });
});
