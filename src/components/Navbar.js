'use client'
import Image from 'next/image';
import {useState} from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';

import {Colors} from '../styles/constants';
import img2 from '../../public/img2.png';

const Navbar = () => {
  const [right, setRight] = useState(-10000)

  function handleClick() {
    setRight(right === 0 ? -10000 : 0)
  }

  return <>
    <Box sx={{backgroundColor: Colors.light, height: '100vh', width: '100vw', display: {xs: 'block', lg: 'none'}, position: 'fixed', zIndex: '10', right: {right}, transition: 'all 0.5s ease-in-out'}}>
        <Box pt={3} pr={1} sx={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button onClick={handleClick}><MenuIcon/></Button>
        </Box>
        <Stack ml={3}>
            {['Home', 'Engine', 'Transmisson', 'Resource', 'About', 'Contact', 'Financing'].map((item) => (
              <Link key={item} href="/">
                <Button  sx={{color: 'black', marginY: '10px', fontSize: '20px'}}>{item}</Button>
              </Link>
            ))}
        </Stack>
    </Box>

    <Box mx={{xs: 0, lg: 12}} py={3} sx={{display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', lg: 'row'}}}>
        <Box ml={{xs: 2.5, lg: 0}} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Box sx={{display: 'flex'}}>
            <Image alt="img" src={img2} width={50}/>
            <Typography mt={1} ml={2} variant="h4" component="h1" sx={{fontSize: {xs: '22px', lg: '30px'}}}>Safe Auto Part</Typography>
          </Box>
          <Box sx={{display: {xs:'block', lg: 'none'}}}>
            <Button onClick={handleClick}><MenuIcon/></Button>
          </Box>
        </Box>
        <Box p={1} sx={{backgroundColor:{xs: Colors.blue, lg: 'transparent', display: 'flex', justifyContent: 'center'}}} mt={{xs: 2, lg: 0}}>
            <Button variant="contained" sx={{marginRight: 1, backgroundColor: Colors.yellow , color: 'black', fontSize: '15px', width: {xs:'45%', lg: 'auto'}}}><a href='mailto:autopartssafe@gmail.com' style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center'}}><EmailIcon sx={{marginRight: 1}}/>Email Us</a></Button>

            <Button variant="contained" sx={{marginLeft: 1, backgroundColor: Colors.yellow , color: 'black', fontSize: '15px', width: {xs:'45%', lg: 'auto'}}}><a href='tel:+18442800609' style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center'}}><PhoneIcon /> 18442800609</a></Button>
        </Box>
    </Box>
    <Box pt={1.5} pb={0.5} pl={10} sx={{backgroundColor: Colors.blue, display: {xs: 'none', lg: 'flex'}}}>
            {['Home', 'Engine', 'Transmisson', 'Resource', 'About', 'Contact', 'Financing'].map((item) => (
              <Link key={item} href="/">
                <Button  variant="text" sx={{borderBottom: '5px solid transparent' ,color: 'white', marginLeft: '20px', '&: hover': {borderBottom: '5px solid #ffd401'}}}>{item}</Button>
              </Link>
            ))}
    </Box>
  </>
}

export default Navbar