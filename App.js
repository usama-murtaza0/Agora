import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
const App = () => {
const [videoCall, setVideoCall] = useState(true);
const rtcProps = {appId: 'b7b10a4b516e4985aa8c495acca94efb', channel: 'test'};
const callbacks = {EndCall: () => setVideoCall(false)};
return videoCall ? <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} /> : null;
};
export default App;