import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

class RecommendationSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recType: ""
    };

    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(type) {
    this.setState({ recType: type });
  }

  render() {
    let recType = this.state.recType;

    return (
      <div >
        <RadioGroup name="rec-type" selectedValue={this.state.recType} onChange={this.handleRadioChange}>
          <Radio value="Restaurants" />Restaurants
          <Radio value="Lodging" />Lodging
          <Radio value="Attractions" />Attractions
        </RadioGroup>
      </div>
    )
  }

}

export default RecommendationSelect;
