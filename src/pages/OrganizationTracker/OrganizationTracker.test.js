import React from 'react';
import { render } from '@testing-library/react';

import { testId } from '../../utils/enums/testEnums';
import OrganizationTracker from './OrganizationTracker';

describe('OrganizationTracker Tests', () => {
    it('should render without errors with default props', () => {
        const { getByTestId } = render(<OrganizationTracker data-testid={testId} />);

        expect(getByTestId(testId)).toBeDefined();
    });
});