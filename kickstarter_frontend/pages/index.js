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
		<div className="card">
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
		</div>

		<h1>Index page</h1>
		<style jsx>{`
			.card {
				width: 18rem;
			}

			
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
