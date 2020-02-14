import Layout from '../components/MyLayout';
import Link from 'next/link';
import { Component } from 'react';
import { useRouter } from 'next/router';

export default class PublicClass extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	// this.state = {
	// 	class: []
	// }

	render() {
		return (
			<Layout title="Public Class">

				<h1>Features of this page</h1>
				<li>Feature 1: Book your class (link to MBO)</li>
				<li>Feature 2: Review lesson feature. What exercises do you remember during the class?</li>
				<li>Feature 3: Comments</li>

				<Link href='/'>
					<button className="class-box">Book MBO (Haven't linked)</button>
				</Link>
				<br />
				<Link href='/'>
					<button className="class-box">Review your lesson</button>
				</Link>
				<br />
				<Link href='/'>
					<button className="class-box">User's own comments</button>
				</Link>
				<style jsx global>{`
					.class-box {
						width: 300px;
						height: 100px; 
						border: 1px solid orange;
						background-color: lightyellow;
						font-size: 18px;
					}
					`}
				</style>
			</Layout>
		);
	}
}