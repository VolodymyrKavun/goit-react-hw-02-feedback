import React from 'react';
// import css from './Statistics.css';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <section>
    <List>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </List>
  </section>
);
export default Statistics;
