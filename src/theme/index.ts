// Basic theme interface
interface Theme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
    };
    spacing: {
        small: string;
        medium: string;
        large: string;
    };
    typography: {
        fontSize: {
            small: string;
            medium: string;
            large: string;
        };
        fontFamily: string;
    };
}

// Default theme configuration
export const defaultTheme: Theme = {
    colors: {
        primary: '#007AFF',
        secondary: '#5856D6',
        background: '#FFFFFF',
        text: '#000000',
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
    },
    typography: {
        fontSize: {
            small: '12px',
            medium: '16px',
            large: '20px',
        },
        fontFamily: 'system-ui, -apple-system, sans-serif',
    },
};

export type { Theme };