import React,{Suspense} from 'react';
import {Box} from '@mui/material';
import './App.css';
const Dashboard = React.lazy(()=>import('./pages/Dashboard'));
// code splitting in react js
/**
 * using React.lazy and Suspense(for component)
 * using dynamic import (for none component)
 */
function App() {
  return (
   <Box>
    {/*Wrap lazy-loaded component with suspense*/}
    <Suspense fallback={<Box>Loading...</Box>}>
      <Dashboard/>
    </Suspense>
   </Box>
  );
}

export default App;
