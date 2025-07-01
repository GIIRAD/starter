import { defaultTheme } from '@kiwicom/orbit-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Button from '@kiwicom/orbit-components/lib/Button';

import type { NextPage } from 'next';
import Background from '../frontend/components/common/common-styled-components';

const Home: NextPage = () => {
  return (
    <Background color={defaultTheme.orbit.paletteCloudLight} >
      <Heading type='title1' align='center'>Welcome to Abimanufaktur App</Heading>
      <Button>Hello World!</Button>
    </Background>
  );
};

export default Home;
