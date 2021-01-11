import React from 'react';
import { render } from '@testing-library/react';

import { testId } from '../../utils/enums/testEnums';
import ClientTracker from './ClientTracker';

describe('ClientTracker Tests', () => {
    it('should render without errors with default props', () => {
        const { getByTestId } = render(<ClientTracker data-testid={testId} />);

        expect(getByTestId(testId)).toBeDefined();
    });
});
