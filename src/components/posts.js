import React, { Component } from 'react';

import './posts.css';

export default class Posts extends Component{
    state = {
        posts: [
            {
                title: "Some Article",
                author: "Someone",
                link: "#",
                published: "1 min ago",
                content: "The Rules-Based System is in Grave Danger"
            },
            {
                title: "Some Article",
                author: "Someone",
                link: "#",
                published: "1 min ago",
                content: "The Rules-Based System is in Grave Danger"
            },
            {
                title: "Some Article",
                author: "Someone",
                link: "#",
                published: "1 min ago",
                content: "The Rules-Based System is in Grave Danger"
            },
            {
                title: "Some Article",
                author: "Someone",
                link: "#",
                published: "1 min ago",
                content: "The Rules-Based System is in Grave Danger"
            }
        ],
        fetchingPosts: false,
    }
    render(){
        let posts = this.state.posts.map((post,i) => (
            <div key={i} className="posts-item">
                <div className="posts-item-container">
                    <div className="title">
                        <h2><a href={post.link}>{post.title}</a></h2>
                    </div>
                    <div className="published">
                        <span>{post.published}</span>
                    </div>
                    <div className="content">
                        <p>{post.content}</p>
                    </div>
                    <div className="author">
                        <span><i className="far fa-user"></i> {post.author}</span>
                    </div>
                    <div className="read-more">
                        <a href={post.link}>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className="posts-container">
                {posts}
            </div>
        );
    }
}