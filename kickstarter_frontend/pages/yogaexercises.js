// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';

import fetch from 'isomorphic-unfetch'; // For fetch API 
import Error from './_error';
import { Component } from 'react';


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
			poses : data, statusCode
		};
	};






	render() {
		const { poses, statusCode } = this.props;

		if (statusCode) {
			return <Error statusCode={statusCode} />
		}
		return ( 
			<Layout title="Yoga Exercises">
				<h1>Exercises for beginners</h1>
				<p>List out the exercises here, pull from API</p>

				{/* {console.log(typeof this.props)}  */}
				{console.log(poses)}
				<ul>
					{poses.map((pose) => (
						<li key={pose.id}>
							<Link href="/p/[id]" as={`/p/${pose.id}`}>
								<a>{pose.name}</a>
							</Link>
							<p>{pose.category}</p>
						</li>
					))}
				</ul>
			</Layout>
		)
	}
}




