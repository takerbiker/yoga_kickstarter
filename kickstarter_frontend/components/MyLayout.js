import Header from './Header';
import Navbar from './Navbar';
import Head from 'next/head';

// const layoutStyle = {
// 	margin  : 20,
// 	padding : 20,
// 	border  : '1px solid #DDD'
// };

const Layout = (props, title) => (
	// <div style={layoutStyle}>
	<div>
		<Head>
			<title>Yoga Kickstarter</title>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
		</Head>
		<Navbar />

		{/* {props.title} */}
		{props.children}
		{/* <footer>footer (layout component)</footer> */}
	</div>
);

export default Layout;
