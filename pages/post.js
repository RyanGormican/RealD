import {auth, db} from '../utils/firebase';
import {useRouter} from 'next/router';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useEffect, useState} from 'react';

export default function Post(){
	return (
		<div>
			<form>
				<h1> Create a new post </h1>
			</form>
		</div>
	);
}