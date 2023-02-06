import Message from  "../components/message";
import {auth, db} from '../utils/firebase';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
export default function Details() {
	const router = useRouter();
	const routeData = router.query;
	const [message,setMessage] = useState('');
	const [allMessage,setAllMessages] = useState([]);
	return(
		<div>
			<Message {...routeData}>

			</Message> 
		</div>
	);
}