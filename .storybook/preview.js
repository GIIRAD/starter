import * as NextImage from "next/image";
import "../frontend/styles/globals.css";
import provider from '../stories/decorators/provider.tsx'

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [provider]
