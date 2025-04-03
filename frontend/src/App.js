import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import UselessCounter from './components/UselessCounter';

function App() {
  return (
    <ChakraProvider>
      <UselessCounter />
    </ChakraProvider>
  );
}

export default App;
