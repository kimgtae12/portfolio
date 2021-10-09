import React from 'react';
import ProjectDetail from './ProjectDetail';
import PjAnyask from './ProjectAnyask';

function LeftStyleProject(props) {
    const detailList = props.detail.map(list => {
        return (
            <section id="project-area" className="area">
                <div className="logo">
                    <Fade left>
                        <h1>{props.name.menuname}</h1>
                        <h2>아오이 마켓</h2>
                    </Fade>
                </div>
                <div className="contents-wrapper">
                    <Swiper
                        className="aoimarket"
                        spaceBetween={50}
                        slidePrevView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <PjAnyask info={props.info.aoimarket} />
                        </SwiperSlide>
                        {aoimarketDetail}
                    </Swiper>
                </div>
            </section >
        )
    });
    return (
        detailList
    )
}

export default LeftStyleProject;