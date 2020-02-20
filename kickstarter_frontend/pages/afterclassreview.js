import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'; // For fetch API
import Error from './_error';
import { Component } from 'react';
import Head from 'next/head';

export default class Afterclassreview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments : '',
			// 'checkedExercises': {
			// 	'First': false,
			// 	'Second': false,
			// 	'Third': false,
			// },
			poses: []
		};
	}

	// To pull in data 
	static async getInitialProps() {
		const res = await fetch('http://localhost:3000/poses');
		const statusCode = res.status > 200 ? res.status : false;
		const data = await res.json()
		console.log(`Yoga exercises data fetched. Count: ${data.length}`);

		return {
			// poses : data.map((entry) => entry.pose)
			poses      : data,
			statusCode
		};
		// TEST 
		// this.setState({ poses: poses})
	}


	// Handle Change / Submit for comments 
	// HandleChange
	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	// HandleSubmit
	handleSubmit = (event) => {
		event.preventDefault();
	};

/////////////////////////////////////////////////////////////////////
	// For checkboxes / ticking of exercises 
	//Checkbox change
	onCheckboxChange = e => {
		const val = e.target.checked;
		const name = e.target.name;
		let updatedPoses = Object.assign({}, this.state.poses, {[name]: val});
		this.setState({
			poses : updatedPoses
		})
	}

	onCheckboxSubmit = e => {
		e.preventDefault();
		console.log(this.state.poses)
	}

	// To render checkboxes, can delete
	renderCheckedBoxes = () => {
			const poses = ['Yoga First', 'Yoga Second', 'Yoga Third'];
			return poses.map((pose, i) => {
				return (
					<label key={i}>
						{pose}
						<input type="checkbox" name={pose} onChange={this.onCheckboxChange} value={this.state.checkedExercises[pose]}/>
					</label>
				)
			})
	}

	
	render() {
		const { poses, statusCode } = this.props;
		// For errors in pulling data 
		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}

		return (
			<Layout title="After Class Review">
				<Head>
					<title>Review your class</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</Head>
				
				{/* {console.log(typeof this.props)}  */}
				{/* {console.log(poses)} */}
				{console.log('poses are now linked', poses)}

				<div className="container card-space">
						<h1>Review your class</h1>
						<h5>Which exercises did you learn during the class?</h5>
						<div className="container">
							<form onSubmit={this.onCheckboxSubmit} >

							{/* <div className="row"> */}
									{poses.map((pose) => (
										<li key={pose.id}>
											{/* <div className="col listingCard col-sm-3"> */}
												<img src={pose.image} className="img-fluid img-thumb"/>
													<input type="checkbox" name={pose.name} onChange={this.onCheckboxChange} value={this.state.poses['{pose.name}']}/>
												<p className="book-title">
													{pose.name}
												</p>
											{/* </div> */}
										</li>
									))}
								<input className="btn btn-success" type="submit" value="Submit" />
							</form>

						</div>

						
				</div>
				

					{/* Form for comments  */}
					{/* <div className="container">
						<form onSubmit={this.handleSubmit} className="">
							<label htmlFor="comments" className="labels">
								Comments
							</label>
							<textarea
								type="text"
								name="comments"
								id="comments"
								value={this.state.comments}
								onChange={this.handleChange}
							/>
							<br />
							<input className="btn btn-success" type="submit" value="Submit" />
						</form>
					</div> */}
				



				<style jsx>{`
					.labels {
						// text-align: center;
						// display: inline-block;
					}

					.card-space {
						
						padding-top: 5%;
						padding-bottom: 5%;
						text-align: center;
						
					}

					.listingCard {
						text-align: center;
					}
					



					li {
						list-style-type: none;
						width: 10px;
					}

					.img-thumb {
						max-width: 90px;
						height: 120px;
						object-fit: cover;
						// margin-top: 50px;
						box-shadow: 9px 3px 6px rgb(173, 173, 173);
						// border: 2px solid black;
						/* border-radius: 28px; */
					}

					.book-title,
					.listed-by {
						color: black;
						// display: inline-block;
						// margin: 0 auto;
						// width: 200px;
					}
				`}</style>
			</Layout>
		)
	}
}

						{/* Working display for poses  */}
						{/* <div className="container-poses row">
							{poses.map((pose) => (
								<li key={pose.id}>			
										<img src={pose.image} className="img-fluid img-thumb"/>
										<p className="book-title">
										<input type="checkbox" aria-label="Checkbox button for following text input" />
										<br />
										<Link href="/p/[id]" as={`/p/${pose.id}`}>
											<a>{pose.name}</a>
										</Link>
										</p>
										<p className="listed-by">{pose.category}</p>

								</li>
							))}
						</div>  */}
						{/* <form onSubmit={this.onCheckboxSubmit}>
								{this.renderCheckedBoxes()}
								<input className="btn btn-success" type="submit" value="Submit" />

						</form> */}





														{/* Working form  */}
							{/* <form onSubmit={this.onCheckboxSubmit}>
								<label>First
									<input type="checkbox" name="First" onChange={this.onCheckboxChange} value={this.state.checkedExercises['First']}/>
								</label>
								<label>Second
									<input type="checkbox" name="Second" onChange={this.onCheckboxChange} value={this.state.checkedExercises['Second']}/>
								</label>
								<label>First
									<input type="checkbox" name="Third" onChange={this.onCheckboxChange} value={this.state.checkedExercises['Third']}/>
								</label>
								<input className="btn btn-success" type="submit" value="Submit" />
							</form> */}