import { React, Component } from "react";

class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>title: {this.props.title}</h2>
        <h3>keyword: {this.props.keyword}</h3>
        <img src={this.props.image_url} alt=""></img>
        <p>description: {this.props.description}</p>
        <h4>horns: {this.props.horns}</h4>
      </>
    )
  }
}

export default HornedBeast;