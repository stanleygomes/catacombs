/* eslint-disable react/prop-types */
import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config'
import { AppContainerStyled, BlogTitleLinkStyled, HeaderStyled, LinkNoDecorationStyled, ThemeToggleContainerStyled, ThemeToggleStyled } from '../style/custom'

class Layout extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      theme: null
    }
  }

  componentDidMount () {
    // eslint-disable-next-line no-underscore-dangle
    this.setState({ theme: window.__theme })
    // eslint-disable-next-line no-underscore-dangle
    window.__onThemeChange = () => {
      // eslint-disable-next-line no-underscore-dangle
      this.setState({ theme: window.__theme })
    }
  }

  renderHeader () {
    const { title } = this.props
    // eslint-disable-next-line no-undef
    let headerRendered = null

    headerRendered = (
      <BlogTitleLinkStyled translate="no">
        <LinkNoDecorationStyled to={'/'}>
          {title}
        </LinkNoDecorationStyled>
      </BlogTitleLinkStyled>
    )

    return headerRendered
  }

  render () {
    const { children } = this.props

    return (
      <div
        style={{
          color: 'var(--textNormal)',
          background: 'var(--bg)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
          minHeight: '100vh'
        }}
      >
        <Helmet
          meta={[
            {
              name: 'theme-color',
              content: this.state.theme === 'light' ? config.colorTheme.light.color : config.colorTheme.dark.color
            }
          ]}
        />
        <AppContainerStyled>
          <HeaderStyled>
            {this.renderHeader()}
            {this.state.theme !== null ? (
              <ThemeToggleContainerStyled>
                <ThemeToggleStyled
                  icons={{
                    checked: (<React.Fragment />),
                    unchecked: (<React.Fragment />)
                  }}
                  checked={this.state.theme === 'dark'}
                  onChange={(event) => {
                    // eslint-disable-next-line no-underscore-dangle
                    window.__setPreferredTheme(
                      event.target.checked ? 'dark' : 'light'
                    )
                  }}
                />
              </ThemeToggleContainerStyled>
            ) : (
              <div style={{ height: '24px' }} />
            )}
          </HeaderStyled>
          {children}
        </AppContainerStyled>
      </div>
    )
  }
}

export default Layout
