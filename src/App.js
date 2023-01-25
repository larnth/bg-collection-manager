import { Box } from '@mui/material';
import './App.css';
import HeaderToolbar from './components/nav/HeaderToolbar';

export default function App() {
  return (
    <Box sx={{flexGrow: 1}}>
      <HeaderToolbar />
    </Box>
  );
}
