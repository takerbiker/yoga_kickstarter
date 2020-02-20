import fetch from 'isomorphic-unfetch'; // For fetch API
// import Head from 'next/head';
// import { Component } from 'react';
// import Link from 'next/link';
// import Layout from './MyLayout';
// import { post } from 'axios';

export default class InstructorSchedule extends React.Component {
    constructor(props) {
        super(props);

    }

    
    render() {
        console.log('Prop is ' + this.props.value)
        if (this.props.value === 'Bianca') {
            return (
                <div>
                    {this.props.value}'s Schedule
                </div>
            )
        } else if (this.props.value === 'Suffian') {
            return (
                <div>
                    {this.props.value}'s Schedule

                </div>
            )
        } else {
            return (
                <div>
                    {this.props.value}'s Schedule

                </div>
            )
        }



     
        
    }
}

