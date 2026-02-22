import { supportedLanguages } from './../../i18n'
import whitelist from './whitelist'

// This is kind of a mess for some languages.
// Try to be as short as possible.
// Make sure you use a real code (e.g. "ja", not "jp").
// Some resources:
// http://www.rfc-editor.org/rfc/bcp/bcp47.txt
// https://www.w3.org/International/articles/language-tags/
// https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
// https://discuss.httparchive.org/t/what-are-the-invalid-uses-of-the-lang-attribute/1022

export const codeToLanguage = code => supportedLanguages[code].replace(/ /g, ' ' /* nbsp */)

export const loadFontsForCode = (code) => {
  switch (code) {
    case 'es':
    case 'pt-br':
    default:
      break
  }
}

// TODO: the curried signature is weird.
export const createLanguageLink = (slug, lang) => {
  const rawSlug = slug.replace(`${lang}/`, '')
  const response = (targetLang) => {
    const target = targetLang === 'en' ? rawSlug : `${targetLang}${rawSlug}`
    return target
  }

  return response
}

export const replaceAnchorLinksByLanguage = (html, code) => {
  // Match any link using https://regexr.com/4airl
  // eslint-disable-next-line no-useless-escape
  const matches = html.match(/https?:\/\/(www)?[^\/\s)"?]+/gm)

  // Return same html if no matches were found
  // or code isn't supported
  if (!matches || !supportedLanguages[code]) {
    return html
  }

  let htmlReplacement = html

  matches.forEach((url) => {
    // Replace to locale url if and only if exists in whitelist
    // and has code registered
    if (whitelist[url] && whitelist[url][code]) {
      htmlReplacement = htmlReplacement.replace(url, whitelist[url][code])
    }
  })

  return htmlReplacement
}
