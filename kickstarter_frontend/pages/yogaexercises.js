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
				{console.log(poses)}
				{/* {console.log(typeof this.props)}  */}

				<Head>
					<title>Your Yoga Journey</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</Head>

				<div className="container card-space">
					<h3>Yoga Exercises</h3>
					<div className="container-books">
						{/* <div className="row"></div> */}
						<div className="row">

							{poses.map((pose) => (
								<li key={pose.id}>
									<div className="col listingCard col-sm-3">
										
										<img src={pose.image} className="img-fluid img-thumb"/>
										{/* <div className="card-body"> */}
											<p className="book-title">
												<Link href="/p/[id]" as={`/p/${pose.id}`}>
													<a>{pose.name}</a>
												</Link>
											</p>
											<p className="listed-by">{pose.category}</p>
										{/* </div> */}

									</div>
								</li>
								))}
						</div>
						
					</div>
				</div>

				<style jsx>{`
					.card-space {
						// margin-top: 50px;
						padding-top: 5%;
						padding-bottom: 5%;
						text-align: center;
						// display: inline-block;
						font-family: "Permanent Marker";
					}
					
					.container-books {
						position: absolute;
						top: 150px;
						left: 80px;
					}
					
					.listingCard {
						text-align: center;
					}

					.book-title,
					.listed-by {
						color: black;
						// display: inline-block;
						margin: 0 auto;
						width: 200px;
					}
					
				
					.img-thumb {
						max-width: 200px;
						height: 300px;
						object-fit: cover;
						margin-top: 50px;
						box-shadow: 9px 3px 6px rgb(173, 173, 173);
						// border: 2px solid black;
						/* border-radius: 28px; */
					}


					li {
						list-style-type: none;
					}
				`}</style>



				{/* <ul>
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
				</ul> */}
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


			</Layout>
		);
	}
}
