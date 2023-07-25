import styled from 'styled-components';
import { RiLogoutBoxLine } from 'react-icons/ri';

export const ProfileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    & {
      margin-left: auto;
    }
  }
`;

export const ProfileEmail = styled.p`
  margin: 0;
  font-size: ${props => props.theme.spacing(2.5)};
  font-weight: 700;
  line-height: 1.5;
  color: black;

  @media screen and (min-width: 768px) {
    & {
      margin: 0 36px 0 0;
    }
  }
`;

export const LogOutButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    & {
      display: block;
      padding: 4px 24px;
      font-size: ${props => props.theme.spacing(2.5)};
      font-weight: 700;
      line-height: 1.2;
      border: 1px solid black;
      border-radius: ${props => props.theme.spacing(3)};
      cursor: pointer;
      background: #8e8e99;
      color: black;
      transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
        border-color 0.25s ease-in-out,
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 14px 28px rgba(6, 2, 4, 0.25),
        10px 10px 10px rgba(3, 5, 8, 0.22);

      &:hover,
      &:focus {
        background: honeydew;
        color: #3e3e40;
        border: 1px solid #1d1de3;
        transform: scale(1.1);
      }
    }
  }
`;

export const LogOutIcon = styled(RiLogoutBoxLine)`
  cursor: pointer;
  color: black;
  transition: color 0.25s ease-in-out;

  &:hover,
  &:focus {
    color: springgreen;
  }

  @media screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
`;
