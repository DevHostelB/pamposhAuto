import Box from '@mui/material/Box';
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
// import LandingPage from "./LandingPage";
import Products from "./Products";
import Featured from './Featured';
import Testimonials from './Testimonials';
import Goals from './Goals';
import Logos from './Logos';
import Footer from "../components/Footer";

 const LandingPage = dynamic(() => import("./LandingPage"), {
  ssr: false,
});

export default function page() {

  return <>
  <Box sx={{overflowX: 'hidden'}}>
    <Navbar />
    <Box mx={{xs: 0, lg: 13}}>
      <LandingPage />
      <Products />
      <Featured />
      <Testimonials />
      <Goals />
      <Logos/>
    </Box>
    <Footer />
  </Box>
  </>
}