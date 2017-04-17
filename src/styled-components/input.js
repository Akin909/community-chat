import styled from 'styled-components';

const Input = styled.input`
  color: ${props => props.theme.main} 
  width: ${props => (props.button ? '40%' : '80%')};
  height: 2rem;
  margin: 1rem;
  font-size: 1.3rem;
  box-shadow: 0px 1px 2px palevioletred;
  border: 0;
  outline: 0;
  padding: 0.3rem;
`;

export default Input;
