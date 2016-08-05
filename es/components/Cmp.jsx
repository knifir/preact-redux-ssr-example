import { h, Component } from 'preact';

export default class Clock extends Component {
  constructor() {
    super();
    // set initial time:
    this.state.time = Date.now();
  }
  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      const time = Date.now();
      this.setState({
        time,
      });
    }, 1000);
  }
  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }
  render(props, state) {
    const time = new Date(state.time).toLocaleTimeString();
    return (<p>
      It is <span>{ time }</span> now!
    </p>);
  }
}