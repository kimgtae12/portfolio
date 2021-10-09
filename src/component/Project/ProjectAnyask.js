import React from 'react';
import Fade from 'react-reveal/Fade';


function PjAnyask(props) {
    return (
        <div className="project-wrapper">
            <div className="project-info">
                <Fade bottom>
                    <div className="pj-cm-first">
                        <div className="pj-cm">
                            <h3>Development Term</h3>
                            <p>{props.info[0].pjterm}</p>
                        </div>
                        <div className="pj-cm">
                            <h3>Development Staff</h3>
                            <p>{props.info[0].pjstaff}</p>
                            <hr />
                        </div>
                    </div>
                    <div className="pj-cm-seinfoond">
                        <div className="pj-cm">
                            <h3>Hash Tag</h3>
                            <p>{props.info[0].hashtag1}</p>
                            <p>{props.info[0].hashtag2}</p>
                            <p>{props.info[0].hashtag3}</p>
                        </div>
                        <div className="pj-cm">
                            <h3>Git Hub</h3>
                            <a href={"#!"} onClick={() => window.open(props.info[0].gitlink, '_blank')} >{props.info[0].gitlink}</a>
                        </div>
                        <div className="pj-cm">
                            <h3>To Site</h3>
                            <a href={"#!"} onClick={() => window.open(props.info[0].sitelink, '_blank')} >{props.info[0].sitelink}</a>
                        </div>
                    </div>
                    <div className="project-img-area">
                        <img src={props.info[0].imgsrc} alt={props.info[0].alt} />
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default PjAnyask;