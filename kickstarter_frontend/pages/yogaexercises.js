// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';

import fetch from 'isomorphic-unfetch'; // For fetch API
import Error from './_error';
import { Component } from 'react';
import Head from 'next/head';

export default class Yogaexercises extends Component {
	// state = {
	// 	poses: null
	// }
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

	render() {
		const { poses, statusCode } = this.props;

		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}
		return (
			<Layout title="Yoga Exercises">
				<Head>
					<title>Your Yoga Journey</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</Head>
				<h1>Exercises for beginners</h1>
				<p>List out the exercises here, pull from API</p>

				{/* {console.log(typeof this.props)}  */}
				{console.log(poses)}
				<ul>
					{poses.map((pose) => (
						<li key={pose.id}>
							<div className="card">
								<img src={pose.image} className="card-img-top" alt="..." />
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
