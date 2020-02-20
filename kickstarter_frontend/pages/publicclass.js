import Layout from '../components/MyLayout';
import Link from 'next/link';
import { Component } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';


export default class PublicClass extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	// this.state = {
	// 	class: []
	// }

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
							<Link href="/">
								<h3>Book MBO</h3>
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