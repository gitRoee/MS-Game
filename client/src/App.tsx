import { Snackbar } from '@mui/material';
import { useErrorContext } from './hooks/useErrorContext';
import JackpotPage from './pages/jackpotPage';

function App() {
  const { isError } = useErrorContext()

  return (
    <>
      <JackpotPage />
      <Snackbar
        open={isError}
        message="ERROR" />
    </>
  );
}

export default App;