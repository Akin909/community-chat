import styled from 'styled-components';

export const UserList = styled.ul`
  width: 30%;
  height: auto;
  background-color: ${props => props.theme.background};
  box-shadow: 0 1px 2px grey;
  margin: 1rem;
  color: ${props => props.theme.color};
  font-family:${props => props.theme.font};
  list-style-type: none;
  padding: 0.5rem;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AllMessages = styled.div`
  margin-top: 1rem;
  width: 90%;
  box-shadow: 0 1px 2px grey;
  height: 30rem;
  background: white;
`;
