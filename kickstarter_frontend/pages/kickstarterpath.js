// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';
// import PrivateClass from '../components/PrivateClass';
import PrivateClass from './PrivateClass';
import PublicClass from './PublicClass';
import { Component } from 'react';


export default class Kickstarterpath extends Component {

	render() {
		return (
			<Layout title="Kickstarter Profile">
			<h1>Your Kickstarter pathway</h1>
			<p>Page to display after logged in</p>
			<p>Hi user, welcome to your....</p>
	
			{/* <PrivateClass title="Private1" /> */}
			{/* <PublicClass title="Public Class 1" />
			<PublicClass title="Public Class 2" />
			<PublicClass title="Public Class 3" />
			<PublicClass title="Public Class 4" />
			<PublicClass title="Public Class 5" /> */}
			{/* <PrivateClass /> */}
		</Layout>
		)
	}
}


