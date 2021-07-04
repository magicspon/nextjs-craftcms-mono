---
to: packages/<%= package %>/src/pages<%= h.inflection.dasherize(path) %>/<%= h.inflection.dasherize(name) %>.tsx
---
import * as React from 'react'
import { <%= strategy === 'SSG' ? `GetStaticProps` : `GetServerSideProps` %> <% if (paths === true) { %>, GetStaticPaths<% } %> } from 'next'

export interface I<%= h.changeCase.pascalCase(name) %>Props {
	children: React.ReactNode
}

function <%= h.changeCase.pascalCase(name) %>({ children }: I<%= h.changeCase.pascalCase(name) %>Props) : JSX.Element {
  return (
    <div>{children}</div>
  )
}

export default <%= h.changeCase.pascalCase(name) %>

<% if (strategy === 'SSG') { %>
export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {}
	}
}
<% } %>

<% if (paths === true) { %>
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'replace-me' } }
    ],
    fallback: false
  };
}
<% } %>

<%if (strategy === 'SSR') { %>
export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
    props: {}, // will be passed to the page component as props
  }
}
<% } %>
