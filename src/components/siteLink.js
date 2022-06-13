import * as React from 'react'

const SiteLink = ({ displayText, linkDestination }) => {
  return (
	<a href={`${linkDestination}`} target="_blank" rel="noreferrer">{displayText}</a>
  )
}

export default SiteLink