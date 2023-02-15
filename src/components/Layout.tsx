import { Box, Container } from '@mui/material';
import React from 'react';

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, color: 'white' }}>
        {children}
      </Container>
    </Box>
  );
};
