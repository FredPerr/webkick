import styled from 'styled-components'

const StyledInput = styled.input`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.gray200};
  height: min-content;
  border-radius: 5px;
`

export default StyledInput
