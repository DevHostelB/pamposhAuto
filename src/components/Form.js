import React, {useRef} from 'react'
import { useRouter } from 'next/navigation'
import emailjs from '@emailjs/browser';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import {Colors} from '../styles/constants';
import {yearArray, makeArray, modelsArray, partsArray} from '@/util/Datas/formData';


const Form = ({width}) => {
  const router = useRouter()
  const form = useRef();
  const buttonRef = useRef(null);
  const [models, setModels] = React.useState([]);

  const [year, setYear] = React.useState('');
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');
  const [part, setPart] = React.useState('');
  const [details, setDetails] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  function onchangeHandler(e) {
    setMake(e.target.value)
    const selectedMake = modelsArray.find(item => item.name === e.target.value);
    setModels(selectedMake.models);
  }

  function handleButtonClick() {
    buttonRef.current.click();
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cbccw97', 'template_9muexga', form.current, {
        publicKey: 'WrxU_JPyeIwBpI09B',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    );
    
    router.push('/thankyou')
  };

  return <>
  <form ref={form} onSubmit={sendEmail}>
    <Box my={2} mx={{xs: 1, lg: 5}} sx={{backgroundColor: 'white', border: '1px solid lightgrey'}}>
             <Box>
                <Typography py={1} variant="h5" gutterBottom sx={{backgroundColor: Colors.blue, textAlign: 'center', color: Colors.light}}>Find my part now</Typography>
             </Box>
             {/* {[1,2,3,4].map(() => ( */}
                <Box py={1} px={5} sx={{display: 'flex', alignItems: 'center' ,justifyContent: 'space-between'}}>
                  <Typography variant="body1" gutterBottom>Year</Typography> 
                  <FormControl >
                    <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name='year'
                      value={year}
                      label="Select Year"
                      onChange={(e) => setYear(e.target.value)}
                      sx={{width: {xs: '180px', lg: '12vw'}}}
                      required
                    >
                      <MenuItem disabled value={'Select'}>Select Part</MenuItem>
                      {yearArray.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                    </Select>
                  </FormControl>
                </Box>
                <Box py={1} px={5} sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between'}}>
                  <Typography variant="body1" gutterBottom>Make</Typography> 
                  <FormControl >
                    <InputLabel id="demo-simple-select-label">Select Make</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name='e'
                      value={make}
                      label="Select Make"
                      onChange={onchangeHandler}
                      sx={{width: {xs: '180px', lg: '12vw'}}}
                      required
                    >
                      <MenuItem disabled value={'Select'}>Select Make</MenuItem>
                      {makeArray.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                    </Select>
                  </FormControl>
                </Box>
                <Box py={1} px={5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Typography variant="body1" gutterBottom>Model</Typography> 
                  <FormControl >
                    <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name='model'
                      value={model}
                      label="Select Model"
                      onChange={(e) => setModel(e.target.value)}
                      sx={{width: {xs: '180px', lg: '12vw'}}}
                      required
                    >
                      <MenuItem disabled value={'Select'}>Select Part</MenuItem>
                      {models.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                    </Select>
                  </FormControl>
                </Box>
                <Box py={1} px={5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Typography variant="body1" gutterBottom>Part</Typography> 
                  <FormControl >
                    <InputLabel id="demo-simple-select-label">Select Part</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name='part'
                      value={part}
                      label="Select Part"
                      onChange={(e) => setPart(e.target.value)}
                      sx={{width: {xs: '180px', lg: '12vw'}}}
                      required
                    >
                      <MenuItem disabled value={'Select'}>Select Part</MenuItem>
                      {partsArray.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                    </Select>
                  </FormControl>
                </Box>
             {/* ))} */}
             {/* {[1,2,3,4].map(() => ( */}
              <Box py={1} px={5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography variant="body1" gutterBottom>Details</Typography> 
                <TextField value={details} onChange={(e) => setDetails(e.target.value)} id="outlined-basic" name='details' label="Additional details" variant="outlined" type='text' required sx={{width: {xs: '180px', lg: '12vw'}}}/>
              </Box>
              <Box py={1} px={5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography  variant="body1" gutterBottom>Name</Typography> 
                <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" name='name' label="Name" variant="outlined" type='text' required sx={{width: {xs: '180px', lg: '12vw'}}}/>
              </Box>
              <Box py={1} px={5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography  variant="body1" gutterBottom>Email</Typography> 
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" name='email' label="Email" variant="outlined" type='email' required sx={{width: {xs: '180px', lg: '12vw'}}}/>
              </Box>
              <Box py={1} px={5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography  variant="body1" gutterBottom>Phone</Typography> 
                <TextField  value={phone} onChange={(e) => setPhone(e.target.value)} id="outlined-basic" name='phone' label="Phone" variant="outlined" type='number' required sx={{width: {xs: '180px', lg: '12vw'}}}/>
              </Box>
             {/* ))} */}

             <Box py={2} sx={{display: 'flex', justifyContent: 'center'}}><Button variant='contained' sx={{backgroundColor: Colors.yellow, color: Colors.dark, padding: '15px 50px'}} onClick={handleButtonClick}>Find my part</Button></Box>
             <button style={{display: 'none'}} ref={buttonRef}></button>
             </Box>
  </form>
  </>
}

export default Form