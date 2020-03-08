import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  const callbackSpy = jest.fn();
  const defaultProps = {
    id: 'SOMEID',
    callback: callbackSpy,
  };

  const wrap = config => {
    const props = { ...defaultProps, ...config };
    return shallow(<SearchInput {...props} />);
  };

  const makeEvent = value => ({
    currentTarget: { value },
  });

  beforeEach(() => jest.clearAllMocks());

  it('applies default props', () => {
    const wrapper = wrap();
    const wrapperProps = wrapper.props();
    expect(wrapperProps.id).toBe(defaultProps.id);
    expect(wrapperProps.name).toBe(defaultProps.id);
    expect(wrapperProps.value).toBe('');
  });

  it('applies value prop', () => {
    const wrapper = wrap({ defaultValue: 'foo' });
    expect(wrapper.props().value).toBe('foo');
  });

  it('updates value prop on key input', () => {
    const wrapper = wrap();
    expect(wrapper.props().value).toBe('');
    expect(callbackSpy).not.toHaveBeenCalled();

    wrapper.simulate('change', makeEvent('test'));
    expect(wrapper.props().value).toBe('test');
    expect(callbackSpy).toHaveBeenCalled();
  });
});
