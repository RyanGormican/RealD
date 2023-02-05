import { Icon } from '@iconify/react';
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth } from "../../utils/firebase";
export default function Login(){
		//Google 
		const googleProvider = new GoogleAuthProvider();
		const GoogleLogin = async() => {
			try {
				const result = await signInWithPopup(auth, googleProvider);
			} catch (error) {

			}
		}
	return(
		<div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
			<h2 classname="text-2xl font-medium">Join Today</h2>
			<div className="py-4">
				<h3 className="py-4"> Sign in with one of the providers</h3>
				<button className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
				<Icon icon="flat-color-icons:google" />
				Sign in with Google
				</button> 
			</div> 
		</div>
	);
}