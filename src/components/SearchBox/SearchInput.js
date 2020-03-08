import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { SearchInput } from './styles';

const InputComponent = ({ id, callback, defaultValue, ...rest }) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback(
    ({ currentTarget }) => {
      const value = currentTarget.value;
      // TODO: trim value
      setValue(value);
      if (value.length > 1) callback(value);
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
      aria-describedby={`${id}-description`}
      aria-controls={`${id}-results`}
      aria-autocomplete="list"
      aria-required="true"
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
