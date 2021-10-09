import React from 'react';
import Fade from 'react-reveal/Fade';
import FadeIn from 'react-fade-in';
import DevelDetail from './ProjectEl/DevelDetail';

function ProjectDetail(props) {

    const imgtag = props.evlist.map(list => {
        return (
            <>
                <img src={list.imgsrc} alt={list.alt} key={list.alt} />
            </>
        )
    });
    return (
        <div className="project-wrapper">
            <div className="project-detail">
                <div className="dv-el">
                    <h2>Development Environment</h2>
                    <hr />
                    <div className="el-list">
                        <FadeIn>
                            {imgtag}
                        </FadeIn>
                    </div>
                </div>
                <DevelDetail detail={props.detail} />
            </div>
        </div>
    )

}

export default ProjectDetail;