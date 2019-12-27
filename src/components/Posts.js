import React, { Component } from "react";
// import Post from "./Post";
import InstaService from "../services/instaService";
import User from "./User";
import ErrorMessage from "./Error";

export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false
  };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch();
  }

  onPostsLoaded = posts => {
    this.setState({
      posts,
      error: false
    });
  };

  onError = () => {
    this.setState({
      error: true
    });
  };

  renderItems(arr) {
    return arr.map(item => {
      const { name, alt, photo, src, descr, id } = item;

      return (
        <div className="post" key={id}>
          <User src={photo} alt={alt} name={name} min />
          <img src={src} alt={alt}></img>
          <div className="post__name">Quattro</div>
          <div className="post__descr">{descr}</div>
        </div>
      );
    });
  }

  render() {
    const { error, posts } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    const items = this.renderItems(posts);
    return <div className="left">{items}</div>;
  }
}
