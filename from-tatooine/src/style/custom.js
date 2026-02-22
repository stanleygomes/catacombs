import styled from 'styled-components'
import { Link } from 'gatsby'
import Toggle from '../components/Toggle'

export const ListItemTitleStyled = styled.h3`
  font-family: 'Montserrat', 'sans-serif';
  font-size: 30px;
  margin-bottom: 10px;

  :hover {
    text-decoration: underline;
  }
`

export const LinkNoDecorationStyled = styled(Link)`
  text-decoration: none;
`

export const BlogTitleLinkStyled = styled.h3`
  font-family: 'Montserrat', 'sans-serif';
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 0;
  color: #e9a629;
`

export const BioStyled = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
`

export const ProfilePicStyled = styled.img`
  margin-top: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

export const AppContainerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 750px;
  padding: 50px;
`

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

export const ThemeToggleContainerStyled = styled.div`
  padding-top: 20px
`

export const ThemeToggleStyled = styled(Toggle)`
`
