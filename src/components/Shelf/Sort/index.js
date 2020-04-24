import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateSort } from '../../../services/sort/actions';
import Selectbox from '../../Selectbox';

const sortBy = [
  { value: '', label: 'Seleccione' },
  { value: 'lowestprice', label: 'De menor a mayor' },
  { value: 'highestprice', label: 'De mayor a menor' }
];

const Sort = ({ updateSort, sort }) => (
  <div className="sort">
    Ordenar por
    <Selectbox options={sortBy} handleOnChange={value => updateSort(value)} />
  </div>
);

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);
