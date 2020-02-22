import Layout from '../components/MyLayout';
// import BookPrivate from '../components/BookPrivate';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

import { Component } from 'react';
import { useRouter } from 'next/router';

export default class PrivateClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// booked   : false,
			comments                : '',
			// value    : 'Bianca',
			bookedPrivateFirstClass : this.props.bookedPrivateFirstClass
		};
	}

	// handleComments = (e) => {
	// 	console.log('Inside comments sections');
	// 	e.preventDefault();
	// 	// let value = e.target.value;
	// 	this.setState({ comments: e.target.value });
	// };

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	let value = e.target.value;
	// 	this.setState({ comments: value });

	// 	fetch('....', {
	// 		method : 'POST',
	// 		body   : JSON.stringify(comments)
	// 	});
	// };

	// Handle change for comments section
	handleChange = (e) => {
		this.setState({ comments: e.target.value });
		// this.props.bookedFirstClass(this.state.bookedFirstClass)
	};

	// Handle submit for comments section
	handleSubmit = (e) => {
		console.log('Inside comments section');
		console.log(this.state.comments);

		e.preventDefault();
		alert('A comment was submitted: ' + this.state.comments);
	};

	// To handle booking of session button
	handleBookSession = (e) => {
		alert('Booked first session');
		Router.push('/BookPrivateSession');
	};

	render() {
		// console.log(this.props.bookedFirstClass);
		// {
		// 	this.state.bookedPrivateFirstClass;
		// }
		const recordedComments = this.state.comments;

		return (
			<Layout title="Your private class">
				<Head>
					<title>Your private class</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</Head>

				<div className="card-space">
					<img
						className="imageHead"
						src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt=""
					/>
					<div className="card container">
						{/* <div className="container containerContent"> */}
						{/* <h1>What would you like to do?</h1> */}
						<h3>What would you like to do?</h3>
						<div className="row">
							<div className="first-row">
								<button onClick={this.handleBookSession} type="button" className="btn btn-primary">
									Book your first Session
								</button>
								<br />
							</div>
							{/* </div> */}
						</div>

						<div className="row">
							<div className="first-row">
								<form onSubmit={this.handleSubmit}>
									<label>
										Comments:<br />
										<textarea value={this.state.comments} onChange={this.handleChange} />
									</label>
									<br />
									<input className="btn btn-success" type="submit" value="Submit" />{' '}
								</form>
							</div>
						</div>
						{recordedComments}
						{/* {this.state.comments} */}
						<div>Show comments by instructor</div>
					</div>
				</div>

				<style jsx>
					{`
						.imageHead {
							// background-size: contain;
							width: 100%;
							height: 300px;
							object-fit: cover;
							object-position: 0 80%;
							margin-bottom: 10px;
						}
						.card-space {
							// margin-top: 50px;
							padding-top: 5%;
							text-align: center;
							// display: inline-block;
							// padding-bottom: 10px;
						}

						.card {
							margin-top: 1%;
							margin-bottom: 1%;
							// margin: 0 auto;
							width: 40%;
							// display: block;
							padding: 1%;
						}
						// .containerContent {
						// 	margin-top: 10%;
						// }

						textarea {
							width: 300px;
							height: 80px;
						}

						.first-row {
							// border: blue 1px solid;
							// width: 100%;
							margin: 0 auto;
						}
					`}
				</style>
			</Layout>
		);
	}
}
