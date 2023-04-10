import React from "react";
import YouTube from "react-youtube";
  
export default class YoutubeVideo 
extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
        muted:1,
        loop:1,
       },
    };
  
    return (
      <div>
        <h3>GeeksforGeeks - Youtube</h3>
        <YouTube videoId="ijRG5SveCfA" 
            opts={opts} onReady={this._onReady} />
      </div>
    );
  }
  
  _onReady(event) {
    event.target.playVideo();
  }
}


{/* <iframe src="https://drive.google.com/file/d/1vVj11ZYCDs2s3RgBdMaMVKEGuoHJ5Rck/preview" width="640" height="480" allow="autoplay"></iframe> */}


// import React from 'react'
// import LiteYouTubeEmbed from 'react-lite-youtube-embed';
// import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

// export default function YouTubeVideo() {
//   return (
//     <div>
//     <LiteYouTubeEmbed    
//     aspectHeight = {9}    
//     aspectWidth = {16}    
//     id="ijRG5SveCfA" 
//     title=""
//     muted
//     adNetwork={true}
//     noCookie={true}
//     />

    
//     </div>
//   )
// }

// import React from "react";
// import PropTypes from "prop-types";

// const YoutubeEmbed = ({ embedId }) => (
//   <div className="video-responsive">
//     <iframe
//       width="853"
//       height="480"
//       src={`https://www.youtube.com/embed/${embedId}`}
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted; loop"
//       allowFullScreen
//       title="Embedded youtube"
//     />
//   </div>
// );

// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

// export default YoutubeEmbed;

