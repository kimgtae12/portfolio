// eslint-disable-next-line
import Menubar from './component/Menubar';
import Intro from './component/Intro';
import Exprience from './component/Experience';
import Project from './component/Project';
import Activity from './component/Activity';
import Myinfo from './component/Myinfo';

import './App.css';
import React from 'react';

import { Clock } from './component/Clock';

function App() {

  const menuArray = [
    { menuname: 'INTRO', link: '#intro-area' },
    { menuname: 'EXPERIENCE', link: '#exprience-area' },
    { menuname: 'PROJECT', link: '#project-area' },
    { menuname: 'ACTIVITY', link: '#activity-area' },
    { menuname: 'MY INFO', link: '#myinfo-area' }
  ];

  return (
    <div>
      <React.Fragment>
        <article id="wrapper">
          <Menubar menu={menuArray} />
          <section id="contents-area">
            <Intro />
            <Exprience name={menuArray[1]} />
            <Project name={menuArray[2]} />
            <Activity name={menuArray[3]} />
            <Myinfo name={menuArray[4]} />
          </section>

        </article>

      </React.Fragment>
      <Clock />
    </div>
  );
}

export default App;
