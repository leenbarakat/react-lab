import { React, Component } from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalData: data,
    }
  }
  render() {
    return (
      <>
        <Header />
        <Main animalData={this.state.animalData}/>
        <Footer />
      </>
    )
  }
}

export default App;