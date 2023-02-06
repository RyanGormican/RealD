import Message from  "../components/message";
import {auth, db} from '../utils/firebase';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import {arrayUnion, doc, Timestamp, updateDoc} from "firebase/firestore";
export default function Details() {
	const router = useRouter();
	const routeData = router.query;
	const [message,setMessage] = useState("");
	const [allMessage,setAllMessages] = useState([]);
// submit Message
const submitMessage = async() => {
	if(!auth.currentUser) return router.push('/auth/login');
	if(!message){
		toast.error("Message field is empty!" , {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1500,
	});
		return;
	}
	const docRef= doc(db,"posts",routeData.id);
	await updateDoc(docRef, {
		comments: arrayUnion({
			message,
			avatar: auth.currentUser.photoURL,
			userName: auth.currentUser.displayName,
			time: Timestamp.now(),
		}),
		});

		setMessage("");
};
	return(
		<div>
			<Message {...routeData}>
				<div className="my-4">
					<div className="flex"> 
						<input onChange= {(e) => setMessage(e.target.value)} type="text" value={message} placeholder="Send a message " className="bg-gray-800 w-full p-2 text-white text-sm"/>
						<button  onClick={submitMessage}className="bg-cyan-500 text-white py-2 px-4 text-sm"> Submit </button>
					</div>
					<div className="py-6">
						<h2 className="font-bold"> Comments</h2>
						{setAllMessages?.map((message) => (
						<div>
							<div>
								<img src="".alt=""./>
							</div>
						</div> 
						))}
					</div>
				</div> 
			</Message> 
		</div>
	);
}