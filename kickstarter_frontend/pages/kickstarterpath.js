// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';
// import PrivateClass from '../components/PrivateClass';
import PrivateClass from './PrivateClass';
import PublicClass from './PublicClass';
import { Component, Redirect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';

export default class Kickstarterpath extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails : false
		};
	}

	// To redirect to private class
	toPrivateClass = () => {
		console.log('Button has been clicked');
		this.setState({
			showDetails : true
		});
		console.log("Button's state is", this.state.showDetails);
	};

	render() {
		// if (this.state.showDetails === true) {
		// 	// Router.push('/PrivateClass')
		// 	return
		// 		Router.push('/PrivateClass')
		//   }

		return (
			<Layout title="Kickstarter Profile">
				<Head>
					<title>Your Journey Begins here</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</Head>
				<h1>Your Kickstarter pathway</h1>
				<p>Page to display after logged in</p>
				<p>Hi user, welcome to your....</p>
				{/* <button onClick ={() => this.setState({showDetails: true})} className="class-box">Private Class</button> */}
				<div class="card">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							<Link href="/PrivateClass">
								<button onClick={this.toPrivateClass} className="class-box">
									Private Class
								</button>
							</Link>
						</li>

						<li class="list-group-item">
							<Link href="/PrivateClass">
								<button onClick={this.toPrivateClass} className="class-box">
									Private Class
								</button>
							</Link>
						</li>
					</ul>
				</div>

				{/* <Link href="/PrivateClass">
					<button onClick={this.toPrivateClass} className="class-box">
						Private Class
					</button>
				</Link>
				<br />
				<Link href="/PublicClass">
					<button onClick={this.toPublicClass} className="class-box">
						Public Class
					</button>
				</Link> */}

				<style jsx>
					{`
						.class-box {
							width: 300px;
							height: 100px;
							border: 1px solid;
							background-color: light-grey;
						}

						.card {
							width: 18rem;
						}
					`}
				</style>
			</Layout>
		);
	}
}
