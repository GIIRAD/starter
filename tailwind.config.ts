import type { Config } from 'tailwindcss';
import orbitComponentsPreset from '@kiwicom/orbit-tailwind-preset';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@kiwicom/orbit-components/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        // KORREKTUR: Verwenden Sie die Variable, die in layout.tsx definiert ist.
        base: 'var(--font-geist-sans)',
      },
    },
  },
  plugins: [],
  presets: [orbitComponentsPreset()],
};
export default config;
