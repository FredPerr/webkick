import styled from 'styled-components'

const StyledInput = styled.input`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 16px;
  ${({ theme }) => `
  ${theme.media.smMax} {font-size: ${theme.fontSizes.md}px;}
  `}
  background-color: ${({ theme }) => theme.colors.gray200};
  height: min-content;
  border-radius: 5px;
  width: 100%;
`

export default StyledInput
