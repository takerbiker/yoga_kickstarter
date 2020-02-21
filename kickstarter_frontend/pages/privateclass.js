import Layout from '../components/MyLayout';
// import BookPrivate from '../components/BookPrivate';
import Link from 'next/link';
import Head from 'next/head';

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

	handleChange = (e) => {
		this.setState({ comments: e.target.value });
		// this.props.bookedFirstClass(this.state.bookedFirstClass)
	};

	handleSubmit = (e) => {
		console.log('Inside comments section');
		console.log(this.state.comments);

		e.preventDefault();
		alert('A comment was submitted: ' + this.state.comments);
	};

	render() {
		// console.log(this.props.bookedFirstClass);
		{
			this.state.bookedPrivateFirstClass;
		}
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

				<div className="container card-space">
					<h1>What would you like to do?</h1>
					<div className="row">
						<div className="first-row">
							<Link href="BookPrivateSession">
								<a> Book Your First Session</a>
							</Link>
						</div>
					</div>
					{/* <div className="row">
						<div className="first-row">
							<Link href="/Afterclassreview">
								<h3>Recap and review! Which exercises do you remember?</h3>
							</Link>							
						</div>
					</div> */}
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

				<style jsx>
					{`
						.card-space {
							// margin-top: 50px;
							padding-top: 5%;
							padding-bottom: 5%;
							text-align: center;
							// display: inline-block;
						}

						.first-row {
							border: blue 1px solid;
							width: 500px;
							margin: 0 auto;
						}
					`}
				</style>
			</Layout>
		);
	}
}
