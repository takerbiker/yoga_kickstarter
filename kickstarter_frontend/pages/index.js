import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
	<Layout>
		<h1>Exercises for beginners</h1>
		<p>List out the exercises here, pull from API</p>

		{/* Test props output  */}
		{console.log(props)}
		{/* This returns {poses: Array(3), url: {…}} */}

		{/* This part here is the problem */}
		<ul>
			{props.poses.map((pose) => (
				<li key={pose.id}>
					<Link href="/p/[id]" as={`/p/${pose.id}`}>
						<a>{pose.name}</a>
					</Link>
				</li>
			))}
		</ul>
	</Layout>
);

Index.getInitialProps = async function() {
	const res = await fetch('http://localhost:3000/poses');
	const data = await res.json();

	console.log(`Yoga Exercises data fetched. Count: ${data.length}`);

	return {
		poses : data.map((entry) => entry.pose)
	};
};

export default Index;
