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
				
				{/* {console.log(typeof this.props)}  */}
				{console.log(poses)}

				<div className="container card-space">
					<h1>Review your class</h1>
					<p>Which exercises did you learn during the class?</p>
					<div className="container-poses row">
						{poses.map((pose) => (
							<li key={pose.id}>			
									<img src={pose.image} className="img-fluid img-thumb"/>
									<p className="book-title">
									<input type="checkbox" aria-label="Checkbox button for following text input" />
									<br />
									<Link href="/p/[id]" as={`/p/${pose.id}`}>
										<a>{pose.name}</a>
									</Link>
									</p>
									<p className="listed-by">{pose.category}</p>

							</li>
						))}

					{/* Form for comments  */}
					<div className="container">
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
					</div>
				
					</div>
				</div>



				<style jsx>{`
					.labels {
						text-align: center;
						display: inline-block;
					}

					.card-space {
						// margin-top: 50px;
						padding-top: 5%;
						padding-bottom: 5%;
						text-align: center;
						// display: inline-block;
					}

					li {
						list-style-type: none;
					}

					.img-thumb {
						max-width: 90px;
						height: 120px;
						object-fit: cover;
						// margin-top: 50px;
						box-shadow: 9px 3px 6px rgb(173, 173, 173);
						// border: 2px solid black;
						/* border-radius: 28px; */
					}

					.book-title,
					.listed-by {
						color: black;
						// display: inline-block;
						margin: 0 auto;
						width: 200px;
					}
				`}</style>
			</Layout>
		);
	}
}
