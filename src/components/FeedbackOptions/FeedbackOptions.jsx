import React from 'react';
import { SectionButtons, ButtonEl } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <SectionButtons>
      {options.map(name => (
        <ButtonEl
          key={name}
          type="button"
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </ButtonEl>
      ))}
    </SectionButtons>
  );
};

export default FeedbackOptions;
