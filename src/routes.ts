import React, { ReactElement, ReactNode } from 'react'
// import Dashboard  from './pages/Dashboard';
const Dashboard = React.lazy(()=>import('./pages/Dashboard'));
const About = React.lazy(()=>import('./pages/About'));
const Contact = React.lazy(()=>import('./pages/Contact'));
type Route={
    path:string;
    exact?:boolean;
    component?:React.ReactNode | null;
}
const routes:Route[]=[
    {
        path:'/',
        exact:true,
        // component:Dashboard
    },
    {
        path:'/about',
        // component:About
    },
    {
        path:'/contact',
        // component:Contact
    }
]
export default routes;