import Layout from '../components/MyLayout';
import { useRouter } from 'next/router';

const Content = () => {
	const router = useRouter();

	return (
		<div>
			<h1>{router.query.title}</h1>
			<h2>Features of this page</h2>
			<ul>
				{/* Features to include in this page. 1 and 2 most important */}
				<li>Feature 1: Book your class (link to MBO)</li>
				<li>Feature 2: Review lesson feature. What exercises do you remember during the class?</li>
				<li>Feature 3: Comments</li>
			</ul>
		</div>
	);
};

const Page = () => (
	<Layout>
		<Content />
	</Layout>
);

export default Page;
