import React from 'react';
import { Location } from '@reach/router';

export default (InputComponent) => {
  console.log('wrap', InputComponent);
  return (props) => {
    console.log('loc pr', props);
    return (
      <Location>
        {(locationProps) => (
          <InputComponent locationProps={locationProps} {...props} />
        )}
      </Location>
    );
  };
};
