import React, { useState } from 'react';
import { Typing } from 'typing-effect-reactjs';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';

function Myinfo({ name }) {

    const [imghover, setImghover] = useState(false);

    const linkList = [
        'https://open.kakao.com/o/sqnGF5Dd',
        'https://blog.naver.com/kimgtea',
        'https://www.instagram.com/bliss_xxee/?hl=ko',
        'https://github.com/kimgtae12'
    ];

    return (
        <section id="myinfo-area" className="area">
            <Fade left>
                <div className="logo">
                    <h1>{name.menuname}</h1>
                </div>
            </Fade>
            <div className="contents-wrapper">
                <div className="myinfo-wrapper">
                    <Jump>
                        <img src={"img/myinfo/profile.png"} alt={"profile"} />
                    </Jump>
                    <div className="myinfo-info">
                        <Typing
                            class="myinfo-title"
                            text="어떡하면 누구에게라도 편안한 환경을 제공할 수 있을까?"
                            typeSpeed={200}
                            deleteSpeed={200}
                            disableBlinkingOnEnd={false}
                            blinkingSpeed={200}
                            cursorThickness={0.05}
                        />
                        <Fade bottom cascade>
                            <div>
                                <p>반갑습니다! 신입 프론트엔드 개발자 <Flash><b>김경태</b></Flash>입니다.</p>
                                <p>
                                    4학년 재학중에 웹 프론트엔드 개발에 관심을 가지게 되었습니다.<br />
                                    독학을 시작함과 동시에 웹기초, 프론트엔드, 백엔드 강의를 함께 들으며
                                    프로젝트를 하나씩 완성해갔습니다.
                                </p>
                                <p>
                                    지인들에게 개발과정을 보여주며 사용자 관점에서 생각하고 개발하며<br />
                                    개발에 성공했을 때의 기분에 중독되고 말았습니다.
                                </p>
                                <p>
                                    이 매력적인 즐거움을 함께하며 저의 무한한 잠재력을 함께할 <br />
                                    IT 기업을  찾고 있습니다.
                                </p>
                            </div>
                        </Fade>
                        <h3>More Info?</h3>
                        <Fade top cascade>
                            <div className="moreinfo-area">
                                <a href={"#!"} onClick={() => window.open(linkList[0], '_blank')}><img src="img/myinfo/kakaoblack.png" /></a>
                                <a href={"#!"} onClick={() => window.open(linkList[1], '_blank')}><img src="img/myinfo/bloglogo_black.png" /></a>
                                <a href={"#!"} onClick={() => window.open(linkList[2], '_blank')}><img src="img/myinfo/instargram_black.png" /></a>
                                <a href={"#!"} onClick={() => window.open(linkList[3], '_blank')}><img src="img/myinfo/github.png" /></a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Myinfo;