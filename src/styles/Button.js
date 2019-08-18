import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  width: ${props => props.hidden ? '0px' : 'initial'};
  border: none;
  border-radius: 5px;
  padding: ${props => props.hidden ? '8px 0px' : '8px 15px'};
  overflow: ${props => props.hidden ? 'hidden' : 'visible'};
  box-sizing: border-box;
  color: ${props => props.theme.white};
  text-transform: capitalize;
  background: ${props => props.theme.mainAccent};
  transition: .3s;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.mainAccentLight};
  }

  > i {
    margin-left: 5px;
  }
`

export default Button
