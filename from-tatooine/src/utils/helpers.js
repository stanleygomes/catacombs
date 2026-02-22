const formatReadingTime = (minutes) => {
  const cups = Math.round(minutes / 5)
  let response = null
  if (cups > 5) {
    response = `${new Array(Math.round(cups / Math.E))
      .fill('🚀')
      .join('')} ${minutes} min read`
  } else {
    response = `${new Array(cups || 1)
      .fill('🤔')
      .join('')} ${minutes} min read`
  }

  return response
}

// `lang` is optional and will default to the current user agent locale
const formatPostDate = (date, lang) => {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date
  }

  const dateChange = new Date(date)
  const args = [
    lang,
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  ].filter(Boolean)

  return dateChange.toLocaleDateString(...args)
}

module.exports = {
  formatReadingTime,
  formatPostDate
}
