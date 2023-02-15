import { ThemeProvider, Box } from '@mui/system';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={{}}>
      <Box component="main" sx={{ height: '100vh', background: '#000' }} />
    </ThemeProvider>
  );
}

export default App;
