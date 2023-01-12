import { renderHook, waitFor } from '@testing-library/react';
import { useFilterUsers } from './DidUpdate';

describe('DidUpdate test', () => {
    it('should update value when it feeds filter equals "doe"', async () => {
        // Arrange
        const filter = 'doe';

        // Act
        const { result } = renderHook(() =>
            useFilterUsers(filter)
        );

        // Assert
        expect(result.current.value).toEqual(1);

        await waitFor(() => {
            expect(result.current.value).toEqual(2);
        }, {
            timeout: 1100
        });
    });
});
