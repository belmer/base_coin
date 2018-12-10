import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.props.message}</h1>
    }

    return this.props.children //eslint-disable-line
  }
}

ErrorBoundary.propTypes = {
  message: PropTypes.string
}
export default ErrorBoundary
