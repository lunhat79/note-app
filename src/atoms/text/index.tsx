import * as React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

import './styles.css'

interface ITextProps {
  className?: string
  content: string
}

const Text: React.FC<ITextProps> 
= ({ className, content }) => {
  return (
  <p
    className={ClassNames('text', className)}
  >
    {content}
  </p>
)
}

Text.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
}

Text.defaultProps = {
  className: undefined,
}

export default Text
