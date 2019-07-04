import * as React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.css'

interface IButtonProps {
  className?: string,
  type?: 'button'| 'submit'| 'reset',
  handleClick?: (event: any) => void,
  children:  React.ReactNode | string | undefined
}

const Button:React.FC<IButtonProps> 
= ({
  className,
  children,
  type,
  handleClick,
}) => (
  <button
    onClick={handleClick}
    className={classNames("button", className)}
    type={type}
  >
    {children}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node,
  handleClick: PropTypes.func,
}

Button.defaultProps = {
  className: undefined,
  type: 'button',
  children: undefined,
  handleClick: undefined,
}

export default Button
