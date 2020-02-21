// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';
// import PrivateClass from '../components/PrivateClass';
import PrivateClass from './PrivateClass';
import PublicClass from './PublicClass';
import { Component } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
// import Axios from 'axios';

export default class Kickstarterpath extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username                : 'customer',
			bookedPrivateFirstClass : false,
			bookedFirstPublicClass  : false
		};
	}

	// componentDidMount() {
	// 	let token = "Bearer" + localStorage.getItem("jwt");
	// 	Axios({method: 'get', url: '/api/poses', headers: { 'Authorization': token }})
	// 		.then(response => {
	// 			this.setState({ poses: response.data})
	// 		}).catch(error => console.log('error', error))
	// }

	// componentDidMount = () => {
	// 	// console.log('Hello', bookedPrivateFirstClass);
	// 	this.setState({
	// 		bookedPrivateFirstClass : true
	// 	});
	// };

	// To redirect to private class
	toPrivateClass = () => {
		console.log('Button has been clicked');
		console.log("Button's state is", this.state.bookedPrivateFirstClass);
		this.setState({
			bookedPrivateFirstClass : true
		});
		Router.push('/PrivateClass');
		// <PrivateClass bookedFirstClass={this.bookedFirstClass} />;
	};

	// To redirect to public class
	toPublicClass = () => {
		console.log('Button has been clicked');
		console.log("Button's to public class state is", this.state.bookedFirstPublicClass);
		this.setState({
			bookedFirstPublicClass : true
		});
		Router.push('/PublicClass');
		// <PrivateClass bookedFirstClass={this.bookedFirstClass} />;
	};

	render() {
		const bookedPrivateFirstClass = this.state.bookedPrivateFirstClass;

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

				{/* <button onClick ={() => this.setState({showDetails: true})} className="class-box">Private Class</button> */}
				<div className="card-space">
					<img
						className="imageHead"
						src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt=""
					/>
					<div className="container leftAlign">
						<h1>Your Kickstarter pathway</h1>
						<h3>
							Hi {this.state.username}, welcome to the amazing world of yoga! Keep track of your progress
							with your personal account.
						</h3>
						<hr />
					</div>
					<div className="container containerBig">
						<div className="row ">
							{/* First row first box  */}
							<div className="col-sm special">
								<div onClick={this.toPrivateClass}>
									<h7>> Your First Step</h7>
									<h2>Private Session</h2>
									<p>
										Want to get started but no idea where to start? Book your 1-on-1 with our master
										trainers!
									</p>
									<button className="btn btn-info" onClick={this.toPrivateClass}>
										Start
									</button>
									{/* {bookedPrivateFirstClass ? <h6>BOOKED</h6> : <h6>NOT BOOKED</h6>} */}
								</div>
							</div>

							{/* First row second box  */}
							<div className="col-sm special">
								<div onClick={this.toPublicClass}>
									<h7>> Basics</h7>
									<h2>Public Class</h2>
									<p>
										Get familiar with basic poses and exercises that will make your yoga practice
										more fulfilling!
									</p>
									<button className="btn btn-info" onClick={this.toPublicClass}>
										Start
									</button>
								</div>
							</div>

							{/* First row third box  */}
							<div className="col-sm special">
								<div onClick={this.toPublicClass}>
									<h7>> Basics</h7>
									<h2>Public Class</h2>
									<p>
										Get familiar with basic poses and exercises that will make your yoga practice
										more fulfilling!
									</p>
									<button className="btn btn-info" onClick={this.toPublicClass}>
										Start
									</button>
								</div>
							</div>
						</div>

						<div className="row">
							{/* Second row first box  */}
							<div className="col-sm special">
								<div onClick={this.toPublicClass}>
									<h7>> Basics</h7>
									<h2>Public Class</h2>
									<p>
										Learn some basic poses and exercises that will make your yoga practice more
										fulfilling in the long run!
									</p>
									<button className="btn btn-info" onClick={this.toPublicClass}>
										Start
									</button>
								</div>
							</div>
							{/* Second row second box  */}
							<div className="col-sm special">
								<div onClick={this.toPublicClass}>
									<h7>> Explore</h7>
									<h2>Public Class</h2>
									<p>
										You should be a little more familiar with the basics by now. Up for a little
										challenge?
									</p>
									<button className="btn btn-info" onClick={this.toPublicClass}>
										Start
									</button>
								</div>
							</div>
							{/* Second row third box  */}
							<div className="col-sm special">
								<div onClick={this.toPrivateClass}>
									<h7>> Be Free</h7>
									<h2>Private Session</h2>
									<p>
										Come and recap what you have learnt with a 1-on-1 session with our master
										trainers!
									</p>
									<button className="btn btn-info" onClick={this.toPrivateClass}>
										Start
									</button>
									{/* {bookedPrivateFirstClass ? <h6>BOOKED</h6> : <h6>NOT BOOKED</h6>} */}
								</div>
							</div>
						</div>
						{/* First section  */}
					</div>
				</div>

				{/* <ul className="">
						<li className="">
							<Link href="/PrivateClass">
								<button onClick={this.toPrivateClass} className="class-box">
									Private Class
								</button>
							</Link>
						</li>

						<li className="">
							<Link href="/PrivateClass">
								<button onClick={this.toPrivateClass} className="class-box">
									Private Class
								</button>
							</Link>
						</li>
					</ul> */}
				{/* </div> */}

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
						.imageHead {
							// background-size: contain;
							width: 100%;
							height: 300px;
							object-fit: cover;
							object-position: 0 80%;
						}
						.card-space {
							padding-top: 3%;
						}

						.leftAlign {
							text-align: left;
							padding-top: 1%;
							margin-bottom: 1%;
						}
						.special {
							// border: 1px solid blue;
							padding: 15px;
							margin: 10px;
							box-shadow: 9px 7px 25px -10px rgba(0, 0, 0, 0.75);
						}

						p {
							font-size: 12px;
						}

						h3 {
							font-size: 20px;
						}
						// .containerBig {
						// 	border: 2px solid red;
						// }

						hr {
							width: 1100px;
						}
					`}
				</style>
			</Layout>
		);
	}
}
