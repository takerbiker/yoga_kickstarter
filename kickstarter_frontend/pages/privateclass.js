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
			<Layout title="Private Class">

				{/* <h1>{router.query.title}</h1> */}
				<h1>Features of this page</h1>
				<ul>
					<li>Book MBO</li>
					<li>User's own notes</li>
				</ul>			
				<Link href='/'>
					<button className="class-box">Book MBO (Haven't linked)</button>
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
