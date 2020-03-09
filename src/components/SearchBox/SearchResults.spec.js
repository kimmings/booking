import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
  const results = [
    {
      bookingId: 1,
      index: 1,
      name: 'foo',
    },
    {
      bookingId: 2,
      index: 2,
      name: 'barr',
    },
  ];
  const defaultProps = {
    id: 'SOMEID',
    results: [],
  };

  const wrap = config => {
    const props = { ...defaultProps, ...config };
    return shallow(<SearchResults {...props} />);
  };

  it('sets props', () => {
    const wrapper = wrap();
    const wrapperProps = wrapper.props();
    expect(wrapperProps.id).toBe(`${defaultProps.id}-results`);
    expect(wrapperProps['aria-expanded']).toBe(false);
  });

  it('applies results', () => {
    const wrapper = wrap({ results });
    const children = wrapper.children();
    expect(children.length).toBe(results.length);
    expect(
      wrapper
        .find('div')
        .at(0)
        .text()
    ).toBe('foo');

    expect(
      wrapper
        .find('div')
        .at(1)
        .text()
    ).toBe('barr');
  });
});
