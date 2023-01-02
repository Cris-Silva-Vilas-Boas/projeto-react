import styled, {keyframes} from 'styled-components';

const animate = keyframes`
 5% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  height: 70vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  animation: ${animate} .5s;
  border: 8px solid ${props => props.theme.color.warning};
  border-left-color:${props => props.theme.color.white};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
` 