import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
        </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;