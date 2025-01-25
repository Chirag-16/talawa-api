"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9768],{81576:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"auto-docs/graphql/pubsub/type-aliases/PubSub","title":"PubSub","description":"Admin Docs","source":"@site/docs/auto-docs/graphql/pubsub/type-aliases/PubSub.md","sourceDirName":"auto-docs/graphql/pubsub/type-aliases","slug":"/auto-docs/graphql/pubsub/type-aliases/PubSub","permalink":"/docs/auto-docs/graphql/pubsub/type-aliases/PubSub","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/auto-docs/graphql/pubsub/type-aliases/PubSub.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"subscriptionChatMessageCreateInputSchema","permalink":"/docs/auto-docs/graphql/inputs/SubscriptionChatMessageCreateInput/variables/subscriptionChatMessageCreateInputSchema"},"next":{"title":"PubSubPublishArgsByKey","permalink":"/docs/auto-docs/graphql/pubsub/type-aliases/PubSubPublishArgsByKey"}}');var t=r(86106),n=r(61079);const i={},l=void 0,c={},d=[{value:"Type declaration",id:"type-declaration",level:2},{value:"publish()",id:"publish",level:3},{value:"Type Parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"event",id:"event",level:5},{value:"payload",id:"payload",level:6},{value:"topic",id:"topic",level:6},{value:"callback?",id:"callback",level:5},{value:"Returns",id:"returns",level:4},{value:"subscribe()",id:"subscribe",level:3},{value:"Type Parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"topics",id:"topics",level:5},{value:"Returns",id:"returns-1",level:4}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/",children:"Admin Docs"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h1,{id:"type-alias-pubsub",children:"Type Alias: PubSub"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"PubSub"}),": ",(0,t.jsx)(s.code,{children:"object"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Defined in: ",(0,t.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/c34688c69eb12a5eb721ebc8a0cd60b53e5fbf81/src/graphql/pubsub.ts#L8",children:"src/graphql/pubsub.ts:8"})]}),"\n",(0,t.jsx)(s.p,{children:"Type of the publish and subscribe module used for publishing and subscribing to talawa events."}),"\n",(0,t.jsx)(s.h2,{id:"type-declaration",children:"Type declaration"}),"\n",(0,t.jsx)(s.h3,{id:"publish",children:"publish()"}),"\n",(0,t.jsx)(s.p,{children:"This method is used to publish an event."}),"\n",(0,t.jsx)(s.h4,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"TKey"})," ",(0,t.jsx)(s.em,{children:"extends"})," ",(0,t.jsx)(s.code,{children:"`chats.${string}:chat_messages::create`"})]}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.h5,{id:"event",children:"event"}),"\n",(0,t.jsx)(s.h6,{id:"payload",children:"payload"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/auto-docs/graphql/pubsub/type-aliases/PubSubPublishArgsByKey",children:(0,t.jsx)(s.code,{children:"PubSubPublishArgsByKey"})}),"[",(0,t.jsx)(s.code,{children:"TKey"}),"]"]}),"\n",(0,t.jsx)(s.h6,{id:"topic",children:"topic"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"TKey"})}),"\n",(0,t.jsx)(s.h5,{id:"callback",children:"callback?"}),"\n",(0,t.jsxs)(s.p,{children:["() => ",(0,t.jsx)(s.code,{children:"void"})]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"void"})}),"\n",(0,t.jsx)(s.h3,{id:"subscribe",children:"subscribe()"}),"\n",(0,t.jsx)(s.p,{children:"This method is used to subscribe to events."}),"\n",(0,t.jsx)(s.h4,{id:"type-parameters-1",children:"Type Parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"TKey"})," ",(0,t.jsx)(s.em,{children:"extends"})," ",(0,t.jsx)(s.code,{children:"`chats.${string}:chat_messages::create`"})]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(s.h5,{id:"topics",children:"topics"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"TKey"})," | ",(0,t.jsx)(s.code,{children:"TKey"}),"[]"]}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"Readable"})," & ",(0,t.jsx)(s.code,{children:"AsyncIterableIterator"}),"<",(0,t.jsx)(s.a,{href:"/docs/auto-docs/graphql/pubsub/type-aliases/PubSubPublishArgsByKey",children:(0,t.jsx)(s.code,{children:"PubSubPublishArgsByKey"})}),"[",(0,t.jsx)(s.code,{children:"TKey"}),"]>>"]})]})}function o(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},61079:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var a=r(7378);const t={},n=a.createContext(t);function i(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);