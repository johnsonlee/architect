import type { SidebarConfig } from "@vuepress/theme-default";

import * as en_US from './en'
import * as zh_CN from './zh'

const langs = {
  en: en_US.default,
  zh: zh_CN.default,
}

const getSidebar = (lang: string): SidebarConfig => {
  const strings = langs[lang]
  const $ = (key: string) => strings[key] ?? key

  return {
    [`/${lang}/`]: [],
    [`/${lang}/guide/`]: [
      {
        text: $('sidebar.guide'),
        children: [
          `/${lang}/guide/`,
        ],
      },
    ],
  } as SidebarConfig
}

export const en = getSidebar('en')
export const zh = getSidebar('zh')
