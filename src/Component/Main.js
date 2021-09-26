import { React, Component } from "react";
import FormofHorns from "./FormofHorns";
import data from '../data.json';
import HornedBeast from "./hornedbeasts";

class Main extends Component
 {
      constructor(props)
       {
               super(props)
        this.state = 
        {
          bData: data,
        }
    }
    

     filterByHorns = (f) => {

      let numFiltered = parseInt(f.target.value);
      if (numFiltered > 0)
       {
                this.bData = data.filter((filtered) => filtered.horns === numFiltered);
                 this.setState({
              bData: this.bData,
      });
      }
    }
        render() {
        return (
      <>
        <FormofHorns filterByHorns={this.filterByHorns}/>
        {
          this.state.bData.map(item => {

          return <HornedBeast

                handleOpen={this.props.handleOpen}
                keyword={item.keyword}
                description={item.description}
                title={item.title}
                horns={item.horns} 
                image_url={item.image_url}

          />
          })
        }
      </>
    )
  }
}

export default Main;