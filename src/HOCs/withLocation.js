import React from 'react';
import { Location } from '@reach/router';

export default (InputComponent) => (props) => (
  <Location>
    {(locationProps) => (
      <InputComponent locationProps={locationProps} {...props} />
    )}
  </Location>
);
