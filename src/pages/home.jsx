//import LeftCard from "../components/leftcard";
//import RightCard from "../components/rightcard";
//import Carousell from '../components/carousel';
import Banner from "../components/banner";
import Newsletter from "../components/newsletter";
import Skills from "../components/skills";

function  Home() {
    return (
     < >
       <span style ={{backgroundColor : "#d2bd96"}}>
        <Banner></Banner>
        
        <Skills></Skills>
        <Newsletter></Newsletter>
       </span>
       
     </>
    );
  }
  
  export default Home;