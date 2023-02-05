import Link from "next/link";
import { Icon } from '@iconify/react';
import {auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
export default function Nav() {
const [user, loading]  = useAuthState(auth);
	return (
	<nav className="flex justify-between items-center py-10">
		<Link href="/">
			<button className="text-lg font-medium"> RealDiscuss</button> 
		</Link> 
		<div className="flex">
			<a href="https://www.linkedin.com/in/ryangormican/">
				<Icon icon="mdi:linkedin" color="#0e76a8" width="40" />
			</a>
			<a href="https://github.com/RyanGormican/CompScidle">
				<Icon icon="mdi:github" color="#e8eaea" width="40" />
			</a>
		</div>
		<ul className="flex items-center gap-10">
		{!user && (
		<a href={"/auth/login"} className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
			Join Now! 
		</a> 
		)}
		{user && (
			<div className="flex items-center gap-6">
			<Link href="/post">
				<button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-mg textx-small">Post </button>
			</Link> 
			<Link href="/dashbord">
				<img className="w-12 rounded-full cursor-pointer" src={user.photoURL} />
			</Link> 
			</div>
		)}
		</ul>
	</nav>
	);
}