import bootstrap from "../styling/bootstap.png"
import react from "../styling/react.png"
import html from "../styling/html.png"
import css from "../styling/css.png"
import javascript from "../styling/javascript.png"
import ruby from "../styling/ruby.png"
import rails from "../styling/rails.png"
import github from "../styling/github.png"
import heroku from "../styling/heroku.png"
import postgres from "../styling/postgres.png"
import git from "../styling/git.png"
import redux from "../styling/redux.png"

function Skills() {
    function renderImage(array){
        return(
            array.map(skill =>
                <div id="skills">
                   <img id="skill-image" src={skill.link} alt={skill.name}/>
                   <h4>{skill.name}</h4>
                </div>
                )
        )
    }
    return ( 
        <div className="overall-container">
            <h1 style={{padding: "4px 0px 2%", margin: "auto"}}>I have experience with these technologies:</h1>
            <div id="skill-container">
               {renderImage(SkillList)} 
            </div>
            
        </div>
    );
}

export default Skills;
const SkillList = [
   { link: react,
   name: "React"},
   {link: html,
    name: "Html"},
    {link: css,
    name: "Css"},
    {link: bootstrap,
    name: "Bootstrap"},
    {link: javascript,
    name: "JavaScript"},
    {link: ruby,
    name: "Ruby"},
    {link: rails,
    name: "Rails"},
    {link: github,
    name: "Github"},
    // {link: "https://www.netgains.org/wp-content/uploads/2014/01/node_js.png",
    // name: "Node.js"},
    {link: heroku,
    name: "Heroku"},
    {link: postgres,
    name: "Postgres"},
    {link: git,
    name: "Git"},
    {link: redux,
    name: "Redux"}
    // ,
    // {name: "Active Record",
    // link: ActiveRecord}
]