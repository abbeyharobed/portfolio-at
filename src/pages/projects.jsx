//import { Container } from "react-bootstrap";
import LeftCard from "../components/leftcard";
import RightCard from "../components/rightcard";

function  Projects() {
    return (
     < >
        <hr/>
        <h1 className="align">Projects</h1>
        <h5 className="align">Here's some of the stuff I've worked on in the past. they showcase an array of skills in HTML, CSS, FIGMA, Canva, JavaScript, C# and C++.</h5>
        <hr/>
        <LeftCard></LeftCard>
        <hr/>
        <RightCard></RightCard>
        <hr/>
        <LeftCard></LeftCard>
        <hr/>
        <RightCard></RightCard>
     </>
    );
  }
  
  export default Projects;