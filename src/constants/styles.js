import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { colours } from './';

// Main App
export const MainBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${colours.BODY_COLOR};
`;

export const Hero = styled.div`
  padding-bottom: 455px;
  background-color: ${colours.HERO_BG_COLOR};
`;

// Widget
export const Label = styled.label`
  display: block;
  padding: 0 0 4px;
  color: ${colours.LABEL_COLOUR};
  font-family: Open Sans, Segoe UI, Tahoma, sans-serif;
  font-size: 14px;
  line-height: 1.25rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  font-size: 1rem;
  border: 1px solid ${colours.INPUT_BORDER_DEFAULT};

  box-sizing: border-box;
  border-radius: 4px;
  height: 48px;
  min-width: 49px;
  padding: 8px 16px;
  outline: none;

  :focus {
    border-color: ${colours.INPUT_BORDER_FOCUS};
  }
`;

export const Widget = styled.div`
  padding: 24px;
  margin-top: -367px;
  height: 400px;
  box-sizing: border-box;
  align-self: center;
  background: ${colours.WIDGET_BG};

  ${breakpoint('mobile')`
    width: 100%;
  `}

  ${breakpoint('tablet')`
    width: 480px;
  `}
`;

export const Header = styled.h2`
  font-family: Ubuntu, Open Sans, Segoe UI, Tahoma, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;
