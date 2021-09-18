import { React, Component } from "react";
import HornedBeast from "./HornedBeast";
import FormofHorns from "./FormofHorns";
import data from '../data.json';
class Main extends Component {
      constructor(props) {
        super(props)
        this.state = {
          beastData: data,
        }
    }
    filterByHorns = (e) => {
      let numberFiltered = parseInt(e.target.value);
      if (numberFiltered > 0) {
        this.beastData = data.filter((filtered) => filtered.horns === numberFiltered);
        this.setState({
          beastData: this.beastData,
      });
      }
    }
  render() {
    return (
      <>
        <FormofHorns filterByHorns={this.filterByHorns}/>
        {
          this.state.beastData.map(item => {
          return <HornedBeast
            keyword={item.keyword}
            image_url={item.image_url}
            title={item.title}
            description={item.description}
            horns={item.horns} 
            handleOpen={this.props.handleOpen}
          />
          })
        }
      </>
    )
  }
}

export default Main;