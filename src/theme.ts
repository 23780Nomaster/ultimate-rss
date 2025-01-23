import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    secondary: {
      50: '#E5E7EB',
      100: '#D1D5DB',
      500: '#6B7280',
      600: '#4B5563',
    }
  },
  config: {
    initialColorMode: 'light',
  },
  components: {
    Text: {
      baseStyle: {
        color: 'gray.800',
      },
    },
    Heading: {
      baseStyle: {
        color: 'gray.800',
      },
    },
  },
});

export type CustomThemeType = typeof theme;