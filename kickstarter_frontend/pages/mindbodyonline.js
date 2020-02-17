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
			schedule : ''
		};
	}

	// To fetch
	static async getInitialProps() {
		const res = await fetch('http://localhost:3000/classes');
		const statusCode = res.status > 200 ? res.status : false;
		const data = await res.json();
		console.log(`Class schedule fetch.`);

		return {
			schedule   : data,
			statusCode
		};
	}

	render() {
		const { schedule, statusCode } = this.props;

		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}

		return (
			<Layout title="">
				<p>MBO API</p>
				{/* {console.log(schedule)} */}
				{console.log(schedule.Classes)}

				{schedule.Classes.map((x) => (
					<li key={x.ClassScheduleId}>
						<p>Studio: {x.Location.Name}</p>
						{/* <p>Studio: {x.Resource[Name]}</p> */}
						<p>Class Description: {x.ClassDescription.Description}</p>
						<p>Start-date: {x.StartDateTime}</p>
						<p>End date: {x.EndDateTime}</p>
						<p>Availability: {x.IsAvailable}</p>
					</li>
				))}

				{/* {console.log(schedule[1].ClassDescription)} */}
				<p> Conditionals</p>
				<ul>
					<li>If active is true, display.</li>
					<li>Display only when level is 1/2, show vacancy?</li>
				</ul>
				{/* <Link href="https://clients.mindbodyonline.com/LoginLaunch?studioid=590475"> */}
				<a>Class A</a>
				{/* </Link> */}
				<br />

				{/* <Link href="https://clients.mindbodyonline.com/LoginLaunch?studioid=590475"> */}
				<a>Class B</a>
				{/* </Link> */}

				{/* <p>{schedule.ClassDescription}</p> */}
				{/* <p>{schedule.ClassDescription}</p> */}
				{/* {schedule.ClassDescription.map((class) => (
					{class.Name}
				))} */}
			</Layout>
		);
	}
}

// {poses.map((pose) => (
// 	<li key={pose.id}>
// 		<Link href="/p/[id]" as={`/p/${pose.id}`}>
// 			<a>{pose.name}</a>
// 		</Link>
// 		<p>{pose.category}</p>
// 	</li>
// ))
