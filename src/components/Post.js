import React, { Component } from "react";
import User from "./User";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User
          src="https://www.eurocarnews.com/media/pictorials/1949/10882.jpg"
          alt="man"
          name ="Audi"
          min
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">Quattro</div>
        <div className="post__descr">
          qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        </div>
      </div>
    );
  }
}
