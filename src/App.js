import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import allbeast from './components/data.json'
import SelectedBeast from './components/SelectedBeast';
import Form from 'react-bootstrap/Form';

class App extends React.Component {

  constructor(props){

    super(props)

    this.state={

        sBeast: allbeast,
          allbeast: allbeast,
         dataC: {},
         honors: 0,
        show: false
      
      
    }
  }

  handleClose = ()=>{
    this.setState({
      show : false
    })
  }

  
  
  showpost =(t)=>{
    let dataC = allbeast.find(data => {

      if (data.t === t) {
        return data;
      }
    })
    this.setState({
      show : true,
      dataC: dataC
    })
  }
  

  eventhandler = async (e) =>
  {
      
        e.preventDefault();
        await this.setState(
            {
        sBeast : this.filterArray(Number(e.target.value)),
        honors: e.target.value
    });

    console.log(this.state.sBeast);
  };
  
  
  filterArray = (Number)=>{

    let arr = allbeast.filter(element=>
    {

                if( Number === 0)
                {
                     return element;
                }
                else
                 {
                 if( element.horns === Number )
                     {
                        return true;
                    }
                else
                    {
                     return false;
                     }
      }
    });

    return arr;
 
  }
  

  
  
  render() {
    return (
      <>
        <Header/>

        <Form.Select name="honors"  onChange={this.eventhandler} aria-label=" Select anything" >
            
                                 <option>Open this select menu</option>
                                 <option value="all">all</option>
                                 <option value="one">1</option>
                                 <option value="two">2</option>
                                 <option value="three">3</option>
                                 <option value="200">amazing</option>
         </Form.Select>  
      
            <Main  showpost={this.showpost} allbeast={this.state.sBeast}  allbeast ={this.state.allbeast}  />
            <SelectedBeast  handleClose={this.handleClose} show={this.state.show} dataC={this.state.dataC} />
        <Footer />
      </>
    )
  }
}

export default App;