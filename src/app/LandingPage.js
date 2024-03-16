'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import useMediaQuery from "@mui/material/useMediaQuery";

import img1 from '../../public/img1.png';
import img2 from '../../public/img2.png';
import Transmission from '../../public/Transmission.png';
import {Colors} from '../styles/constants';
import Form from '@/components/Form';

const Cards = () => {
  return <>
    <Grid item xs={12} lg={6}>
                <Paper elevation={2} sx={{display: 'flex', justifyContent: 'space-between', padding: '20px 40px', height: '130px'}}>
                    <Box>
                       <Typography variant="body2" gutterBottom>Special Offer</Typography>
                       <Typography variant="h6" gutterBottom>Used Engines</Typography>
                       <Link href="/details/img2">
                         <Button variant='contained' sx={{backgroundColor: Colors.yellow, color: Colors.dark}}>Shop Now</Button>
                       </Link>
                    </Box>
                    <Box>
                       <Image alt="img" src={img2} style={{objectFit: 'cover', width: '130px', height: 'auto'}}/>
                    </Box>
                </Paper>
              </Grid>
              <Grid  item xs={12} lg={6}>
                <Paper elevation={2} sx={{display: 'flex', justifyContent: 'space-between', padding: '20px 40px', height: '130px'}}>
                    <Box>
                       <Typography variant="body2" gutterBottom>Special Offer</Typography>
                       <Typography variant="h6" gutterBottom>Used Transmissons</Typography>
                       <Link href="/details/Transmission">
                         <Button variant='contained' sx={{backgroundColor: Colors.yellow, color: Colors.dark}}>Shop Now</Button>
                       </Link>
                    </Box>
                    <Box>
                       <Image alt="img" src={Transmission}  style={{objectFit: 'cover', width: '130px', height: 'auto'}}/>
                    </Box>
                </Paper>
              </Grid>
  </>
}

const LandingPage = () => {
  const islg = useMediaQuery("(min-width:1200px)");

  return <>
    <Box pt={5} sx={{backgroundColor: Colors.grey}}>
      <Grid container spacing={0} pl={{xs: 0, lg: 10}}>

        <Grid item xs={12} md={7.5}>
          <Box p={2} sx={{}}>
            <Image src={img1} alt="img" style={{width: islg ? '50vw' : '100%',  height: islg ? 'auto': '200px', objectFit: 'cover'}}/>
          </Box>

            <Grid px={2} container spacing={2} mt={2} sx={{display: {xs: 'none', lg: 'flex'}}}>
              <Cards />
            </Grid>

        </Grid>

        <Grid item xs={12} lg={4.5}>

            <Form width={15}/>

        </Grid>
      </Grid>

      <Grid pb={2} px={2} container spacing={2} sx={{display: {xs: 'flex', lg: 'none'}}}>
              <Cards />
        </Grid>

      <Box py={{xs: 0, lg: 5}}  >
        <Grid my={0} container >
          <Grid lg={4} sx={{display: {xs: 'none', lg: 'flex'}}}>
             <Image alt='img2' src={img2} style={{width: '100%', height: '208px', objectFit: 'cover'}}/>
          </Grid>
          <Grid item lg={8}>
             <Box p={5} sx={{backgroundColor: Colors.blue, color: Colors.light}}>
                <Typography mb={1} variant="h3" gutterBottom>Flash sale is on</Typography>
                <Typography variant="body1" gutterBottom>Use coupon code for flat 5% off your online order.</Typography>
                <Link href="/details/img2">
                  <Button variant="contained" sx={{backgroundColor: Colors.yellow, color: 'black'}}>Shop Now</Button>
                </Link>
             </Box>
          </Grid>
        </Grid>
      </Box>
      
      
    </Box>
  </>
}

export default LandingPage