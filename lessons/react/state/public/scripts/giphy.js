var App = React.createClass({
  getInitialState() {
    return ({present: false, src: null})
  },
  fetchGIF() {
    var search = $('#find').val()
    var that = this
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC",
      success: function(data) {
        var giphyURL = data.data[0].images.original.url
        that.setState({present: true, src: giphyURL})
      }
    })
  },
  render() {
    if (this.state.present) {
      return (
        <div>
          <input id="find" type="text" placeholder="giphy"></input>
          <button onClick={this.fetchGIF}>Get Giphy</button>
        <img src={this.state.src}></img>
        </div>
      )
    } else {
      return (
        <div>
          <input id="find" type="text" placeholder="giphy"></input>
          <button onClick={this.fetchGIF}>Get Giphy</button>
        </div>
      )
  }
  }
})

ReactDOM.render(<App />, document.getElementById('root'))
