import React, { RefObject, createRef } from "react";
import videojs from "video.js";
import "videojs-youtube/dist/Youtube.min.js";
import "video.js/dist/video-js.css";

import Player from "video.js/dist/types/player";

export const VideoJS = (props: { options: any; onReady: any }) => {
  const videoRef = React.useRef(null);
  // #OLD
  // const playerRef = React.useRef(null);

  // #NEW
  const playerRef: RefObject<Player | null> = createRef();
  const { options, onReady } = props;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      
      // @OLD
      // videoRef.current?.appendChild(videoElement);

      // #NEW
      if (videoRef.current !== null) {
        (videoRef.current as HTMLDivElement).appendChild(videoElement);
      }

      // #OLD
      // const player = (playerRef.current = videojs(videoElement, options, () => {
      //   videojs.log("player is ready");
      //   onReady && onReady(player);
      // }));

      // #NEW
      const player = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      });

      return () => {
        player.dispose();
      };
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    // #OLD
    // return () => {
    //   if (player && !player.isDisposed()) {
    //     player.dispose();
    //     playerRef.current = null;
    //   }
    // };

    // #New
    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        (playerRef.current as any) = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;
