import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import {Colors} from '../styles/constants';
import {goalsArray} from '../util/Datas/goalsData';

const Goals = () => {
  return <>
    <Box py={10} mb={5} px={{xs: 2, lg:10}} sx={{backgroundColor: Colors.grey}}>
      <Typography variant="h4" component="h1" sx={{textAlign: 'center'}}>Why Choose Us ?</Typography>
      <Box>
        <Typography my={3} mx={{xs: 1, lg: 40}} variant="body1" sx={{textAlign: 'center', color: 'grey'}}>Our goal is to make the buying process as seamless and worry free as possible for our customers and to provide after sales service in a professional manner. We want to treat you like we would want to be treated.</Typography>
      </Box>
      <Grid container>
        {goalsArray.map((item) => (
          <Grid key={item} mt={5} item xs={6} lg={4}>
          <Box mx={{xs: 1.5, lg:10}} sx={{display: 'flex', flexDirection: 'column' ,alignItems: 'center'}}>
             {item.icon}
             <Typography my={2} variant="h6" sx={{textAlign: 'center'}}>{item.title}</Typography>
             <Typography variant="body1" sx={{textAlign: 'center'}}>{item.description}</Typography>
          </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
}

export default Goals