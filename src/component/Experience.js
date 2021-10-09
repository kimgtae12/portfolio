import React from 'react';
import Fade from 'react-reveal/Fade';
import FadeIn from 'react-fade-in';


function Exprience({ name }) {
    return (
        <section id="exprience-area" className="area">
            <div className="logo">
                <Fade left>
                    <h1>{name.menuname}</h1>
                </Fade>
            </div>
            <div className="experience-info">
                <h2>FRONT END</h2>
                <div className="experience-el">
                    <Fade bottom cascade>
                        <img src="img/frontend/html5.png" alt="HTML5" />
                        <img src="img/frontend/css.png" alt="CSS3" />
                        <img src="img/frontend/js.png" alt="JavaScript" />
                        <img src="img/frontend/react.png" alt="React" />
                        <img src="img/frontend/jquery.png" alt="Jquery" />
                    </Fade>
                </div>
            </div>
            <div className="experience-info">
                <h2>BACK END</h2>
                <div className="experience-el">
                    <Fade bottom cascade>
                        <img src="img/backend/github.png" alt="github" />
                        <img style={{ width: '170px', height: '50px', marginTop: '20px' }} src="img/backend/nodejs.png" alt="nodejs" />
                        <img src="img/backend/express.png" alt="express" />
                        <img src="img/backend/firebase.png" alt="firbase" />
                        <img src="img/backend/mysql.png" alt="mysql" />
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Exprience;