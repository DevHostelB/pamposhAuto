'use client'
import Image from 'next/image';

import useMediaQuery from "@mui/material/useMediaQuery";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Form from '@/components/Form';

const Orders = ({img}) => {
  const islg = useMediaQuery("(min-width:1200px)");

  return <>
    <Box pt={5} mx={{xs: 0, lg: 15}}>
      <Grid container spacing={0} pl={{xs: 0, lg: 10}}>

        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
          <Box p={2} sx={{width: '800px', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Image src={require(`@/../../public/${img}.png`)} alt="img1" style={{objectFit: 'cover', width: '90%', height: 'auto'}}/>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
            <Form width={25}/>
        </Grid>
      </Grid>     
    </Box>
  </>
}

export default Orders