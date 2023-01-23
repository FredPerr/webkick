import styled from 'styled-components'

const StyledOption = styled.option`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.gray200};
  height: min-content;
`

export default StyledOption
