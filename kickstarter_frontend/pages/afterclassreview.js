import Layout from '../components/MyLayout';
import Link from 'next/link';

import fetch from 'isomorphic-unfetch'; // For fetch API
import Error from './_error';
import { Component } from 'react';
import Head from 'next/head';

// const Afterclassreview = (props) => (
// 	<Layout title="After class review">
// 		<Head>
// 			<title>Review your class s</title>
// 			<link
// 				rel="stylesheet"
// 				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
// 				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
// 				crossorigin="anonymous"
// 			/>
// 		</Head>
// 		<h1>Review your class</h1>
// 		<h3>Might not need this page any more</h3>
// 		<p>Tick all that apply. Which exercises did you learn during the class?</p>
// 		Insert checkboxes
// 		<p>Your comments (This is only for yourself)</p>
// 	</Layout>
// );

export default class Afterclassreview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments : ''
		};
	}

	static async getInitialProps() {
		const res = await fetch('http://localhost:3000/poses');
		const statusCode = res.status > 200 ? res.status : false;
		const data = await res.json();
		console.log(`Yoga exercises data fetched. Count: ${data.length}`);

		return {
			// poses : data.map((entry) => entry.pose)
			poses      : data,
			statusCode
		};
	}

	// HandleChange
	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	// HandleSubmit
	handleSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		const { poses, statusCode } = this.props;

		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}
		return (
			<Layout title="After Class Review">
				<Head>
					<title>Review your class</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</Head>
				<h1>Review your class</h1>
				<h3>Might not need this page any more</h3>
				<p>Tick all that apply. Which exercises did you learn during the class?</p>
				Insert checkboxes
				<p>Your comments (This is only for yourself)</p>
				{/* {console.log(typeof this.props)}  */}
				{console.log(poses)}
				{/* Checkboxes  */}
				<div className="input-group mb-3">
					{poses.map((pose) => (
						<div key={pose.id}>
							<div className="input-group-prepend">
								<p className="form-control">{pose.name}</p>
								<div className="input-group-text">
									<input type="checkbox" aria-label="Checkbox button for following text input" />
								</div>
							</div>
						</div>
					))}
				</div>
				<ul>
					{poses.map((pose) => (
						<li key={pose.id}>
							<div className="card">
								{/* <img src={pose.image} className="card-img-top" alt="..." /> */}
								<div className="card-body">
									<p className="card-text">
										<Link href="/p/[id]" as={`/p/${pose.id}`}>
											<a>{pose.name}</a>
										</Link>
									</p>
									<p>{pose.category}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
				{/* Form for comments  */}
				<form onSubmit={this.handleSubmit} className="">
					<label htmlFor="comments" className="labels">
						Comments
					</label>
					<textarea
						type="text"
						name="comments"
						id="comments"
						value={this.state.comments}
						onChange={this.handleChange}
					/>

					<br />
					<input className="btn btn-success" type="submit" value="Submit" />
				</form>
				{/* <div className="card">
					<img
						src="https://www.yogajournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTQ2MjI3ODcyMDE5OTgxOTIx/cow-face-with-eagle-arms-forhips.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</p>
					</div>
				</div> */}
				<style jsx>{`
					.card {
						width: 18rem;
						border: orange solid 1px;
					}

					img {
						width: 12rem;
					}

					li {
						list-style-type: none;
					}
				`}</style>
			</Layout>
		);
	}
}
