import React,{useState} from 'react';
import {Box,Button} from '@mui/material';
// useState is used to manage the state of component.
const Dashboard = () => {
    const[result,setResult] = useState<number>(0);
    const performCalculate=async()=>{
        //dynamic import for the untility math function
        const{sum} = await import('../utils/math');
        const a=5;
        const b=10;
        const calculateResult = sum({a,b});
        setResult(calculateResult);
    }
    return (
        <Box>
            <Box>Result:{result}</Box>
            <Button 
            onClick={performCalculate}
            variant='outlined'
            >Start</Button>
        </Box>
    )
}

export default Dashboard
