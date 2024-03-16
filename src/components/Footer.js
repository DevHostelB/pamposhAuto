import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import {Colors} from "@/styles/constants";

const Footer = () => {
  return <>
    <Box sx={{backgroundColor: '#073856'}}>
      <Grid pt={3} pb={10} mx={{xs: 3, lg: 13}} container>
        <Grid  mt={3}item xs={12} lg={3} pr={20}>
          <Typography my={2} variant="h6" component="h1" sx={{color: Colors.light}}>Quick Links</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Home</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Find a Part</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Search by Make/Model</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Contact Us</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Shop Online</Typography>
        </Grid>
        <Grid mt={3} item xs={12} lg={3} pr={20}>
          <Typography my={2} variant="h6" component="h1" sx={{color: Colors.light}}>What We Sell</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Used Engines</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Used Transmissions</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Used Parts</Typography>
        </Grid>
        <Grid mt={3} item xs={12} lg={3} pr={20}>
          <Typography my={2} variant="h6" component="h1" sx={{color: Colors.light}}>Resources</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Policies</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Track my Order</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Make a payment</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Testimonials</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Blogs</Typography>
        </Grid>
        <Grid mt={3} item xs={12} lg={3} pr={20}>
          <Typography my={2} variant="h6" component="h1" sx={{color: Colors.light}}>Contact Us</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Toll Free: 18442800609</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Email: autopartssafe@gmail.com</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Website: safeautopart.online</Typography>
          <Typography variant="body1" component="h1" sx={{color: Colors.light}}>Location: 2368 Rice Boulevard a #615 Houston tx 77005</Typography>
        </Grid>
      </Grid>
    </Box>
  </>
}

export default Footer