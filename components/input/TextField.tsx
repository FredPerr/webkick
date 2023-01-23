import styled from 'styled-components'

const StyledTextField = styled.textarea`
  outline: none;
  border: none;
  display: flex;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.gray200};
  height: 100%;
  border-radius: 5px;
`

export default StyledTextField
