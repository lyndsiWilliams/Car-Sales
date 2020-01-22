import React from 'react';
import { connect } from 'react-redux';

// Action
import { addItem } from '../actions/carActions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return{
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { addItem })(AdditionalFeature);
