import Layout from '../components/MyLayout';
import InstructorSchedule from '../components/InstructorSchedule';
import Link from 'next/link';


// import Link from 'next/link';
import Head from 'next/head';

import { Component } from 'react';
import { useRouter } from 'next/router';

export default class BookPrivateSession extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// booked   : false,
			// comments : '',
			value : 'Bianca', 
			showComponent: false,
		};
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	handleSubmit = (e) => {
		console.log('You have chosen ' + this.state.value + ' as your instructor.');
		e.preventDefault();
		this.setState({
			showComponent: true,
		});
	};

	render() {
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
					<h1>Book your session with one of our master teachers</h1>
					<h5>A 1-to-1 session to help you better understand...</h5>

					<div className="row">
						<div className="first-row">
							<form onSubmit={this.handleSubmit}>
								<label>
									<h5>Which instructor would you like?</h5>
									<select value={this.state.value} onChange={this.handleChange}>
										<option value="Suffian">Suffian</option>
										<option value="Angie">Angie</option>
										<option defaultValue="Bianca">Bianca</option>
									</select>
								</label>
								<input className="btn btn-success" type="submit" value="Submit" />{' '}
							</form>
						</div>
						<div className="first-row">
							{this.state.showComponent ? <InstructorSchedule value={this.state.value} /> : ''}
							
						</div>
					</div>
					<Link href="/PrivateClass">
						Back
					</Link>

					{/* <div className="row">
						<div className="first-row">
							<Link href="/Afterclassreview">
								<h3>Recap and review! Which exercises do you remember?</h3>
							</Link>							
						</div>
					</div> */}
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
