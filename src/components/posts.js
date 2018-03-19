import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import * as API from '../api-endpoints'; 
import './posts.css';



const Loader = () => (
    <div className="lds-hourglass"></div>
);

export default class Posts extends Component{
    state = {
        posts: [
            {
                title: "Some Article",
                author: "Someone",
                link: "#",
                published: "2018-03-15T20:02:36.000Z",
                content: "The Rules-Based System is in Grave Danger"
            },
            {
                title: "Some Article",
                author: "Someone",
                link: "#",
                published: "2018-03-15T20:02:36.000Z",
                content: "The Rules-Based System is in Grave Danger"
            },
            {
                title: "Some Article",
                author: "Someone",
                link: "#",
                published: "2018-03-15T20:02:36.000Z",
                content: "The Rules-Based System is in Grave Danger"
            },
            {
                title: "Some Article",
                author: "Someone",
                link: "#",
                published: "2018-03-15T20:02:36.000Z",
                content: "The Rules-Based System is in Grave Danger"
            }
        ],
        fetchingPosts: false,
        errorFetching: false
    }

    componentWillMount(){
        this.setState({fetchingPosts:true});
        console.log(API.LATEST_POSTS)
        axios.get(API.LATEST_POSTS,{
            validateStatus: status => status < 500
        })
            .then( res => {console.log(res.data); return res.data})
            .then( res => this.setState({ fetchingPosts: false, errorFetching: false,posts:res.data}))
            .catch( err => {this.setState({ fetchingPosts: false, errorFetching: true, posts: []}); console.log("err",err)});
    }

    timestampToDuration(timestamp){

        let t = moment(timestamp);
        let diff = moment.duration(moment().diff(t));
        const handlePlural = (count,word) => `${count} ${word}${count>1?'s':''} ago`; 
        if(diff.years()){
            return handlePlural(diff.years(),'year');
        }else if(diff.months()){
            return handlePlural(diff.months(),'month');
        }else if(diff.weeks()){
            return handlePlural(diff.weeks(),'week');        
        }else if(diff.days()){
            return handlePlural(diff.days(),'day');        
        }else if(diff.hours()){
            return handlePlural(diff.hours(),'hour');        
        }else if(diff.minutes()){
            return handlePlural(diff.minutes(),'minute');
        }
    
        return handlePlural(diff.seconds(),'second');
    };


    render(){

        let posts = this.state.posts.map((post,i) => (
            <div key={i} className="posts-item">
                <div className="posts-item-container">
                    <div className="title">
                        <h2><a href={post.link} target="_blank">{post.title}</a></h2>
                    </div>
                    <div className="published">
                        <span>{this.timestampToDuration(post.published)}</span>
                    </div>
                    <div className="content">
                        <p dangerouslySetInnerHTML={{__html:post.content}}></p>
                    </div>
                    <div className="author">
                        <span><i className="far fa-user"></i> {post.author}</span>
                    </div>
                    <div className="read-more">
                        <a href={post.link} target="_blank">
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        ));

        let empty_msg = <h2 className="lonely-message">It's Lonely Here <br/> :(</h2>;
        let err_msg = <h2 className="lonely-message">Something went wrong! <br/> :(</h2>;
        return (
            <div className="posts-container">
                {this.state.fetchingPosts && !this.state.errorFetching?<Loader/>:
                this.state.errorFetching?err_msg:
                this.state.posts.length?posts:empty_msg} 
                
            </div>
        );
    }
}