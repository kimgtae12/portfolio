import React from 'react';
import Fade from 'react-reveal/Fade';
import PjAnyask from './Project/ProjectAnyask';
import ProjectDetail from './Project/ProjectDetail';
// import LeftStyleProject from './Project/LeftStyleProject';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination])

function Project({ name }) {

    const info = {
        anyask: [
            {
                pjterm: "21.05 ~ 21.07",
                pjstaff: "1인",
                hashtag1: "#익명질문 #순수JS",
                hashtag2: "#FireBase #클라우드스토리지",
                hashtag3: "#프로필 등록",
                gitlink: "https://github.com/kimgtae12/anyask",
                sitelink: "https://anyask.azurewebsites.net",
                imgsrc: "img/project/anyask/anyask-nb-phone.png",
                alt: "anyask"
            }
        ],
        aoimarket: [
            {
                pjterm: "21.07 ~ 21.09",
                pjstaff: "1인",
                hashtag1: "#중고거래 #상품등록록",
                hashtag2: "#이메일인증 #이메일인증증",
                hashtag3: "#Google Cloud Platform",
                gitlink: "https://github.com/kimgtae12/aoimarket",
                sitelink: "https://aoimarket.herokuapp.com",
                imgsrc: "img/project/aoimarket/aoimarket.png",
                alt: "aoimarket"
            }
        ]
    }

    const detail = {
        anyask: [
            {
                title: '프로필 사진 설정 및 수정',
                imgsrc: 'img/project/anyask/anyaskprofile.gif',
                alt: 'changeprofile',
                infofir: '사용자가 원하는 사진으로 프로필 지정이 가능합니다.',
                infosec: '사진은 Firebase Cloud Storage에 저장됩니다.'
            }, {
                title: '질문 & 답변',
                imgsrc: 'img/project/anyask/anyask_answer.gif',
                alt: 'answer',
                infofir: '사용자는 익명으로 질문이 가능하고 질문받은 사람도 답변이 가능합니다.',
                infosec: '질문 정보는 RealTime Firebase에 저장됩니다.'
            }, {
                title: '질문지 공유',
                imgsrc: 'img/project/anyask/anyaskkakao.png',
                alt: 'kakao',
                infofir: '카카오톡 공유 API를 통해 자신의 질문지를 공유 할 수 있습니다.',
                infosec: ''
            }
        ],
        aoimarket: [
            {
                title: '이메일 가입',
                imgsrc: 'img/project/aoimarket/aoimarket-email.png',
                alt: 'emailjoin',
                infofir: 'nodemailler 모듈을 사용하여 이메일 인증을 통한 가입이 가능합니다.',
                infosec: '이메일을 받지 못했을 경우를 대비해 재전송 또한 가능합니다.'
            }, {
                title: '대댓글 작성',
                imgsrc: 'img/project/aoimarket/aoimarket-reply.gif',
                alt: 'reply',
                infofir: '사용자는 댓글을 작성한 뒤 해당 댓글에 대댓글 작성이 가능합니다.',
                infosec: 'DB는 트리구조로 구성하였습니다.'
            }, {
                title: '클라우드 플랫폼',
                imgsrc: 'img/project/aoimarket/aoimarket-cloud.png',
                alt: 'cloud',
                infofir: '구글 클라우드 플랫폼을 이용해 클라우드 DB와 Storage를 사용하였습니다.',
                infosec: ''
            }
        ]
    };

    const anyevlist = [
        { imgsrc: 'img/frontend/html5.png', alt: 'html5' },
        { imgsrc: 'img/frontend/css.png', alt: 'css' },
        { imgsrc: 'img/frontend/js.png', alt: 'js' },
        { imgsrc: 'img/backend/firebase.png', alt: 'firebase' }
    ]
    const aoievlist = [
        { imgsrc: 'img/frontend/html5.png', alt: 'html5' },
        { imgsrc: 'img/frontend/css.png', alt: 'css' },
        { imgsrc: 'img/frontend/js.png', alt: 'js' },
        { imgsrc: 'img/frontend/jquery.png', alt: 'firebase' },
        { imgsrc: 'img/backend/nodejs-little.png', alt: 'node' },
        { imgsrc: 'img/backend/express.png', alt: 'express' },
        { imgsrc: 'img/backend/mysql.png', alt: 'mysql' }
    ]

    const anyaskDetail = detail.anyask.map(list => {
        return (
            <SwiperSlide>
                <ProjectDetail detail={list} evlist={anyevlist} key={list.title} />
            </SwiperSlide>
        )
    });
    const aoimarketDetail = detail.aoimarket.map(list => {
        return (
            <SwiperSlide>
                <ProjectDetail detail={list} evlist={aoievlist} key={list.title} />
            </SwiperSlide>
        )
    });

    return (
        <>
            <section id="project-area" className="area">
                <div className="logo">
                    <Fade left>
                        <h1>{name.menuname}</h1>
                        <h2>AnyAsk</h2>
                    </Fade>
                </div>
                <div className="contents-wrapper">
                    <Swiper
                        className="anyask"
                        spaceBetween={50}
                        slidePrevView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <PjAnyask info={info.anyask} />

                        </SwiperSlide>
                        {anyaskDetail}
                    </Swiper>
                </div>
            </section >
            <section id="project-area" className="area">
                <div className="logo">
                    <Fade left>
                        <h1>{name.menuname}</h1>
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
                            <PjAnyask info={info.aoimarket} />
                        </SwiperSlide>
                        {aoimarketDetail}
                    </Swiper>
                </div>
            </section >

        </>
    )
}

export default Project;