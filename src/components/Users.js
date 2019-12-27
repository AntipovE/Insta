import React, { Component } from "react";
import InstaService from "../services/instaService";
import User from "./User";

export default class Users extends Component {
  InstaService = new InstaService();
  state = {
    photos: []
  };
  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getAllUsers()
      .then(this.onPhotosLoaded)
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      error: true
    });
  };

  onPhotosLoaded = photos => {
    this.setState({
      photos,
      error: false,
      loading:false
    });
  };

  renderItems(arr){
    return arr.map(item=>{
        return(
        <User src={item.photo}  name={item.name} min></User>
        )
    })
}

  render(){

    const { photos, loading}= this.state;
   
    if(loading){
        return<div>Loading....</div>
    }
     
    const items = this.renderItems(photos)

    return(
      <div className="right">
        <User
          src="https://www.eurocarnews.com/media/pictorials/1949/10882.jpg"
          alt="man"
          name="Audi"
        />
        <div className="users__block">
        {items}
        </div>
      </div>
    );
  } 
}
