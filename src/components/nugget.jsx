import { navigate } from 'gatsby'
import yaml from 'js-yaml'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import * as styles from './shortcodes.module.css'
import LayoutContext from './layoutcontext'

function withNuggetPropTypes (Component) {
  Component.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.object)
    ]),
    source: PropTypes.string
  }
  return Component
}

function getYaml (props) {
  const entries = { ...props }
  delete entries.children
  return yaml.dump(entries)
}

function nav (key, tagName = '') {
  if (tagName === 'A') return
  if (key === 'adit') navigate('/')
  else navigate(key)
}

const Nugget = withNuggetPropTypes((props) => {
  const bordered = (props.inseam) ? '' : styles.bordered
  const tabIndex = (props.inseam) ? -1 : 0
  const mainStyle = (props.direction || props.inseam) ? '' : styles.main
  const className = `${bordered} ${mainStyle} ${styles.nugget}`
  const { globalValue } = useContext(LayoutContext)

  const handleClick = (event) => {
    nav(props.slug, event.target.tagName)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      nav(props.slug)
    }
  }

  return (
    <div
      role="button"
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
    >
      <div className={styles.container}>
        {props.children}
        {globalValue.showMetadata && !props.direction && !props.inseam
          ? (<SyntaxHighlighter language="yaml">{getYaml(props)}</SyntaxHighlighter>)
          : null }
      </div>
    </div>
  )
})

export default Nugget
