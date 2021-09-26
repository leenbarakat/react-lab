export default SelectedBeast;
import { Component }  from "react";

class HornedBeast extends Component

{


  constructor(props)
   {
    super(props);
        this.state = 
        {   
            likes: '',
            numV: 0,
          
         }
  }

  render() {
    const styling = 
    {

      height: '300px',
      width: '400px',
     
    }

    votes = () => {
      
        this.props.handleOpen(this.props.title, this.props.image_url, this.props.body);
        this.setState({
         numV: this.state.numV + 1,
         likes: <p>&#10084;</p>,
        })
      }

    return (
      <>
        <h2>title: {this.props.title}</h2>
        <h3>word: {this.props.word}</h3>
        <img  src={this.props.image_url} style={styling} onClick={this.votes} ></img>
        <p>votes: {this.state.numV}</p>
        <div>{this.state.likes}</div>
        <p>body: {this.props.body}</p>
        <h4>horns: {this.props.horn}</h4>
      </>
    )
  }
}

export default HornedBeast;