import * as React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

import './styles.css'

interface ITextAreaProps {
  className?: string,
  name?: string,
  value?: string,
  placeholder?:string,
  maxLength?: number,
  handleChange?: (event: any) => void 
}

const TextArea: React.FC<ITextAreaProps> 
= ({ className, name, value, placeholder, maxLength, handleChange }) => (
  <textarea
    className={ClassNames("textArea", className)}
    name={name}
    value={value}
    placeholder={placeholder}
    maxLength={maxLength}
    onChange={handleChange}
  />
)

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  handleChange: PropTypes.func,
}

TextArea.defaultProps = {
  className: undefined,
  value: undefined,
  placeholder: undefined,
  maxLength: 600,
  handleChange: () => {},
}

export default TextArea
