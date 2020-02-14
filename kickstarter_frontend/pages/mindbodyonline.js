import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Error from './_error';

import { Component } from 'react';

// import useSWR from 'swr';

export default class Mindbodyonline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			schedule: ''
		}
		
	}


	// To fetch 
	static async getInitialProps() {
		const res = await fetch('https://api.mindbodyonline.com/public/v6/class/classschedules?limit=100&offset=0', {
			method  : 'GET',
			headers : {
				'Content-Type'                : 'application/json',
				'API-Key'                     : 'f50b5ea43c1440b5af21be52f91ff903',
				SiteId                        : '-99',
				Authorization                 : '35fbccfe944c4d3fa97fe1fa31c9432120d41f87f46a4b62bab73c68b7a0b94d',
				'Access-Control-Allow-Origin' : '*'
			}
		})
		const statusCode = res.status > 200 ? res.status : false;
		const data = await res.json();
		console.log(`Class schedule fetched.`);

		return {
			schedule : data, 
			statusCode
		}
	
	}

	render() {
		const { schedule, statusCode } = this.props;

		if (statusCode) {
			return <Error statusCode={statusCode} />
		}

		return (
			<Layout title="Mindbody Online">
			<p>MBO API</p>
			{console.log(schedule)}

			<ul>{/* {schedule.map((class) => (
						<p>{schedule}</p>
				))} */}
			</ul>
	</Layout>
		)
	}
}



// Mindbodyonline.getInitialProps = async function() {
// 	const res = await fetch('https://api.mindbodyonline.com/public/v6/class/classschedules?limit=100&offset=0', {
// 		method  : 'GET',
// 		headers : {
// 			'Content-Type'                : 'application/json',
// 			'API-Key'                     : 'f50b5ea43c1440b5af21be52f91ff903',
// 			SiteId                        : '-99',
// 			Authorization                 : '35fbccfe944c4d3fa97fe1fa31c9432120d41f87f46a4b62bab73c68b7a0b94d',
// 			'Access-Control-Allow-Origin' : '*'
// 		}
// 	});
// 	const data = await res.json();
// 	console.log(`MBO DATA FETCHED SUCCESFULLY.`);

// 	return {
// 		schedule : data
// 	};
// };


