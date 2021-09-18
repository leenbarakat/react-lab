import { React, Component } from 'react';
import { Form } from 'react-bootstrap'

class FormofHorns extends Component {

  filterByHorns = (e) => {
    this.props.filterByHorns(e);
  }
  render() {
      return (
        <>
          <Form>
            <Form.Label>View Based on Number of Horns</Form.Label>
            <select name="horns" id="horns" onChange={this.filterByHorns}>
              <option value="0">start filtering!</option>
              <option value="1">only 1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">more+</option>
            </select>
          </Form>
        </>
      )
  }
}

export default FormofHorns;