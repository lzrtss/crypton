import styled from 'styled-components';

export const Message = styled.p`
  margin-bottom: 12px;
  text-align: ${props => props.align || 'center'};
  font-size: ${props => props.fontSize || '18px'};
  color: ${props => props.color || 'inherit'};
`;
