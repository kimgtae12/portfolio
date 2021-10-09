import React from 'react';
import ActivityEl from './Activity/ActivityEl';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

function Activity({ name }) {

    const imglist = {
        student: [
            {
                title: "학생회 총대",
                imgsrc: "img/activity/student/picture1.jpg",
                alt: "stu1",
                imgsrc2: "img/activity/student/picture2.jpg",
                alt2: "stu2",
                text: `저는 사람들과 만나는 것을 즐기는 성격입니다.\n그래서 대학교 입학 직후 학생회에 들어갔습니다.\n학생회에서 총대역활을 하면서 대학에 적응하지 못한\n1학년 학생들을 적응할 수 있게 도와주고\n많은 대,내외 활동을 해왔습니다.\n\n총대를 함으로써 친화력과 리더쉽을 키우며 더욱 더\n발전한 저를 만들 수 있었습니다.`
            }
        ],
        festival: [
            {
                title: "축제 자원봉사단",
                imgsrc: "img/activity/vol/festival1.jpg",
                alt: "festival1",
                imgsrc2: "img/activity/vol/festival2.jpg",
                alt: "festival2",
                text: `대학교에서 축제를 진행 할 때, 저는 축제를 즐기기\n보다 축제가 잘 이끌어질 수 있도록 이끄는 봉사단에\n참여하였었습니다.\n\n축제자원봉사단을 하며 더 많은 사람들을 만날 수\n있음에 기뻤고, 축제가 잘 마무리되며 많은 보람도\n느낄 수 있었습니다.`
            }
        ], rural: [
            {
                title: "농촌 포도밭 지원 봉사",
                imgsrc: "img/activity/vol/Rural1.jpg",
                alt: "Rural1",
                imgsrc2: "img/activity/vol/Rural2.jpg",
                alt: "Rural2",
                text: `저희 공과대에서 진행했던 농촌 포도밭농사 지원에\n참여 하였었습니다.\n\n포도밭의 비닐을 깔거나 포도에 신문지를 감싸는\n작업을 하였었는데, 한여름이라 포기하고 싶을 때가\n많았습니다.\n\n하지만 2박3일간 농사지원을 무사히 진행하였고\n농사 종사자분들의 노고를 피부로 느낄 수 있었습니다.`
            }
        ]
    }
    return (
        <section id="activity-area" className="area">
            <div className="logo">
                <h1>{name.menuname}</h1>
            </div>
            <div className="contents-wrapper">
                <Swiper
                    className="activity"
                    spaceBetween={50}
                    slidePrevView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    <SwiperSlide>
                        <ActivityEl el={imglist.student} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ActivityEl el={imglist.festival} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ActivityEl el={imglist.rural} />
                    </SwiperSlide>
                </Swiper>
            </div>

        </section >
    )
}

export default Activity;