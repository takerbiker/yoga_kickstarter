import Header from './Header';
// import Head from 'next/head';
import Router from 'next/router';
// import NProgress from 'nprogress';

// Router.onRoutechangeStart = url => {
// 	console.log(url);
// 	NProgress.start();
// }

// Router.onRouteChangeComplete = () => Nprogress.done();
// Router.onRouteChangeError = () => NProgress.done();

const layoutStyle = {
	margin  : 20,
	padding : 20,
	border  : '1px solid #DDD'
};

const Layout = (props, title) => (
	<div style={layoutStyle}>
		{/* <Head>
			<title>Kickstarter</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"/>
		</Head> */}
		<Header />

		{props.title}
		{props.children}
		<footer>footer (layout component)</footer>
	</div>
);

export default Layout;
