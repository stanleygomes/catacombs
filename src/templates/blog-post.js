/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Panel from '../components/Panel'
import { formatPostDate, formatReadingTime } from '../utils/helpers'
import Typography from '../utils/typography'
import {
  codeToLanguage,
  createLanguageLink,
  loadFontsForCode,
  replaceAnchorLinksByLanguage
} from '../utils/i18n'

const GITHUB_USERNAME = 'stanleygomes'
const GITHUB_REPO_NAME = 'from-tatooine'
const systemFont = `system-ui, -apple-system, BlinkMacSystemFont,
  'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
  'Droid Sans', 'Helvetica Neue', sans-serif`

class Translations extends React.Component {
  render () {
    const {
      translations,
      lang,
      languageLink
  } = this.props

    const readerTranslations = translations.filter(lang => lang !== 'ru')
    const hasRussianTranslation = translations.indexOf('ru') !== -1

    return (
      <div className="translations">
        <Panel style={{ fontFamily: systemFont }}>
          {translations.length > 0 && (
            <span>
              {hasRussianTranslation && (
                <span>
                  Originally written in:{' '}
                  {lang === 'en' ? (
                    <b>{codeToLanguage('en')}</b>
                  ) : (
                    <Link to={languageLink('en')}>English</Link>
                  )}
                  {' • '}
                  {lang === 'ru' ? (
                    <b>Русский (авторский перевод)</b>
                  ) : (
                    <Link to={languageLink('ru')}>
                      Русский (авторский перевод)
                    </Link>
                  )}
                  <br />
                  <br />
                </span>
              )}
              <span>Translated by readers into: </span>
              {readerTranslations.map((l, i) => (
                <React.Fragment key={l}>
                  {l === lang ? (
                    <b>{codeToLanguage(l)}</b>
                  ) : (
                    <Link to={languageLink(l)}>{codeToLanguage(l)}</Link>
                  )}
                  {i === readerTranslations.length - 1 ? '' : ' • '}
                </React.Fragment>
              ))}
            </span>
          )}
        </Panel>
      </div>
    )
  }
}

Translations.propTypes = {
  translations: PropTypes.array,
  lang: PropTypes.string,
  languageLink: PropTypes.func,
  editUrl: PropTypes.string
}

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const {
      previous,
      next,
      slug,
      translatedLinks
    } = this.props.pageContext
    let {
      translations
    } = this.props.pageContext
    const lang = post.fields.langKey

    // Replace original links with translated when available.
    let html = post.html

    // Replace original anchor links by lang when available in whitelist
    // see utils/whitelist.js
    html = replaceAnchorLinksByLanguage(html, lang)

    translatedLinks.forEach((link) => {
      // jeez
      const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

      const translatedLink = `/${lang}${link}`
      html = html.replace(
        new RegExp(`"${escapeRegExp(link)}"`, 'g'), `"${translatedLink}"`
      )
    })

    translations = translations.slice()
    translations.sort((a, b) => (codeToLanguage(a) < codeToLanguage(b) ? -1 : 1))

    loadFontsForCode(lang)
    // TODO: this curried function is annoying
    const languageLink = createLanguageLink(slug, lang)
    const enSlug = languageLink('en')
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${enSlug.slice(
      1,
      enSlug.length - 1
    )}/index${lang === 'en' ? '' : `.${lang}`}.md`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          lang={lang}
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <main>
          <article>
            <header>
              <h1 style={{ color: 'var(--textTitle)' }}>
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  ...Typography.scale(-1 / 5),
                  display: 'block',
                  marginBottom: Typography.rhythm(1),
                  marginTop: Typography.rhythm(-4 / 5)
                }}
              >
                {formatPostDate(post.frontmatter.date, lang)}
                {` • ${formatReadingTime(post.timeToRead)}`}
                <div>
                  <small>Tags: {post.frontmatter.tags}</small>
                </div>
              </p>
              {translations.length > 0 && (
                <Translations
                  translations={translations}
                  editUrl={editUrl}
                  languageLink={languageLink}
                  lang={lang}
                />
              )}
            </header>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <footer>
              <p>
                {/* {' • '} */}
                <a href={editUrl} target="_blank" rel="noopener noreferrer" translate="no">
                  Edit this article on GitHub
                </a>
              </p>
            </footer>
          </article>
        </main>
        <aside>
          <div
            style={{
              margin: '90px 0 40px 0',
              fontFamily: systemFont
            }}
          >
          </div>
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: Typography.rhythm(0.25)
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'var(--pink)'
              }}
              to={'/'}
              translate="no"
            >
              From tatooine
            </Link>
          </h3>
          <Bio />
          <nav>
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0
              }}
            >
              <li>
                {previous && (
                  <Link
                    to={previous.fields.slug}
                    rel="prev"
                    style={{ marginRight: 20 }}
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </aside>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        tags
      }
      fields {
        slug
        langKey
      }
    }
  }
`
