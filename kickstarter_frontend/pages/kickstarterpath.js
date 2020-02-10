// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';

const PrivateClass = (props) => (
	<li>
		<Link href={`/privateclass?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
);

const PublicClass = (props) => (
	<li>
		<Link href={`/publicclass?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
);

const Kickstarterpath = (props) => (
	<Layout>
		<h1>Your Kickstarter pathway</h1>
		<p>Page to display after logged in</p>
		<p>Hi user, welcome to your....</p>

		<PrivateClass title="Initial Private Class" />
		<PublicClass title="Public Class 1" />
		<PublicClass title="Public Class 2" />
		<PublicClass title="Public Class 3" />
		<PublicClass title="Public Class 4" />
		<PublicClass title="Public Class 5" />
		<PrivateClass title="Final Private Class" />
	</Layout>
);

export default Kickstarterpath;
