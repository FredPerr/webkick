import styled from 'styled-components'

const StyledTextField = styled.textarea.attrs((props) => ({ css: props.css }))`
  outline: none;
  border: none;
  display: flex;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.gray200};
  height: 100%;
  width: 100%;
  border-radius: 5px;
  resize: vertical;
  ${({ theme }) => `
  ${theme.media.smMax} {font-size: ${theme.fontSizes.md}px;}
  `}
`

export default StyledTextField
