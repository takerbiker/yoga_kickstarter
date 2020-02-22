import Layout from '../components/MyLayout';
import Link from 'next/link';
import { Component } from 'react';
import Head from 'next/head';

export default class PublicClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments       : '',
			lessonReviewed : false,
			classBooked    : false
		};
	}

	handleChange = (e) => {
		this.setState({ comments: e.target.value });
	};

	// Handle Submit Comments
	handleSubmitComments = (e) => {
		e.preventDefault();
		console.log(this.state.comments);
	};

	render() {
		return (
			<Layout title="Your public class">
				<Head>
					<title>Your public class</title>
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
						<h3>What would you like to do?</h3>
						<div className="row first-row">
							<Link href="/mindbodyonline">
								<h6>Class Schedule</h6>
							</Link>
						</div>

						<div className="row first-row">
							<Link href="/Afterclassreview">
								<h6>Recap and review! Which exercises do you remember?</h6>
							</Link>
						</div>

						{/* <div className="row">
							<div className="first-row">
								<Link href="/">
									<h3>Comments</h3>
								</Link>
							</div>
						</div> */}

						<div className="row first-row">
							<form onSubmit={this.handleSubmitComments}>
								<label>
									<h6>Comments</h6>
									<textarea value={this.state.comments} onChange={this.handleChange} />
								</label>
								<br />
								<input className="btn btn-success" type="submit" value="Submit" />{' '}
							</form>
						</div>
					</div>
					{this.state.comments}

					<div className="row" />
				</div>

				<style jsx>
					{`
						.imageHead {
							// background-size: contain;
							width: 100%;
							height: 300px;
							object-fit: cover;
							object-position: 0 80%;
							margin-bottom: 5px;
						}
						.card-space {
							// margin-top: 50px;
							padding-top: 3%;
							text-align: center;
							// display: inline-block;
							padding-bottom: 10px;
						}

						.card {
							margin-top: 1%;
							margin-bottom: 1%;
							// margin: 0 auto;
							width: 40%;
							// display: block;
							padding: 2%;
							// box-shadow: 9px 3px 6px rgb(240, 240, 240);

						}

						textarea {
							width: 250px;
							height: 80px;
						}

						.first-row {
							border: grey 1px solid;
							width: 100%;
							margin: 0 auto;
							margin-bottom: 4px;
							padding: 1%;
							// background-color: grey;
							// margin-bottom: 2px;
							display: block;
							box-shadow: 9px 3px 6px rgb(240, 240, 240);

					`}
				</style>
			</Layout>
		);
	}
}
