function About({image}) {
    return (
        <div className="overall-container wrap inital">
            <div className="box">
            {/* <div className="photo"> */}
            {/* <img src={image} alt="my face" /> */}
            <h1 id="about-me">About <br/> Me</h1>
            </div>
            <div id="about-text">
            <h3 className='aboutTitle'>Introductions</h3>
            <p>My name is Robin Vernon and I am a full-stack  Developer, from Philadelphia, PA.
            I earned a certificate in Software Development from the Flatiron School in January, 2022.
             I am currently searching for
                 a community to help further assist me in becoming the developer i strive to be.
                  In my free time, I do puzzles, art, read and work of side projects.
                  I am a fast learner, who loves to try new things. I particularly enjoy web Development because of 
                  how closely coding resembles a puzzle. Fun Fact, my fastest Rubiks cube time is 2 minutes and 16 seconds</p>
            <h3 className='aboutTitle'>Languages List</h3>
            <p>While at The Flatiron School, I learned many useful things that i practice and build on everyday. 
                Throughout my journey so far, I have worked on both group projects, and solo projects.
                I commonly work on applications that involve both front and back-end development. This allows mt to utilize
                 HTML/HTML5, CSS/CSS3, JavaScript, React, Ruby, RubyOnRails,jQuery, Redux
                  and SQL/MySQL/PostgreSQL, to name a few.  </p>
            </div>
        </div>
    );
}

export default About;