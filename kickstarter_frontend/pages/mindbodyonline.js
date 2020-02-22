import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Error from './_error';
import Head from 'next/head';
import { Component } from 'react';
import classSchedule from '../base/mindbodyonline.js';

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
		{
			/* {console.log(schedule[1].ClassDescription)} */
		}

		return (
			<Layout title="Class Schedule">
				<Head>
					<title>Class Schedule</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</Head>

				<div className="card-space">
					{/* {classSchedule[0].classScheduleId}
					{classSchedule[0].Location.Name}
					{classSchedule[0].ClassDescription.Name} */}

					{classSchedule.map((x) => (
						<li key={x.classScheduleId}>
							<div className="container">
								<div className="eachListing row">
									<div className="col-sm">
										<h5>{x.Date} Sunday</h5>
										<p>
											{x.StartDateTime} - {x.EndDateTime}
										</p>
										<p>{x.Location.Name}</p>
									</div>
									<div className="col-sm">
										<h5>{x.ClassDescription.Name}</h5>
										<p>{x.ClassDescription.Description}</p>
										{/* <p>Availability: {x.IsAvailable}</p> */}
									</div>
									<div className="col-xs verticalAlign vertical">
										<a href={'https://clients.mindbodyonline.com/LoginLaunch?studioid=590475'}>
											Book class
										</a>
									</div>
								</div>
							</div>
						</li>
					))}

					{/* MBO  */}
					{/* {schedule.Classes.map((x) => (
						<li key={x.ClassScheduleId}>
						<div className="container">
							<div className="eachListing row">
								<div className="col-sm">
									<p>Start-date: {x.StartDateTime}</p>
									<p>End date: {x.EndDateTime}</p>
									<p>Studio: {x.Location.Name}</p>
								</div>
								<div className="col=sm">
									<p>Class Description: {x.ClassDescription.Description}</p>
								</div>
									<p>Availability: {x.IsAvailable}</p>
									<div className="col-xs verticalAlign vertical">
										<a href={'https://clients.mindbodyonline.com/LoginLaunch?studioid=590475'}>
											Book class
										</a>
									</div>
								</div>
							</div>
						</li>
					))} */}
				</div>

				<style jsx>
					{`
						.card-space {
							// margin-top: 50px;
							padding-top: 5%;
							padding-bottom: 5%;
							// text-align: center;
							// display: inline-block;
						}

						.eachListing {
							// border: 1px solid blue;
							margin-bottom: 10px;
							padding: 15px;
							// width: 1000px;
							// margin: 0 auto;
							box-shadow: 9px 9px 9px rgb(240, 240, 240);
						}

						li {
							list-style: none;
						}

						.verticalAlign {
							// padding: 2% 0;
						}

						.vertical {
							padding: 4% 0;
						}
					`}
				</style>
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
