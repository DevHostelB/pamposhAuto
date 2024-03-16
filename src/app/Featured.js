import Image from 'next/image';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import {Colors} from '../styles/constants';
import {featuredArray, array} from '@/util/Datas/featuredData';
import Tools from '@/../../public/Tools.png';

const Featured = () => {
  return <>
    <Box py={3} sx={{backgroundColor: Colors.grey}}>
      <Box p={{xs: 2.5, lg: 10}}>
      <Typography my={2} variant="h5">Featured Categories</Typography>
      <Grid container>
        {featuredArray.map((item) => (
          <Grid key={item.name} item xs={12} lg={4}>
          <Paper elevation={1} sx={{padding: 2, position: 'relative'}}>
            <Box sx={{display: 'flex'}}>
                <Image alt='img' src={item.img} width={100} height={90}/>
                <Box ml={2} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                  <Typography my={0.5} variant="body1" sx={{color: Colors.blue}}>{item.name}</Typography>
                  <Typography my={0.5} variant="body2" sx={{fontSize: '12px'}}>{item.subTitles[0]}</Typography>
                  <Typography my={0.5} variant="body2" sx={{fontSize: '12px'}}>{item.subTitles[1]}</Typography>
                  <Typography my={0.5} variant="body2" sx={{fontSize: '12px'}}>{item.subTitles[2]}</Typography>
                </Box>
                <Box sx={{position: 'absolute', right: 10, bottom: 10}}>
                  <Link href={`/details/${item.name.split(' ').join('')}`}>
                   <Button sx={{fontSize: '12px'}}>Shop Now</Button>
                  </Link>
                </Box>
            </Box>
          </Paper>
        </Grid>
        ))}
      </Grid>
      </Box>

      <Box p={5} sx={{backgroundColor: Colors.blue, display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', lg: 'row'}}}> 
        <Box>
           <Typography variant='h3' sx={{color: Colors.light, fontSize: {xs: '23px', lg: '50px'}}}>Free Assistance: Contact Us</Typography>
           <Typography variant='h3' sx={{color: Colors.light, fontSize: {xs: '23px', lg: '50px'}}}>18442800609</Typography>
        </Box>
        <Box mt={3} sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
          <Button variant='contained' sx={{backgroundColor: Colors.yellow, color: 'black' , padding: {xs:'10px 30px', lg: '5px 50px'}, marginRight: {xs: 0, lg: 1}, marginTop: '15px'}}><a href='tel:+18442800609' style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center'}}><PhoneIcon sx={{marginRight: 1}}/>Call Us</a></Button>
          <Button variant='contained' sx={{backgroundColor: Colors.light, color: 'black' , padding: {xs:'10px 30px', lg: '5px 50px'}, marginLeft: {xs: 0, lg: 1}, marginTop: '15px'}}><a href='mailto:autopartssafe@gmail.com' style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center'}}><EmailIcon sx={{marginRight: 1}}/>Email Us</a></Button>
        </Box>
      </Box>
      </Box>

      <Box ml={{xs: 1, lg: 10}} p={3}>
        <Grid container>
          {array.map((item, index) => (
            <Grid key={index} item xs={12} lg={4} sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography my={3} variant='h5'>{item.name}</Typography>
              <Stack ml={{xs: 1, lg: 3}}>
                {item.subTitles.map((i, index) => (
                 <Box key={index} mt={2} sx={{display: 'flex'}}>
                  <Image alt='img' src={Tools} width={50} height={50}/>
                  <Box ml={2}>
                   <Typography variant='h6'>{i.name}</Typography>
                    <Link href={`/details/img2`}>
                     <Button>Shop Now</Button>
                    </Link>
                  </Box>
                 </Box>
                ))}
              </Stack>
            </Grid>
          ))}  
        </Grid>        
      </Box>
      <hr style={{margin: '50px 0'}}/>
  </>
}

export default Featured