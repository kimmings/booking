import styled from 'styled-components';
import { WIDGET_BG } from '../../constants';

export const Label = styled.label`
  display: block;
  padding: 0 0 4px;
  color: #444;
  font-family: Open Sans, Segoe UI, Tahoma, sans-serif;
  font-size: 14px;
  line-height: 1.25rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  font-size: 1rem;
  border: 1px solid #c8ae5b;

  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  min-width: 49px;
  padding: 8px 16px;
  outline: none;

  :focus {
    border-color: #0f6193;
  }
`;

export const Widget = styled.div`
  width: 480px;
  padding: 24px;
  margin-top: -313px;
  height: 400px;
  box-sizing: border-box;
  align-self: center;
  margin-right: 566px;
  background: ${WIDGET_BG};
`;

export const Header = styled.h2`
  font-family: Ubuntu, Open Sans, Segoe UI, Tahoma, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;
