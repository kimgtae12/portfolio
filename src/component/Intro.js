import React from 'react';
import { Typing } from 'typing-effect-reactjs';


function Intro() {
    const intro = ['Hello!', "I'M", 'KIM KYOUNG TAE'];
    return (
        <section id="intro-area" className="area">
            <div>
                <h1 className="intro">
                    <Typing
                        text={intro}
                        typeSpeed={200}
                        deleteSpeed={200}
                        disableBlinkingOnEnd={false}
                        blinkingSpeed={400}
                        cursorThickness={0.05}
                    />

                </h1>
            </div>
        </section>
    )

}

export default Intro;