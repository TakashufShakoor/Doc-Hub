import React, { useEffect, useRef } from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const VideoRoom = () => {

    const {appointmentId} = useParams();
    const videoContainerRef = useRef(null);

    const myMeeting = ()=>{
        
      const appID = 81630781 ;
      const serverSecret = "3153e643ad8e3c9a5eecf23481a0535e";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        appointmentId,
        Date.now().toString(),
        " "
      )
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // start the call
      zp.joinRoom({

        container: videoContainerRef.current,
        sharedLinks: [
          {
            name: 'Video link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });

    };

    useEffect(()=>{
        myMeeting()
    },[])





  return (
     <div
      ref={videoContainerRef}
      style={{
        width: '100%',
        height: '100dvh', // dynamic viewport height, works best on mobile
        padding: 'env(safe-area-inset-top, 0) env(safe-area-inset-right, 0) env(safe-area-inset-bottom, 0) env(safe-area-inset-left, 0)',
        margin: 0,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}

    ></div>
  )
}

export default VideoRoom;
