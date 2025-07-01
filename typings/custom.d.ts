/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeShape } from '@kiwicom/orbit-components/lib/defaultTheme';

declare module 'styled-components' {
  export type DefaultTheme = ThemeShape;
}

declare global {
  interface Window {
    pipedriveLeadboosterConfig: any,
    LeadBooster: any,
  }
}

export {};
