import { ThemeProvider, Box } from '@mui/system';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Routes, Route } from 'react-router-dom';
import { ListCategory } from './features/categories/ListCategory';
import { CreateCategory } from './features/categories/CreateCategory';
import { EditCategory } from './features/categories/EditCategory';
import { Typography } from '@mui/material';

export const NotFound = (): JSX.Element => {
  return (
    <Box>
      <Typography variant="h1">404</Typography>
      <Typography variant="subtitle1">Page not found</Typography>
    </Box>
  );
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
          <Routes>
            <Route path="/" element={<ListCategory />} />
            <Route path="/categories" element={<ListCategory />} />
            <Route path="/categories/create" element={<CreateCategory />} />
            <Route path="/categories/edit/:id" element={<EditCategory />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
