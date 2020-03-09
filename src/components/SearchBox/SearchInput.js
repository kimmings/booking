import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { SearchInput } from '../../constants/styles';

const InputComponent = ({ id, callback, defaultValue, ...rest }) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback(
    ({ currentTarget }) => {
      const value = currentTarget.value;
      // TODO: trim value
      setValue(value);
      callback(value);
    },
    [setValue, callback]
  );

  return (
    <SearchInput
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      type="text"
      {...rest}
    />
  );
};

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};

InputComponent.defaultProps = {
  defaultValue: '',
};

export default InputComponent;
