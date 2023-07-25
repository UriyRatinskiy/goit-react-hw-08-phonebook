import styled from 'styled-components';

export const PhonebookHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  opacity: 0.9;
  min-height: ${props => props.theme.spacing(4.5)};
  padding: 12px 16px;
  color: #ffffff;
  background-color: #8e8e99;

  @media screen and (min-width: 768px) {
    & {
      padding: 12px 84px;
    }
  }
`;
