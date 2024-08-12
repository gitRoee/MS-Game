import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import JackpotPage from './pages/jackpotPage';

function App() {

  return (
      <ThemeProvider theme={theme}>
        <JackpotPage />
      </ThemeProvider>
  );
}

export default App;