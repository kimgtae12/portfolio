import React from 'react';

function DevelDetail(props) {
    return (
        <div className="dv-detail">
            <h3>{props.detail.title}</h3>
            <img src={props.detail.imgsrc} alt={props.detail.alt} />
            <div className="info-area">
                <p>{props.detail.infofir}</p>
                <p>{props.detail.infosec}</p>
            </div>
        </div>
    )
}

export default DevelDetail;