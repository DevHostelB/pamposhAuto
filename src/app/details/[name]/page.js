import Navbar from "@/components/Navbar"
import Orders from "./Orders" 
import Goals from "@/app/Goals"
import Logos from "@/app/Logos"
import Footer from "@/components/Footer"

const page = ({params}) => {
  // console.log(params);

  return <>
  <div style={{overflowX: 'hidden'}}>
    <Navbar />
    <Orders img={params.name}/>
    <Goals />
    <Logos />
    <Footer />
    </div>
  </>
}

export default page