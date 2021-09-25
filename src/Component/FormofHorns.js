[10:30 pm, 25/09/2021] Zaid Jwabreh: export default SelectedBeast;
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
        <img  src={this.props.image_url} style={styling} onClick={this.votes}…
[10:35 pm, 25/09/2021] Zaid Jwabreh: import { React, Component } from 'react';
import { Form } from 'react-bootstrap'

class FormofHorns extends Component
 {

    fHorns = (fH) =>
     {
    this.props.fHorns(fH);
    }


  render() 

  {

      return (
        <>
          <Form>

            <Form.Label>View-Based on Number of Horns</Form.Label>

            <select name="fHorns" id="fHorns" onChange={this.fHorns}>

                     <option value="Zero" disabled >start!</option>
                     <option value="one">1</option>
                     <option value="two">2</option>
                     <option value="three">3</option>
                     <option value="four">4</option>
                     <option value="Alot">++</option>
                     
            </select>

          </Form>
        </>
      )
  }
}

export default FormofHorns;