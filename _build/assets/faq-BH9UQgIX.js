import{M as o}from"./index-CYDpJFld.js";import{b as n,m as i}from"./web-DScAkgcG.js";function t(r){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...r.components};return[n(e.h2,{children:"Icons not working"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Setup a ",n(e.a,{href:"https://www.nerdfonts.com/#home",children:"nerdfont"})," as your terminal's default font."]}}),`
`]}}),`
`,n(e.h2,{children:"Set highlight groups"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"For that you have to add highlight groups in hl_override ( existing ones which NvChad defines), for new ones, use hl_add."}),`
`,n(e.li,{get children(){return["Check ",n(e.a,{href:"https://nvchad.com/docs/config/theming",children:"theming docs"})," for detailed info."]}}),`
`]}}),`
`,n(e.h2,{children:"Customize theme colors"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Use ",n(e.code,{children:"changed_themes"})," option in chadrc. check ",n(e.a,{href:"https://nvchad.com/docs/config/theming#customize_themes",children:"theming docs"})," for detailed info."]}}),`
`]}}),`
`,n(e.h2,{children:"Custom local base46 themes"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["To make a custom local theme thats of the base46 format, you have to create ",n(e.code,{children:"/custom/themes/mytheme.lua"}),". Check ",n(e.a,{href:"https://github.com/NvChad/base46/blob/v2.0/README.md",children:"base46 docs"})," for more info."]}}),`
`]}}),`
`,n(e.h2,{children:"Can I remove base46?"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"No, NvChad hard-depends on base46, just use another config."}),`
`]}}),`
`,n(e.h2,{children:"Mapping Ctrl + o / i keys"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["In Nvchad ",n(e.code,{children:"<Tab> & <S-Tab>"})," are mapped by default and nvim maps to ",n(e.code,{children:"<C-i>"})," if ",n(e.code,{children:"<Tab>"})," key is mapped. ",n(e.a,{href:"https://stackoverflow.com/questions/16209213/vim-jump-forward-with-c-i-doesnt-work-for-me-too-snipmate/16209534#16209534",children:"Check"})]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["To map those keys, you should either disable ",n(e.code,{children:"<Tab>"})," in your custom mappings file or have certain settings in your terminal config, for exampele:  alacritty config :"]}}),`
`]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[`key_bindings:
   - { key: I, mods: Control, chars: `,n(e.span,{className:"hljs-string",children:'"\\x1b[105;6u"'}),` }
`]}})}}),`
`,n(e.h2,{children:"NvChad's color is weird"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["You might be using a terminal that doesn't support true color. This problem is very common for those who use the default MacOS terminal, opt to use ",n(e.a,{href:"https://iterm2.com/",children:"iterm2"})," instead."]}}),`
`]}})]}function l(r={}){const{wrapper:e}={...o(),...r.components};return e?n(e,i(r,{get children(){return n(t,r)}})):t(r)}export{l as default};