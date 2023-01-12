import { renderHook, act, waitFor } from '@testing-library/react';
import { useUser } from './DidMount';

describe('DidMount test', () => {
    test('should return user with initial values and setUser method when it calls it', async () => {
        // Arrange
        const initialUser = {
            name: 'John',
            surname: 'Doe',
        };

        // Act
        const { result } = renderHook(() => useUser(initialUser));

        // Assert
        expect(result.current.user).toEqual(initialUser);
        expect(result.current.setUser).toEqual(expect.any(Function));

        // try without below code
        // digunakan agar semua lifecycle dijalankan sampai selesai terlebih dahulu
        await waitFor(() => {
            const updatedUser = {
                name: 'Jane',
                surname: 'Smith',
            };
            expect(result.current.user).toEqual(updatedUser);
        });
    });

    test('should update user when it calls setUser', async () => {
        // Arrange
        const initialUser = {
            name: 'John',
            surname: 'Doe',
        };

        // Act
        const { result } = renderHook(() =>
            useUser(initialUser)
        );

        act(() => {
            result.current.setUser({
                name: 'updated name',
                surname: 'updated surname',
            });
        });

        // Assert
        expect(result.current.user).toEqual({
            name: 'updated name',
            surname: 'updated surname',
        });
    });
});
