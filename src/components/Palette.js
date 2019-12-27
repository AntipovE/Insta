import React, { Component } from "react";
import InstaService from "../services/instaService";
import ErrorMessage from "./Error";

export default class Palette extends Component {
  InstaService = new InstaService();
  state = {
    error: false,
    photos: [],
    loading:true
  };

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getAllPhotos()
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
              <img src={item.src} alt={item.alt}></img>
          )
      })
  }

render(){
    const {error , photos, loading}= this.state;
    if(error){
        return<ErrorMessage/>
    }
    if(loading){
        return<div>Loading....</div>
    }
     
    const items = this.renderItems(photos)

    return(
        <div className = "palette">
            {items}
        </div>
    )
}

}
