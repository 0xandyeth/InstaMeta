import React,{Suspense} from 'react';
import {Box} from '@mui/material';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import routes from './routes';
// import Dashboard from './pages/Dashboard';
const Dashboard = React.lazy(()=>import('./pages/Dashboard'));
const About = React.lazy(()=>import('./pages/About'));
const Contact = React.lazy(()=>import('./pages/Contact'));
// code splitting in react js
/**
 * using React.lazy and Suspense(for component)
 * using dynamic import (for none component)
 */
function App() {
  return (
   <Router>
    {/*Wrap lazy-loaded component with suspense*/}
    <Suspense fallback={<Box>Loading...</Box>}>
      <Routes>
       {/* {
        routes.map((route)=>(
          <Route key={route.path} path={route.path} element={route.component}/>
        ))
       } */}
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Suspense>
   </Router>
  );
}

export default App;
