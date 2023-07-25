import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(1)};
  }
`;

export const ContactName = styled.p`
  margin: 0;
  font-size: ${props => props.theme.spacing(2)};
  line-height: 1.5;
`;

export const ButtonDeleting = styled.button`
  padding: 4px 24px;
  font-size: ${props => props.theme.spacing(2)};
  font-weight: 500;
  line-height: 1.2;
  border: 1px solid black;
  border-radius: ${props => props.theme.spacing(1)};
  cursor: pointer;
  background: #8e8e99;
  color: black;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    border-color 0.25s ease-in-out;
  box-shadow: 0 14px 28px rgba(6, 2, 4, 0.25), 0 10px 10px rgba(3, 5, 8, 0.22);

  &:hover,
  &:focus {
    background: honeydew;
    color: #3e3e40;
    border: 1px solid #1d1de3;
  }
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  cursor: pointer;
  color: chocolate;
  transition: color 0.25s ease-in-out;

  &:hover,
  &:focus {
    color: darkslateblue;
  }

  @media screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
`;
