import React from 'react'

const VideoCallPage = () => {
    const leaveChannel = async () => {
        // Destroy the local audio and video tracks.
        await rtc.current.localAudioTrack.close();
        await rtc.current.localVideoTrack.close();
        await rtc.current.client.leave();
        setUsers([])
        setStart(false)
      }
      
      const mute = (type, id) => {
        if (type === 'audio') {
          setUsers(prevUsers => {
            return (prevUsers.map((user) => {
              if (user.uid === id) {
                user.client && rtc.current.localAudioTrack.setEnabled(!user.audio)
                return { ...user, audio: !user.audio }
              }
              return user
            }))
          })
        }
        else if (type === 'video') {
          setUsers(prevUsers => {
            return prevUsers.map((user) => {
              if (user.uid === id) {
                user.client && rtc.current.localVideoTrack.setEnabled(!user.video)
                return { ...user, video: !user.video }
              }
              return user
            })
          })
        }
      }
    const users = useUsers()[0]
    const playVideo = () => {
        user.videoTrack.play(vidDiv.current)
      }
      const stopVideo = () => {
        user.videoTrack.stop()
      }
      useEffect(() => {
        playVideo()
        return () => {
          stopVideo()
        }
      }, [])
    let init = async (name) => {
        rtc.current.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        initClientEvents()
        const uid = await rtc.current.client.join(options.appId, name, options.token, null);
        // Create an audio track from the audio sampled by a microphone.
        rtc.current.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        // Create a video track from the video captured by a camera.
        rtc.current.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
        //Adding a User to the Users State
        setUsers((prevUsers) => {
          return [...prevUsers, { uid: uid, audio: true, video: true, client: true, videoTrack: rtc.current.localVideoTrack }]
        })
        //Publishing your Streams
        await rtc.current.client.publish([rtc.current.localAudioTrack, rtc.current.localVideoTrack]);
        setStart(true)
      }
      const initClientEvents = () => {
        rtc.current.client.on("user-published", async (user, mediaType) => {
          // New User Enters
          await rtc.current.client.subscribe(user, mediaType);
          if (mediaType === "video") {
            const remoteVideoTrack = user.videoTrack;
            setUsers((prevUsers) => {
              return [...prevUsers, { uid: user.uid, audio: user.hasAudio, video: user.hasVideo, client: false, videoTrack: remoteVideoTrack }]
            })
          }
    
          if (mediaType === "audio") {
            const remoteAudioTrack = user.audioTrack;
            remoteAudioTrack.play();
            setUsers((prevUsers) => {
              return (prevUsers.map((User) => {
                if (User.uid === user.uid) {
                  return { ...User, audio: user.hasAudio }
                }
                return User
              }))
            })
          }
        });
    
        rtc.current.client.on("user-unpublished", (user, type) => {
          //User Leaves
          if (type === 'audio') {
            setUsers(prevUsers => {
              return (prevUsers.map((User) => {
                if (User.uid === user.uid) {
                  return { ...User, audio: !User.audio }
                }
                return User
              }))
            })
          }
          if (type === 'video') {
            setUsers((prevUsers) => {
              return prevUsers.filter(User => User.uid !== user.uid)
            })
          }
        });
      }
  return (
      
    <div>
<div id='videos'>
     {users.length && users.map((user) => <Video key={user.uid} user={user} />)}
   </div>
    </div>
  )
}

export default VideoCallPage