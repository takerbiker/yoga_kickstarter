import Header from '../components/Header';
import Layout from '../components/MyLayout';
// import useSWR from 'swr';


export default function Yogaexercises() {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         poses: []
    //     }
    // }
    // componentDidMount() {
    //     this.getExercises()
    // }

    // getExercises() {
    //     fetch('http://localhost:3000/poses')
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //     .catch(error => console.error(error))
    // }

    return (
        <Layout>
            <h1>Exercises for beginners</h1>
            <p>List out the execises here, pull from API</p>
            
        </Layout>
    )
}

// export default Yogaexercises;