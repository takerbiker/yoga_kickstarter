import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
	<Layout title="Home">
		<h1>Index page</h1>
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
