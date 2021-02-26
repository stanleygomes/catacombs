import React from 'react'
import { Link } from 'gatsby'
import Toggle from './Toggle'
import Helmet from 'react-helmet'
import config from '../../config'
import Typography from '../utils/typography'

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
    const { location, title } = this.props
    // eslint-disable-next-line no-undef
    const rootPath = `${__PATH_PREFIX__}/`
    let headerRendered = null

    if (location.pathname === rootPath) {
      headerRendered = (
        <h1 style={{
            ...Typography.scale(0.75),
            marginBottom: 0,
            marginTop: 0
          }}
          translate="no"
        >
          <Link style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'var(--textTitle)'
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      headerRendered = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: 0,
            height: 42, // because
            lineHeight: '2.625rem'
          }}
          translate="no"
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#e9a629'
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }

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
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: Typography.rhythm(24),
            padding: `2.625rem ${Typography.rhythm(3 / 4)}`
          }}
        >
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2.625rem'
            }}
          >
            {this.renderHeader()}
            {this.state.theme !== null ? (
              <Toggle
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
            ) : (
              <div style={{ height: '24px' }} />
            )}
          </header>
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
