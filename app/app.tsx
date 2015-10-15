/// <reference path="../typings/react/react.d.ts" />

import React = require('react');
import {observable} from 'mobservable';
import {observer} from 'mobservable-react';

class DemoProps {
  public name: string;
}

class Demo extends React.Component<DemoProps, any> {
  constructor(props: DemoProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Hello {this.props.name}!</div>
        <Timer/>
      </div>
    );
  }
}


var timerState = observable({
  secondsPassed: 0
});

setInterval(() => timerState.secondsPassed++, 1000);

@observer
class Timer extends React.Component<{}, {}> {
  render() {
    return (
      <span>Seconds passed: {timerState.secondsPassed}</span>
    )
  }
}

function render() {
  React.render(
    <Demo name="World" />,
    document.getElementById('app')
  );
}

render();
