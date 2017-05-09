var Timer = React.createClass({
  getInitialState() {
    return ({timerID: null, elapsed: 0})
  },
  startTime() {
    var that = this
    var intervalID = setInterval(function(){that.setState({elapsed: that.state.elapsed + 1})}, 1000)
    this.setState({timerID: intervalID, elapsed: this.state.elapsed})
  },
  stopTime() {
    var that = this
    clearInterval(that.state.timerID)
  },
  resetTime() {
    if(this.state.timerID) {
      this.stopTime()
    }
    this.setState({timerID: null, elapsed: 0})
  },
  render() {
    return (
      <div>
        {this.state.elapsed}:00 <br></br>
        <button onClick={this.startTime}>Start</button>
        <button onClick={this.stopTime}>Stop</button>
        <button onClick={this.resetTime}>Reset</button>
      </div>
    )
  }
})

ReactDOM.render(<Timer/>, document.getElementById('root'))
