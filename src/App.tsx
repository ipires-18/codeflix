import { ThemeProvider, Box } from '@mui/system';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Routes, Route } from 'react-router-dom';

export const Home = (): JSX.Element => {
  return <div>Home</div>;
};

export const About = (): JSX.Element => {
  return <div>About</div>;
};

function App(): JSX.Element {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{ height: '100vh', background: theme => theme.palette.grey[900] }}
      >
        <Header />
        <Layout>
          <h1>Olá mundo</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
