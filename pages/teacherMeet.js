import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsCheckCircle } from 'react-icons/bs';

// import Jitsi from 'react-jitsi';

// AUDIO DOESN'T WORK IN NEXTJS FOR SOME REASON

// import dynamic from 'next/dynamic';

// const DynamicComponentWithNoSSR = dynamic(() => import('@jitsi/react-sdk'), {
// 	ssr: false,
// });

const contextClass = {
	success: 'bg-blue-600',
	error: 'bg-red-600',
	info: 'bg-gray-600',
	warning: 'bg-orange-400',
	default: 'bg-indigo-600',
	dark: 'bg-white-600 font-gray-300',
};

const teacherMeet = () => {
	const [audio, setAudio] = useState(null);
	useEffect(() => {
		setAudio(new Audio('/assets/notif-sound.mp3'));
	}, []);
	const notify = () => toast.info('Hello SIH 2022');

	const CloseButton = ({ closeToast }) => (
		<i className='material-icons' onClick={closeToast}>
			<BsCheckCircle />
		</i>
	);

	const audioPlay = () => {
		audio.play();
	};

	// const roomName = 'teachers_internal_meeting_32746';
	// const userName = 'My Name';

	return (
		<div className='flex items-center flex-col justify-center'>
			<ToastContainer
				closeButton={CloseButton}
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={true}
				toastClassName={({ type }) =>
					contextClass[type || 'default'] +
					' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
				}
				bodyClassName={() => 'text-sm font-white font-med block p-3'}
			/>
			{/* <DynamicComponentWithNoSSR
				roomName='sohamparatesjitsimeet'
				configOverwrite={{
					startWithAudioMuted: true,
					disableModeratorIndicator: true,
					startScreenSharing: true,
					enableEmailInStats: false,
				}}
				interfaceConfigOverwrite={{
					DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
				}}
				userInfo={{
					displayName: 'Soham Parate',
				}}
				onApiReady={(externalApi) => {
					// here you can attach custom event listeners to the Jitsi Meet External API
					// you can also store it locally to execute commands
				}}
				getIFrameRef={(iframeRef) => {
					iframeRef.style.height = '600px';
					iframeRef.style.width = '800px';
				}}
			/> */}
			{/* <Jitsi roomName={roomName} displayName={userName} /> */}

			<button
				className='bg-blue-600 text-white px-4 border rounded-lg'
				onClick={() => {
					audioPlay();
					notify();
				}}>
				Notify !!
			</button>
		</div>
	);
};

export default teacherMeet;
