import React from 'react';
import PropTypes from 'prop-types';

import { calcTime, convertMoney } from '../helpers';

import { Wrapper, Content } from './MovieBarStyles';

const MovieBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className='column'>
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className='column'>
        <p>Budget: {budget > 0 ? convertMoney(budget) : 'n/a'}</p>
      </div>
      <div className='column'>
        <p>Revenue: {revenue > 0 ? convertMoney(revenue) : 'n/a'}</p>
      </div>
    </Content>
  </Wrapper>
);

MovieBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieBar;
