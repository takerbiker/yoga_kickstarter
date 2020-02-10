import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
// import useSWR from 'swr';

const Mindbodyonline = (props) => (
	<Layout>
		<p>MBO API</p>
		{console.log(props)}

		<ul>{/* {props.schedule.map((class) => (
					<p>{schedule}</p>
			))} */}</ul>
	</Layout>
);

//Problem 1: THE LINK IS WRONG
//Problem 2: Need to include the key. CORS issue.

// Mindbodyonline.getInitialProps = async function() {
// 	const res = await fetch('https://api.mindbodyonline.com/public/v6/class/classschedules?');
// 	const data = await res.json();
// 	console.log(`Class schedule data fetched.`);

// 	return {
// 		schedule : data
// 	};
// };

Mindbodyonline.getInitialProps = async function(url, data) {
	return fetch('https://api.mindbodyonline.com/public/v6/class/classschedules?', {
		method  : 'GET',
		body    : JSON.stringify(data),
		headers : {
			'Content-Type'                : 'application/json',
			'API-Key'                     : 'f50b5ea43c1440b5af21be52f91ff903',
			SiteId                        : '-99',
			Authorization                 : 'null',
			'Access-Control-Allow-Origin' : '*'
		}
	}).then((response) => response.json);
};

export default Mindbodyonline;

// method: 'Get',
// headers: {
//     'Content-Type: application/json',
//     'API-Key: f50b5ea43c1440b5af21be52f91ff903',
//     'SiteId': '-99'
//     'Authorization': 'null',
// }
