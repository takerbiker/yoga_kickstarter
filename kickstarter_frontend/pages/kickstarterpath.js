// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';
// import PrivateClass from '../components/PrivateClass';
import PrivateClass from './PrivateClass';
import PublicClass from './PublicClass';
import { Component, Redirect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import Axios from 'axios';

export default class Kickstarterpath extends Component {
	constructor(props) {
		super(props);
		this.state = {
			poses: [],
			showDetails : false,
			bookedFirstClass   : '',
		};
	}

	// componentDidMount() {
	// 	let token = "Bearer" + localStorage.getItem("jwt");
	// 	Axios({method: 'get', url: '/api/poses', headers: { 'Authorization': token }})
	// 		.then(response => {
	// 			this.setState({ poses: response.data})
	// 		}).catch(error => console.log('error', error))
	// }

	// To redirect to private class
	toPrivateClass = () => {
		console.log('Button has been clicked');
		this.setState({
			showDetails : true
		});
		console.log("Button's state is", this.state.showDetails);
		<PrivateClass bookedFirstClass={this.bookedFirstClass} />

	};

	// Callback method 
	bookedFirstClass = (data) => {
		this.setState({
			bookedFirstClass: data
		})
	}

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
				
			
				{/* <button onClick ={() => this.setState({showDetails: true})} className="class-box">Private Class</button> */}
				
				
				
				<div className="card-space">
					<h1>Your Kickstarter pathway</h1>
					<h3>Hi user, welcome to your....</h3>

					<div className="container">
						<div className="row ">
							{/* First section  */}
							<div className="col-sm special">
							bookedFirstClass
								<Link href="/PrivateClass">
									<div onClick={this.toPrivateClass}>
									<h3>Private Class</h3>
									<p>Book your initial assessment private class with one of our founders</p>	
									<br />
									<p>Insert image?</p>							
									</div>
								</Link>
							</div>
							{/* First section  */}
							<div className="col-sm special">
							<Link href="/PublicClass">
									<div onClick={this.toPublicClass}>
									<h3>Public Class</h3>
									<p>Book your public class</p>	
									<p>Recap and review your lesson</p>	
									<br />
									<p>Insert image?</p>							
									</div>
								</Link>
							</div>
							{/* First section  */}
							<div className="col-sm special">
								<h3>PublicClass</h3>
							</div>
							{/* First section  */}
							<div className="col-sm special">
								<h3>PublicClass</h3>
							</div>
							{/* First section  */}
							<div className="col-sm special">
								<h3>PublicClass</h3>
							</div>
							{/* First section  */}
							<div className="col-sm special">
								<h3>PublicClass</h3>
							</div>
							{/* First section  */}
							<div className="col-sm special">
								<h3>Private Class</h3>
							</div>


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
						.card-space {
							// margin-top: 50px;
							padding-top: 5%;
							padding-bottom: 5%;
						}

						.special {
							border: 1px solid blue;
							padding: 10px;
						}

						* { 
							text-align: center;
						}

						p {
							font-size: 12px;
						}

						h3 {
							font-size: 20px;
						}
					`}
				</style>
			</Layout>
		);
	}
}
