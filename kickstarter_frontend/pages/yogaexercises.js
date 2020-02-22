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

				<div className="card-space">
					{/* <img
						className="imageHead"
						src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt=""
					/> */}

					{/* <div class="card" style="width: 18rem;">
			<img class="card-img-top" src="..." alt="Card image cap">
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
			</div> */}

					<div className="container">
						<h3 className="textCenter">Basic Yoga Exercises</h3>
						<p>
							Just getting started but have no idea where to start? Here are the 20 basic exercises that
							you should get familiar with!
						</p>
						<div className="">
							<div className="row">
								{poses.map((pose) => (
									<li key={pose.id}>
										<div className="card">
											<img src={pose.image} className="card-img-top" />
											{/* <div className="card-body"> */}
											<p className="book-title card-title">
												<Link href="/p/[id]" as={`/p/${pose.id}`}>
													<a>{pose.name}</a>
												</Link>
											</p>
											<p className="listed-by card-text">{pose.category}</p>
											{/* </div> */}
										</div>
									</li>
								))}
							</div>
						</div>
					</div>
				</div>

				<style jsx>{`
					.card-space {
						padding-top: 4%;
					}

					.textCenter {
						text-align: center;
					}

					.imageHead {
						// background-size: contain;
						width: 100%;
						height: 300px;
						object-fit: cover;
						object-position: 0 80%;
					}

					.container-books {
						// position: absolute;
						// top: 150px;
						// left: 80px;
					}

					// .listingCard {
					// 	text-align: center;
					// }

					.card {
						text-align: center;
						width: 14rem;
						// height: 16rem;
						display: block;
						// margin: 0 auto;
						margin: 10px;
						box-shadow: 9px 3px 6px rgb(240, 240, 240);
						padding-bottom: 20px;
					}

					.book-title,
					.listed-by {
						color: black;
						// display: inline-block;
						margin: 0 auto;
						// width: 200px;
					}

					.img-thumb {
						// max-width: 200px;
						// height: 200px;
						// object-fit: contain;
						// margin-top: 50px;
						// box-shadow: 9px 3px 6px rgb(173, 173, 173);
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
