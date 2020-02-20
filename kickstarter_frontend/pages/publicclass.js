import Layout from '../components/MyLayout';
import Link from 'next/link';
import { Component } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';


export default class PublicClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: "",
			lessonReviewed: false,
			classBooked: false
		}
	}

	handleChange = e => {
		this.setState({comments: e.target.value});

	}

	// Handle Submit Comments 
	handleSubmitComments = e => {
		e.preventDefault();
		console.log(this.state.comments)
	}


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

				<div className="container card-space">
					<h1>What would you like to do?</h1>

					<div className="row">
						<div className="first-row">
							<Link href="/mindbodyonline">
								<h3>Check out the classes available to you!</h3>
							</Link>							
						</div>
					</div>

					<div className="row">
						<div className="first-row">
							<Link href="/Afterclassreview">
								<h3>Recap and review! Which exercises do you remember?</h3>
							</Link>							
						</div>
					</div>

					<div className="row">
						<div className="first-row">
							<Link href="/">
								<h3>Comments</h3>
							</Link>	
						</div>
					</div>

					<div className="row">
						<div className="first-row">
							<form onSubmit={this.handleSubmitComments}>
								<label>
									Comments:<br />
									<textarea value={this.state.comments} onChange={this.handleChange} />
								</label>
								<br />
								<input className="btn btn-success" type="submit" value="Submit" />{' '}
							</form>
						</div>
					</div>
					{this.state.comments}
					
					<div className="row">


					</div>

				</div>



				<style jsx>{`

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