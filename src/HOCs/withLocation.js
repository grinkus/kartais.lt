import React from 'react';
import { Location } from '@reach/router';

const withLocation = (InputComponent) => (props) => (
  <Location>
    {(locationProps) => (
      <InputComponent locationProps={locationProps} {...props} />
    )}
  </Location>
);

export default withLocation;
