import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';
import { recTypeChange } from '../../actions';

class RecommendationSelect extends Component {
  constructor(props) {
    super(props);

    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(type) {
    this.props.recTypeChange(type);
  }

  render() {
    let recType = this.props.recommendationType;

    return (
      <div >
        <RadioGroup name="rec-type" selectedValue={recType} onChange={this.handleRadioChange}>
          <Radio value="Restaurants" />Restaurants
          <Radio value="Lodging" />Lodging
          <Radio value="Attractions" />Attractions
        </RadioGroup>
      </div>
    )
  }

}

const mapStateToProps = state => {
  const recommendationType = state.recommendations.recommendationType;

  return { recommendationType };
}

export default connect(
  mapStateToProps,
  { recTypeChange }
)(RecommendationSelect);
