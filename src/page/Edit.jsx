import { Try } from '@mui/icons-material'
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { host } from '../components/api'
import { toast } from 'react-toastify'


export default function Edit() {
    const navigate=useNavigate()
    const {id}=useParams();
    const [formData,setFormData]=useState({
          title:'',
          amount:'',
          category:''
    });

   
     useEffect(() => {
         const singleData =async()=>{
        try {
           
            const res= await axios.get(`${host}/display/${id}`);
            console.log(res)
           if(res.data.sucess){
            setFormData(res.data.data)
           }
        } catch (error) {
            console.log(error)
        }
    };
        singleData();
        
     },[id]);

    const handleSubmit=async()=>{
        try {
           const res= await axios.put(`${host}/modify/${id}`,formData)
        //    console.log(res)
        
        if(res.data.success){
            toast.success(res.data.message)
        }
        navigate('/')
        } catch (error) {
            // console.log(error)
            // toast.error(res.data.message)
            console.log(error)
        }
        }


    
  return (
    <div>
      <Box >
        <Typography>
            Edit My File 
        </Typography>


      </Box>
      <Box>
        <Paper>
            <TextField id="outlined-basic" label="Expense Title" variant="outlined" fullWidth sx={{mb:2}}
            onChange={(e)=>setFormData({...formData,title:e.target.value})} value={formData.title}
            />
            
            <TextField  type="number" id="outlined-basic" label="Expense Amount" variant="outlined" fullWidth sx={{mb:2}}
            onChange={(e)=>setFormData({...formData,amount:e.target.value})} value={formData.amount}
            />

            <FormControl fullWidth sx={{mb:2}}>
            <InputLabel id="demo-simple-select-label" >Category</InputLabel>
            <Select
            labelId="demo-simple-select-label"
             id="demo-simple-select"
            label="Category"
            onChange={(e)=>setFormData({...formData,category:e.target.value})} value={formData.category}
               >
            <MenuItem value='Food'>Food</MenuItem>
             <MenuItem value='Travel'>Travel</MenuItem>
           <MenuItem value='Bill'>Bill</MenuItem>
            </Select>
        </FormControl>
        <Button variant="contained"  fullWidth sx={{mb:2}} onClick={handleSubmit}>
           Submit
         </Button>
         <Button variant="contained" fullWidth sx={{mb:2}} onClick={()=>navigate('/')}>
             Return to Expense
            </Button>
        </Paper>

      </Box>
    </div>
  )
}