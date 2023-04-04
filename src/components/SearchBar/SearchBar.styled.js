import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const DebounceTextInput = styled(DebounceInput)`
  width: 380px;
  padding: 5px 10px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;
