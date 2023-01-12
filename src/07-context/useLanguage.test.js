import * as React from 'react';
import { renderHook, act } from '@testing-library/react';
import { LanguageProvider } from './languageContext';
import { useLanguage } from './useLanguage';

describe('useLanguage test', () => {
    it('should return a message with language equals "en" when it renders the hook', () => {
        // Arrange
        const provider = props => (
            <LanguageProvider>{props.children}</LanguageProvider>
        );

        // Act
        const { result } = renderHook(() => useLanguage(), { wrapper: provider });

        act(() => {
            result.current.setLanguage('en');
        })

        // Assert
        expect(result.current.message).toEqual('The current language is: en');
    });

    it('should return a message with language equals "in" when it call setLanguage with "in"', () => {
        // Arrange
        const provider = props => (
            <LanguageProvider>{props.children}</LanguageProvider>
        );

        // Act
        const { result } = renderHook(() => useLanguage(), { wrapper: provider });

        act(() => {
            result.current.setLanguage('id');
        });

        // Assert
        expect(result.current.message).toEqual('The current language is: id');
    });
});
