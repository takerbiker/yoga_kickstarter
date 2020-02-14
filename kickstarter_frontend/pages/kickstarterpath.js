// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';
// import PrivateClass from '../components/PrivateClass';
import PrivateClass from './PrivateClass';
import PublicClass from './PublicClass';
import { Component, Redirect } from 'react';
import Router, { useRouter } from 'next/router';


export default class Kickstarterpath extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: false
		}
	}

	// To redirect to private class 
	toPrivateClass = () => {
		console.log("Button has been clicked");
		this.setState({
			showDetails: true
		})
		console.log("Button's state is" ,this.state.showDetails)

	}

	render() {
		// if (this.state.showDetails === true) {
		// 	// Router.push('/PrivateClass')
		// 	return 
		// 		Router.push('/PrivateClass')
		//   }

		return (
			<Layout title="Kickstarter Profile">
				<h1>Your Kickstarter pathway</h1>
				<p>Page to display after logged in</p>
				<p>Hi user, welcome to your....</p>
				{/* <button onClick ={() => this.setState({showDetails: true})} className="class-box">Private Class</button> */}
				<Link href='/PrivateClass'>
					<button onClick ={this.toPrivateClass} className="class-box">Private Class</button>
				</Link>
				<br/>
				<Link href='/PublicClass'>
					<button onClick ={this.toPublicClass} className="class-box">Public Class</button>
				</Link>


				<style jsx global>{`
					.class-box {
						width: 300px;
						height: 100px;
						border: 1px solid blue;
						background-color: light-grey;
					}
					`}
				</style>
			</Layout>
		)
	}
}


