import React,{useState,useEffect,useCallback} from 'react';
import {Box,Button} from '@mui/material';
// useState is used to manage the state of component.
const Dashboard = () => {
    const[result,setResult] = useState<number>(0);
    const[value,setValue] = useState<number>(0);
    const performCalculate1=useCallback(async()=>{
        //dynamic import for the untility math function
        // const{sum} = await import('../utils/math');
        // const a=5;
        // const b=10;
        // const calculateResult = sum({a,b});
        // setResult((result)=>calculateResult+result);
        console.log("memorize funciton", 123)
    },[]);
    
    const performCalculate =()=>{
        console.log("memorize funciton", 456)

    }
    const onChange=()=>{
        console.log("onchange",789);
    }
    // useEffect(()=>{
    //   console.log("change1...",123);
    // },[]);
    // useEffect(()=>{
    //     console.log("change2...",456);
    // },[result]);
    return (
        <Box>
            <Box>Result:{result}</Box>
            <Box>result:{value}</Box>
            <Button 
            onClick={performCalculate1}
            variant='outlined'
            >Start</Button>
            <Button onClick={onChange} variant='outlined'>Change</Button>
        </Box>
    )
}

export default Dashboard
