import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

const Index = (props) => (
	<Layout title="Home">
		<Head>
			<title>Your Yoga Journey</title>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossorigin="anonymous"
			/>
		</Head>

		{/* Jumbo design  */}
		<div className="jumbo1">
			<div className="container">
				<h1 className="display-4 jumbo1words">Image</h1>
			</div>
		</div>
		{/* Card  */}
		{/* <div className="card">
			<img
				src="https://www.yogajournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTQ2MjI3ODcyMDE5OTgxOTIx/cow-face-with-eagle-arms-forhips.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</p>
			</div>
		</div> */}

		<div className="container">
			<div className="row">
				<div className="col-sm">
					Image
					{/* <img src="./images/test.jpg" /> */}
				</div>
				<div className="col-sm">Sign Up?</div>
			</div>
		</div>
		{/* <img src="/images/test.jpg" /> */}

		<h1>Index page</h1>
		<style jsx>{`
			// .card {
			// 	width: 18rem;
			// }
			.col-sm {
				height: 300px;
				width: 500px;
				border: black 1px solid;
				background-color: grey;
				margin-top: 20px;
			}

			.jumbo1 {
				background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
				background-size: cover;
				background-position: 10% 30%;
				/* opacity: 80%; */
				min-height: 300px;
				padding-top: 20%;
				padding-bottom: 20%;
			}

			.jumbo1words {
				color: white;
				font-family: "Permanent Marker";
			}
		`}</style>
	</Layout>
);

// Index.getInitialProps = async function() {
// 	const res = await fetch('http://localhost:3000/poses');
// 	const data = await res.json();

// 	console.log(`Yoga Exercises data fetched. Count: ${data.length}`);

// 	return {
// 		poses : data.map((entry) => entry.pose)
// 	};
// };

export default Index;
