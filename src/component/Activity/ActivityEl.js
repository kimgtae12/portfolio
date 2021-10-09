import React from 'react';
import Jump from 'react-reveal/Jump';
import FadeIn from 'react-fade-in';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination])

function ActivityEl({ el }) {
    const activityel = el.map(list => {
        return (
            <div className="activity-wrapper" key={list.title}>
                <div className="activity-img-area">
                    <img src={list.imgsrc} alt={list.alt} />
                    <img src={list.imgsrc2} alt={list.alt2} />
                </div>
                <div className="activity-info-area">
                    <div className="info-form">
                        <FadeIn>
                            <h2>{list.title}</h2>
                            <hr />
                            <text>
                                {list.text}
                            </text>
                        </FadeIn>
                    </div>
                </div>
            </div>
        )
    });


    return (
        <>
            {activityel}
        </>
    )
}

export default ActivityEl