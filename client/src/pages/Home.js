
function Home({image}) {
    return ( 
        <div className="overall-container wrap">
            <div id="home-intro">
                <h2>Hello,</h2>
                <h1>I'm Robin</h1>
                <h2>FullStack Developer</h2>
            </div>
            <div className="photo">
                <img src={image} alt="my face" />
            </div>
        </div>
    );
}

export default Home;