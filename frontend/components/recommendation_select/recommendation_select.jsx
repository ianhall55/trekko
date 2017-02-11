import React, { Component } from 'react';

class RecommendationSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recType: "Restaurants"
    };
  }

  handleRadioChange(e) {
    e.preventDefault();
    debugger;
    let val = e.target.value;
    if (val === "Restaurants") {
      this.setState({ recType: "Restaurants" })
    } else if (val === "Lodging") {
      this.setState({ recType: "Lodging" })
    } else if (val === "Attractions"){
      this.setState({ recType: "Attractions" })
    }
  }

  render() {
    debugger;
    let recType = this.state.recType;
    return (
      <div >
        <input type="radio" name="rec-type" value="Restaurants" checked={recType === "Restaurants"}
          onChange={ this.handleRadioChange.bind(this) } />Restaurants
        <input type="radio" name="rec-type" value="Lodging" checked={recType === "Lodging"}
          onChange={ this.handleRadioChange.bind(this) } />Lodging
        <input type="radio" name="rec-type" value="Attractions" checked={recType === "Attractions"}
          onChange={ this.handleRadioChange.bind(this) } />Attractions
      </div>
    )
  }

}

export default RecommendationSelect;
