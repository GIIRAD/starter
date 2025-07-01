import '../frontend/styles/globals.css';
import type { AppProps } from 'next/app';
import KiwiThemeProvider from '@kiwicom/orbit-components/lib/ThemeProvider';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../frontend/styles/theme';
import customTokens from '../frontend/styles/tokens';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <KiwiThemeProvider
      theme={{
        orbit: customTokens,
        rtl: false,
        transitions: false,
        lockScrolling: false,
      }}
    >
      <ThemeProvider
        theme={defaultTheme}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </KiwiThemeProvider>
  );
}

export default MyApp;
