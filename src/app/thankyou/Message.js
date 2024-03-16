import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {Colors} from '../../styles/constants';

const Message = () => {
  return <>
    <Box mx={{xs: 0, lg: 14}} px={10} sx={{backgroundColor: Colors.lightGrey, display: 'flex', justifyContent: 'center'}}>
      <Box py={11} sx={{width: '500px'}}>
        <Typography sx={{fontWeight: 'bold'}} variant="h5" align="center">Part Find Submission Successful!</Typography>
        <Typography my={3} variant="body1" align="center">We have received your request successfully and we will get back to you as soon as possible but in the mean time if you have any questions or require additional information please dont hesitate to contact us directly.</Typography>
        <Typography my={2} variant="body1" align="center">Please check your email or confirmation</Typography>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Link href="/">
          <Button variant='contained' sx={{backgroundColor: Colors.yellow, color: Colors.dark, padding: '10px 25px'}}>Visit Home Page</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  </>
}

export default Message