"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2464],{77160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"auto-docs/utilities/getKeyPathsWithNonUndefinedValues/functions/getKeyPathsWithNonUndefinedValues","title":"getKeyPathsWithNonUndefinedValues","description":"Admin Docs","source":"@site/docs/auto-docs/utilities/getKeyPathsWithNonUndefinedValues/functions/getKeyPathsWithNonUndefinedValues.md","sourceDirName":"auto-docs/utilities/getKeyPathsWithNonUndefinedValues/functions","slug":"/auto-docs/utilities/getKeyPathsWithNonUndefinedValues/functions/getKeyPathsWithNonUndefinedValues","permalink":"/docs/auto-docs/utilities/getKeyPathsWithNonUndefinedValues/functions/getKeyPathsWithNonUndefinedValues","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/auto-docs/utilities/getKeyPathsWithNonUndefinedValues/functions/getKeyPathsWithNonUndefinedValues.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"defaultGraphQLConnectionArgumentsSchema","permalink":"/docs/auto-docs/utilities/defaultGraphQLConnection/variables/defaultGraphQLConnectionArgumentsSchema"},"next":{"title":"isNotNullish","permalink":"/docs/auto-docs/utilities/isNotNullish/functions/isNotNullish"}}');var s=n(86106),d=n(61079);const a={},l=void 0,o={},c=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"__namedParameters",id:"__namedparameters",level:3},{value:"keyPaths",id:"keypaths",level:4},{value:"object",id:"object",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}];function r(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/",children:"Admin Docs"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"function-getkeypathswithnonundefinedvalues",children:"Function: getKeyPathsWithNonUndefinedValues()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"getKeyPathsWithNonUndefinedValues"}),"<",(0,s.jsx)(t.code,{children:"T"}),">(",(0,s.jsx)(t.code,{children:"__namedParameters"}),"): ",(0,s.jsx)(t.code,{children:"Paths"}),"<",(0,s.jsx)(t.code,{children:"T"}),">[]"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Defined in: ",(0,s.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/c34688c69eb12a5eb721ebc8a0cd60b53e5fbf81/src/utilities/getKeyPathsWithNonUndefinedValues.ts#L54",children:"src/utilities/getKeyPathsWithNonUndefinedValues.ts:54"})]}),"\n",(0,s.jsx)(t.p,{children:"This function takes in a javascript object and a list of key paths within that object as arguments and outputs all paths amongst those key paths that correspond to a non-undefined value."}),"\n",(0,s.jsx)(t.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"T"})," ",(0,s.jsx)(t.em,{children:"extends"})," ",(0,s.jsx)(t.code,{children:"Record"}),"<",(0,s.jsx)(t.code,{children:"string"}),", ",(0,s.jsx)(t.code,{children:"unknown"}),">"]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.h3,{id:"__namedparameters",children:"__namedParameters"}),"\n",(0,s.jsx)(t.h4,{id:"keypaths",children:"keyPaths"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Paths"}),"<",(0,s.jsx)(t.code,{children:"T"}),">[]"]}),"\n",(0,s.jsx)(t.h4,{id:"object",children:"object"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"T"})}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Paths"}),"<",(0,s.jsx)(t.code,{children:"T"}),">[]"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'const object = {\n\tfield1: undefined,\n\tfield2: "value2",\n\tfield3: undefined,\n\tfield4: null,\n\tfield5: {\n\t\tfield6: "value6",\n\t},\n\tfield7: {\n\t\tfield8: {\n\t\t\t\tfield9: "value9",\n\t\t\t\tfield10: undefined,\n\t\t\t\tfield11: null\n\t\t\t}\n\t},\n\tfield12: [\n\t\t"value12",\n\t\tundefined,\n\t\tnull,\n\t\t{\n\t\t\tfield13: "value13"\n\t\t}\n\t]\n}\n\nconst keyPaths = getKeyPathsWithNonUndefinedValues([\n\t["field1"],\n\t["field2"],\n\t["field4"]\n]);\nconst keyPaths = getKeyPathsWithNonUndefinedValues([\n\t["field3"],\n\t["field5", "field6"],\n\t["field7", "field8", "field9"],\n\t["field7", "field8", "field10"],\n\t["field7", "field8", "field11"]\n]);\nconst keyPaths = getKeyPathsWithNonUndefinedValues([\n\t["field12", 0],\n\t["field12", 1],\n\t["field12", 2],\n\t["field12", 3, "field13"]\n]);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},61079:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(7378);const s={},d=i.createContext(s);function a(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);