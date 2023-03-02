import ReactPlayer from 'react-player'
import {Component} from 'react'
import './index.css'

class VideoPlayer extends Component {
  state = {isPlaying: false, control: true}

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying, control} = this.state
    const btnText = isPlaying ? 'Play' : 'Pause'
    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            url="https://www.youtube.com/shorts/7NJ5EqLgpNU"
            playing={isPlaying}
            controls={control}
          />
        </div>
        <button className="button" type="button" onClick={this.onClickPlay}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default VideoPlayer
