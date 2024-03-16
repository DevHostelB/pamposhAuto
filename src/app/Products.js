import Link from 'next/link';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import {Colors} from '../styles/constants';
import {productsArray, productsButtonsArray} from '@/util/Datas/productsData';

const Products = () => {

  return <>
    <Box mx={{xs: 3, lg: 10}} my={5}>
        <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
                <Paper elevation={1}>
                  <Stack>
                    <Typography mb={2} py={2} px={3} sx={{backgroundColor: Colors.blue, color: Colors.light}}>Shop by brand</Typography>
                    <Box ml={1.5}>
                    {productsButtonsArray.map((item) => (
                      // <Link href={`/make/${item}`}>
                        <Button key={item} sx={{display: 'flex', justifyContent: 'flex-start', color: Colors.dark}}>{item}</Button>
                      // </Link>
                    ))}
                    </Box>
                  </Stack>
                  <Box mt={2} px={3} py={2} sx={{backgroundColor: Colors.yellow, textAlign: 'center'}}>
                     <Typography m={0} variant="body1" sx={{color: Colors.light}}>Big Sale On Engines</Typography>
                     <Typography m={0} variant="h4" sx={{color: Colors.light}}>Hurry Up!</Typography>
                     <Typography m={0} variant="body1" sx={{color: Colors.light}}>Free Shipping and Warranty</Typography>
                     <Typography m={0} variant="h3">10% off</Typography>
                     <Typography m={0} variant="body1" sx={{color: Colors.light}}>(Max Discount $100)</Typography>
                     <Button variant='conatined' sx={{backgroundColor: Colors.dark, color: Colors.light, marginTop: 1}}>Shop Now</Button>
                  </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={9} >
                <Typography my={2} variant="h5">Our Products</Typography>
                <Grid mt={2} ml={0} container spacing={0}>
                    
                      {productsArray.map((item) => (
                        <Grid key={item} mt={2} item xs={6} lg={3}>
                        <Paper sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', paddingY: 2}}>
                            <Typography mb={3} variant="body1" sx={{color: Colors.blue}}>{item.name}</Typography>
                            <Image alt='img' src={item.img} width={160} height={130}/>
                            <Link href={`/details/${item.name.split(' ').join('')}`}>
                              <Button sx={{color: Colors.darkGrey, marginTop: 3}}>Shop Now</Button>
                            </Link>
                        </Paper>
                      </Grid>
                      ))}
                </Grid>
            </Grid>
        </Grid>
    </Box>
  </>
}

export default Products