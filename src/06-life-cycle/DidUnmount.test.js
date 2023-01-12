import { renderHook, waitFor } from '@testing-library/react';
import { usePolling } from './DidUnmount';

describe('DidUnmount test', () => {
    it('should return count equals 0 when initialize the hook', () => {
        // Arrange
        // Act
        const { result } = renderHook(() => usePolling());

        // Assert
        expect(result.current.count).toEqual(0);
    });

    it('should return count equals 1 when it waits for next update', async () => {
        // Arrange

        // Act
        const { result } = renderHook(() => usePolling());

        await waitFor(() => {
            // Assert
            expect(result.current.count).toEqual(1);
        }, {
            timeout: 1100
        });
    });

    it('should call clearInterval when it unmounts the component', async () => {
        // Arrange
        const clearIntervalStub = jest.spyOn(window, 'clearInterval');

        // Act
        const { result, unmount } = renderHook(() =>
            usePolling()
        );

        await waitFor(() => {
            // Assert
            expect(result.current.count).toEqual(1);
        }, {
            timeout: 1100
        })

        unmount();
        expect(clearIntervalStub).toHaveBeenCalled();
    });
});
