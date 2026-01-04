import { Box, Typography } from '@mui/material'

import FloatButton from '../components/FloatButton'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify/unstyled';
import axios from 'axios';
import { host } from '../components/api';
import FloatingActionButtons from '../components/FloatButton';
import BasicTable from '../components/Table';

export default function View() {

  const [expense,setExpense]=useState([]);
  //useEffect
  const fetchData=async()=>{
    try {
      const res= await axios.get(`${host}/view`);
      console.log("dataaaaaaa",res.data.data)
      // if(res.data.success){
         setExpense(res.data.data)
              // }
    } catch (error) {
       console.log(error)
       toast.error(res.data.message)
    }
  }

  console.log("This is data",+expense)

  useEffect(()=>{
    fetchData();
  },[])
    
  return (
    <div>
      <Typography sx={{textAlign:'center',fontWeight:'bold',color:'blueviolet'}}>Expense Tracker</Typography>
      <Box>
        <BasicTable fetchData={expense}/>
        <FloatingActionButtons/>
      </Box>
    </div>
  )
}