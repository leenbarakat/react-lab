import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import SelectedBeast from "./Components/SelectedBeast ";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: '',
      image_url: '',
      description:'',
    }
  }
  handleClose = () => {
    this.setState({
      showModal: false
    });
  }
  handleOpen = (name, image_url,description) => {
    this.setState({
      showModal: true,
      name: name,
      image_url: image_url,
      description: description,
    });
  }

  render() {
    return (
      <>
        <Header />
        <Main handleOpen={this.handleOpen} />
        <SelectedBeast
          handleClose={this.handleClose}
          showModal={this.state.showModal}
          name={this.state.name}
          image_url={this.state.image_url}
          description={this.state.description}
        />
        <Footer/>
      </>
    )
  }
}

export default App;