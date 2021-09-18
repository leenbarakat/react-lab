import { Component }  from "react";

class HornedBeast extends Component {
  constructor(props) {
  super(props);
  this.state = {
      numVotes: 0,
      likes: '',
    }
  }
  vote = () => {
    this.props.handleOpen(this.props.title, this.props.image_url, this.props.description);
    this.setState({
      numVotes: this.state.numVotes + 1,
      likes: <p>&#10084;</p>,
    })
  }
  render() {
    const styling = {
      width: '400px',
      height: '300px',
    }
    return (
      <>
        <h2>title: {this.props.title}</h2>
        <h3>keyword: {this.props.keyword}</h3>
        <img style={styling} onClick={this.vote} src={this.props.image_url} alt=""></img>
        <p>votes: {this.state.numVotes}</p>
        <div>{this.state.likes}</div>
        <p>description: {this.props.description}</p>
        <h4>horns: {this.props.horns}</h4>
      </>
    )
  }
}

export default HornedBeast;