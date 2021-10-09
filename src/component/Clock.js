
import React, { Component } from 'react';

function Time(date) {
  return <h2>{date.timer}</h2>
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { //state 지정
      date: new Date()
    };
  }

  componentDidMount() {
    this.time = setInterval(
      () => this.tick(),
      1000
    );
  } //1초마다 tick()함수를 호출한다.

  componentWillUnmount() {
    clearInterval(this.time);
  }

  tick() { //state를 지정해준다.
    this.setState(
      { date: new Date() }
    )
  }

  render() {
    return (
      <div>
        <h2> 현재시간은? </h2>
        <Time timer={this.state.date.toLocaleTimeString()} />
      </div>
    );
  }
}

export { Clock };

