import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const VideoRoom = () => {
  const { roomID } = useParams();
  const meetingContainer = useRef(null);

  useEffect(() => {
    const initMeeting = async () => {
      if (meetingContainer.current) {
        const appID = 166029999;
        const serverSecret = "9fe08a66a662034655e04c2fa64bd167";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          Date.now().toString(),
          "ayush"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: meetingContainer.current,
          sharedLinks: [
            {
              name: "Copy Link",
              url: `http://localhost:5173/room/${roomID}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall, // Change to OneONoneCall for 1-on-1 calls
          },
        });
      }
    };

    initMeeting();
  }, [roomID]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 p-6">
      <div className="bg-white/10 backdrop-blur-lg border border-green-500/30 shadow-2xl rounded-3xl p-6 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-green-400 text-center mb-4 drop-shadow-lg">
          Welcome to Room <span className="text-green-300">#{roomID}</span>
        </h2>
        <div
          ref={meetingContainer}
          className="w-full h-[500px] rounded-lg overflow-hidden bg-black border border-green-600 shadow-lg"
        ></div>
      </div>
    </div>
  );
};

export default VideoRoom;
