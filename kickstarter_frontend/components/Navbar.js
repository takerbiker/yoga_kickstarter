import Header from './Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';

import Head from 'next/head';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <Head>
                <title>Your Yoga Journey</title>
                <link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossorigin="anonymous"
			    />
            </Head>
            
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <Link href="/" className="navbar-brand">
                    <a>Yoga Kickstarter</a>
                </Link>

                <button
                    className="navbar-toggler "
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                </button>

                
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link href="/" className="nav-link">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/yogaexercises" className="nav-link">
                                <a>Yoga Exercises</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/kickstarterpath" className="nav-link">
                                <a>Kickstarter Path</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/afterclassreview" className="nav-link">
                                <a>After class review(delete)</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/mindbodyonline" className="nav-link">
                                <a>Mindbody API</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login" className="nav-link">
                                <a>Log In</a>
                            </Link>
                        </li>

                        {/* To toggle log in or log out button  */}
                        {/* {this.props.currentUser ? (
                        <li className="nav-item nav-link" onClick={this.props.toLogout}>
                            <Link to="/">Logout</Link>
                        </li>
                        ) : (
                        <li className="nav-item">
                            <Link href="/login" className="nav-link">
                                <a>Log In</a>
                            </Link>
                        </li>
                        )} */}

                        {/* for signup */}
                        {/* {this.props.currentUser ? (''
                        ) : (
                            <li className="nav-item">
                                <Link href="/signup" className="nav-link">
                                    <a>Sign Up</a>
                                </Link>
                            </li>
                        )} */}



                    </ul>
                </div>
            </nav>
            
            <style jsx>{`
            * {
                color: black;
                text-align: right;
                font-family: "Open Sans", sans-serif;
                font-size: 1rem;
                text-transform: lowercase;
                padding: 3px;
            }
            
            
            
            `}


            </style>
            {/* <style jsx>{`
					.navbar-dark .navbar-nav .nav-link {
                        color: black;
                        // text-align: right;
                        // font-family: "Open Sans", sans-serif;
                        // font-size: 1rem;
                        // text-transform: lowercase;
                        // border-bottom: 2px solid orange;
                      }
                      
                      .navbar-dark .navbar-brand {
                        color: orange;
                        font-family: "Permanent Marker", cursive;
                        font-size: 2rem;
                      }
				`}</style> */}




        </div>
        )
        
    }
}

export default Navbar;
