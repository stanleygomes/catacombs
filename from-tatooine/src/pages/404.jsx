import React from 'react'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

class NotFoundPage extends React.Component {
  render () {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>Not Found</h1>
          <p>I haven’t written this post yet. Will you help me write it?</p>
          <img src="https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif" />
          <div>
            <a href="/">Go to home page</a>
          </div>
        </main>
      </Layout>
    )
  }
}

NotFoundPage.propTypes = {
  location: PropTypes.string
}

export default NotFoundPage
