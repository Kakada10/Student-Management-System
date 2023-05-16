import React from 'react';
import App from './view/app';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import AuthPage from './auth';
import { Box } from '@chakra-ui/react';

export default function Routes() {
  return (
    <Box>
      <>
        {/* <Redirect from="/login" to="/" /> <AuthPage /> */}
        <App />
      </>
    </Box>
  );
}
