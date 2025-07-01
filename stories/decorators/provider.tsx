import KiwiThemeProvider from '@kiwicom/orbit-components/lib/ThemeProvider';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../frontend/styles/theme';
import customTokens from '../../frontend/styles/tokens';

export default function ProviderDecorator(Story: React.FC): React.ReactElement {
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
        <Story />
      </ThemeProvider>
    </KiwiThemeProvider>
  );
}
