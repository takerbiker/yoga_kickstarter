// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Yogaexercises = (props) => (
	<Layout>
		<h1>Exercises for beginners</h1>
		<p>List out the exercises here, pull from API</p>
		{/* {console.log(typeof props)} */}
		{console.log(props.poses)}
		<ul>
			{props.poses.map((pose) => (
				<li key={pose.id}>
					<Link href="/p/[id]" as={`/p/${pose.id}`}>
						<a>{pose.name}</a>
					</Link>
					<p>{pose.category}</p>
				</li>
			))}
		</ul>
	</Layout>
);

Yogaexercises.getInitialProps = async function() {
	const res = await fetch('http://localhost:3000/poses');
	const data = await res.json();
	console.log(`Yoga exercises data fetched. Count: ${data.length}`);

	return {
		// poses : data.map((entry) => entry.pose)
		poses : data
	};
};
export default Yogaexercises;
