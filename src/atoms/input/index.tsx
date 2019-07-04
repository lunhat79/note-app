import * as React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

import './styles.css'

interface IInputProps {
  className?: string,
  type: 'text' | 'password' | 'email' | undefined,
  name?: string,
  value?: string,
  placeholder?:string,
  maxLength?: number,
  autoComplete?: boolean,
  isError?: boolean,
  handleChange?: (event: any) => void 
}

const Input: React.FC<IInputProps> 
= (
  {
  className,
  type,
  name,
  value,
  placeholder,
  maxLength,
  autoComplete,
  isError,
  handleChange,
}
) => {
  const props = {
    className: ClassNames('input', isError?'inputError' :'', className), 
    type,
    name,
    value,
    placeholder,
    maxLength,
    autoComplete: autoComplete ? "autoComplete" : undefined ,
    onChange: handleChange,
  }

  return (
    <input {...props} />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  autoComplete: PropTypes.bool,
  isError: PropTypes.bool,
  handleChange: PropTypes.func
}

Input.defaultProps = {
  className: undefined,
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  maxLength: 300,
  autoComplete: false,
  isError: false,
  handleChange: () => {}
}

export default Input
