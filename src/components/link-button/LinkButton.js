import React from 'react'
import { Link } from 'react-router-dom'

import './LinkButton.scss'

const LinkButton = ({ children, to }) => {
    return (
      <Link to={to} className="link-button">{children}</Link>
    )
}

export default LinkButton
