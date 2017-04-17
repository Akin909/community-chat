import styled from 'styled-components';

const Form = styled.form`
  color: ${props => props.theme.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
  height: 100%;
  border: ${props => props.theme.main};
  font-family: ${props => props.theme.font};
  font-size: 1.3rem;
  `;

export default Form;
