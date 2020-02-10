import Layout from '../components/MyLayout';
import { useRouter } from 'next/router';

const Content = () => {
	const router = useRouter();

	return (
		<div>
			<h1>{router.query.title}</h1>
			<h2>Features of this page</h2>
			<ul>
				Feature 1 and 2 most important
				<li>Feature 1: Book your class, choose founder (link to MBO)</li>
				<li>Feature 2: Feedback from instructor (optional)</li>
				<li>Feature 3: User's own Comments</li>
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
