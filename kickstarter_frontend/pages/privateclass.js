import Layout from '../components/MyLayout';
import Link from 'next/link';
import { Component } from 'react';
import { useRouter } from 'next/router';



export default class PrivateClass extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	// this.state = {
	// 	class: []
	// }

	render() {
		return (
			<React.Fragment>
				{/* <h1>{router.query.title}</h1> */}
				<h1>Features of this page</h1>
				<h2>Hello there</h2>
			</React.Fragment>
		);
	}
}
// const PrivateClass = (props) => (
// 	<li>
// 		<Link href={`/privateclass?title=${props.title}`}>
// 			<a>{props.title}</a>
// 		</Link>
// 	</li>
// );
