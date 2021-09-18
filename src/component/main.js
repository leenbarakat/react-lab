import { React, Component } from "react";
import HornedBeast from "./HornedBeast";

class Main extends Component {
  render() {
    return (
      <>
        {
          this.props.animalData.map(element=>{
            return <HornedBeast
              title={element.title}
              keyword={element.keyword}
              image_url={element.image_url}
              description={element.description}
              horns={element.horns}
            />
          })
        }
      </>
    )
  }
}

export default Main;