import ProjectsModal from "./ProjectsModal";
import {useState} from "react"
import Campus from "../styling/Campus.jpeg"
import seed from "../styling/seed.jpeg"
import pho from "../styling/pho.png"

function Project() {
    const [modalOpen,setModalOpen] = useState(false)
    const [modalData,setModalData] = useState([])

    function renderProjects(array){
        return (
            array.map( project => 

               <div className="portfolioWork " onClick={()=> {setModalOpen(true);setModalData(project)}}>
                    <img id="portfolioImage" src={project.image} alt={project.imgAlt}/>
                    <div className="portfolioCard">
                       <h1 style={{marginTop: "auto",marginBottom: "auto",fontSize: "inherit"}}>{project.name}</h1>
                    <p className="portfolioPara">{project.preview}</p> 
                    </div>
                    {/* <a href="https://www.loom.com/share/39033ef1ad1f44448045ad5a961385e8">Demo</a> */}
                </div>
            )
        )
    }

    return ( 
        <div className="overall-container ">
             <h1 style={{padding: "4px 0px 2%", margin: "auto"}}>My Works</h1>
            <div className="wrap">
              {renderProjects(Projects)}  
            </div>
            <ProjectsModal show={modalOpen} handleClose={()=> setModalOpen(false)} project={modalData}/>
        </div>
    );
}

export default Project;
const Projects = [
    {name: "Campus Finder",
    image: Campus,
    imgAlt: "Enlarged warped photo of a college campus",
    preview: "A rails application which connects students with all available personal services around their campus...",
    description: "A rails application which connects students with all available personal services around their campus. (Barbers, Artist, Nail Techs, Tutors, etc).This application has a resful API along with user functionality and active storage (aws) components.",
    demoLink: "https://www.loom.com/share/39033ef1ad1f44448045ad5a961385e8",
    webLink:"https://my-campus-finds.herokuapp.com/"},

    {name: "Seed Watch",
    image: seed,
    imgAlt: "Small house plant sitting in a white pot on a table",
    preview: "A rails application which provides plants owners with a way to track their plants through visuals and updates...",
    description: "A rails application which provides plants owners with a way to track their plants through visuals and updates. This application has a set database of house plants, however users can utilize full CRUD functions through plant creation/manipulation in their own personal nursery.",
    demoLink: "https://www.loom.com/share/e98f29c3bf974a3395827e34b262d1a5",
    webLink:"https://nursery-app.herokuapp.com/"},

    {name: "Main Street Pho",
    image: pho,
    imgAlt: "Bowl of Pho",
    preview: "An Ordering application for my favorite local restaurant. Used to practice react. This was one of my first works...",
    description: "An Ordering application for my favorite local restaurant. Used to practice react. This was one of my first works, I love to include it to show my progress thus far. This is solely a react app so the data is from a db.json file and rendered dynamically throughout the app.",
    demoLink: "https://www.loom.com/share/96934f89a7fc4062b1293f1aa1cae499",
    webLink:"https://main-street-pho.herokuapp.com/"}
    ]