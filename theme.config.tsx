import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><img src="https://raw.githubusercontent.com/simonepriuli/imongo/622fcca6ef66de9140fa4287147ae08b74b7d46a/static/icon.svg" alt="IMongo logo" height={28} width={28}/></span>,
  project: {
    link: 'https://github.com/simonepriuli/imongo',
  },
  docsRepositoryBase: 'https://github.com/simonepriuli/imongo',
  footer: {
    text: 'IMongo is protected by M.I.T lincense.',
  },
}

export default config
