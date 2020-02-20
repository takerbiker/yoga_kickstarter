// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Head from 'next/head';


export default function About() {
	return (
		<Layout title="About us">
			<Head>
					<title>About</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</Head>

			<div className="container card-space">
					About us
				</div>

			<style jsx>{`

					.card-space {
						// margin-top: 50px;
						padding-top: 5%;
						padding-bottom: 5%;
						text-align: center;
						// display: inline-block;
					}

					li {
						list-style: none;
					}
					`}
				</style>





		</Layout>
	);
}
