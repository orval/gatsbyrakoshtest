const React = require('react')

const HeadComponents = [
  // eslint-disable-next-line
  <title key='title'>my-mine</title>
]

const HtmlAttributes = {
  lang: 'en'
}

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}
