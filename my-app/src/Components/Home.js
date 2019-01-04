import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./postStyle.css";
import {connect} from 'react-redux'

class Home extends Component{

    render(){
        const {posts} = this.props;

        const postList = posts.length?(
            posts.map(post =>{
                return <div className="post card" key={post.id}>
                    <img src="https://github.com/iamshaunjp/react-redux-complete-playlist/blob/lesson-33/poketimes/src/pokeball.png?raw=true" alt="Img"/>
                    <div className="card-content">
                      <Link to={"/" + post.id}>
                        <span className="card-title purple-text">
                          {post.title}
                        </span>
                      </Link>
                      <p>{post.body}</p>
                    </div>
                  </div>;
            })
        ):(
            <div className="center">No Posts</div>
        )

        return (
            <div className="container">
                <h1 className="center">Home</h1>
                <p>
                    {postList}
                </p>
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return{
        posts:state.posts
    }
}


export default connect(mapStateToProps)(Home);