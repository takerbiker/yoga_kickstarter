import Link from 'next/link';

const linkStyle = {
	marginRight : 15
};

const Header = () => (
	<div>
		<Link href="/">
			<a style={linkStyle}>Home</a>
		</Link>
		<Link href="/about">
			<a style={linkStyle}>About</a>
		</Link>
		<Link href="/yogaexercises">
			<a style={linkStyle}>Yoga Exercises for Beginners</a>
		</Link>
		<Link href="/kickstarterpath">
			<a style={linkStyle}>Your kickstarter journey</a>
		</Link>
		<Link href="/afterclassreview">
			<a style={linkStyle}>After class review. (To delete)</a>
		</Link>
		<Link href="/mindbodyonline">
			<a style={linkStyle}>Mindbody online API link</a>
		</Link>

		<p>Above: Part of header</p>
	</div>
);

export default Header;
