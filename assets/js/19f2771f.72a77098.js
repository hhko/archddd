"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[302],{3917:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=n(4848),t=n(8453);const l={},i="\uae30\ubcf8 \uc124\uce58",d={id:"infrastructure/postgres/step01/README",title:"\uae30\ubcf8 \uc124\uce58",description:"\ucee8\ud14c\uc774\ub108",source:"@site/docs/05-infrastructure/06-postgres/step01/README.md",sourceDirName:"05-infrastructure/06-postgres/step01",slug:"/infrastructure/postgres/step01/",permalink:"/ArchDdd/docs/infrastructure/postgres/step01/",draft:!1,unlisted:!1,editUrl:"https://github.com/hhko/ArchDdd/tree/main/docs/docs/05-infrastructure/06-postgres/step01/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Postgres",permalink:"/ArchDdd/docs/infrastructure/postgres/"},next:{title:"\ud658\uacbd \uad6c\uc131 \uc790\ub3d9\ud654",permalink:"/ArchDdd/docs/infrastructure/postgres/step02/"}},c={},o=[{value:"\ucee8\ud14c\uc774\ub108",id:"\ucee8\ud14c\uc774\ub108",level:2},{value:"\ucee8\ud14c\uc774\ub108 \ud658\uacbd \uc124\uc815",id:"\ucee8\ud14c\uc774\ub108-\ud658\uacbd-\uc124\uc815",level:3},{value:"\ucee8\ud14c\uc774\ub108 \uad6c\uc131",id:"\ucee8\ud14c\uc774\ub108-\uad6c\uc131",level:3},{value:"\ucee8\ud14c\uc774\ub108",id:"\ucee8\ud14c\uc774\ub108-1",level:2},{value:"Postgre",id:"postgre",level:3},{value:"pgAdmin \uc811\uc18d\ud558\uae30",id:"pgadmin-\uc811\uc18d\ud558\uae30",level:3},{value:"PostgreSQL",id:"postgresql",level:2},{value:"\ud14c\uc774\ube14 \uc0dd\uc131",id:"\ud14c\uc774\ube14-\uc0dd\uc131",level:3},{value:"\ub370\uc774\ud130 Insert &amp; Select",id:"\ub370\uc774\ud130-insert--select",level:3}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"\uae30\ubcf8-\uc124\uce58",children:"\uae30\ubcf8 \uc124\uce58"}),"\n",(0,s.jsx)(r.h2,{id:"\ucee8\ud14c\uc774\ub108",children:"\ucee8\ud14c\uc774\ub108"}),"\n",(0,s.jsx)(r.h3,{id:"\ucee8\ud14c\uc774\ub108-\ud658\uacbd-\uc124\uc815",children:"\ucee8\ud14c\uc774\ub108 \ud658\uacbd \uc124\uc815"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\ud658\uacbd \ubcc0\uc218"}),(0,s.jsx)(r.th,{children:"\uae30\ubcf8 \uac12"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"POSTGRES_USER"}),(0,s.jsx)(r.td,{children:"postgres"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"POSTGRES_PASSWORD"}),(0,s.jsx)(r.td,{children:"postgres"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"POSTGRES_PORT"}),(0,s.jsx)(r.td,{children:"5432"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PGADMIN_PORT"}),(0,s.jsx)(r.td,{children:"5050"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PGADMIN_DEFAULT_EMAIL"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"mailto:pgadmin4@pgadmin.org",children:"pgadmin4@pgadmin.org"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PGADMIN_DEFAULT_PASSWORD"}),(0,s.jsx)(r.td,{children:"admin"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"\ucee8\ud14c\uc774\ub108-\uad6c\uc131",children:"\ucee8\ud14c\uc774\ub108 \uad6c\uc131"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# \uc774\ubbf8\uc9c0 \ub85c\ub4dc\r\ndocker image load -i postgres-12.18.tar\r\ndocker image load -i dpage.pgadmin4-8.5.tar\r\ndocker image ls\r\n\r\n# \ucee8\ud14c\uc774\ub108 \uc2e4\ud589\r\ndocker-compose up -d\r\n\r\n# \ucee8\ud14c\uc774\ub108 \ubcfc\ub968 \ud655\uc778\r\ndocker volume ls\r\n\r\n# \ucee8\ud14c\uc774\ub108 \uc911\uc9c0\r\ndocker-compose down         # \ucee8\ud14c\uc774\ub108 \uc911\uc9c0\r\ndocker-compose down -v      # \ucee8\ud14c\uc774\ub108 \uc911\uc9c0, \ubcfc\ub968 \uc0ad\uc81c\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.h2,{id:"\ucee8\ud14c\uc774\ub108-1",children:"\ucee8\ud14c\uc774\ub108"}),"\n",(0,s.jsx)(r.h3,{id:"postgre",children:"Postgre"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["localhost:5432","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\ud3ec\ud2b8: 5432"}),"\n",(0,s.jsx)(r.li,{children:"\uacc4\uc815: postgres"}),"\n",(0,s.jsx)(r.li,{children:"\uc554\ud638: postgres"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"pgadmin-\uc811\uc18d\ud558\uae30",children:"pgAdmin \uc811\uc18d\ud558\uae30"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"http://localhost:5050",children:"http://localhost:5050"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\uacc4\uc815: ",(0,s.jsx)(r.a,{href:"mailto:pgadmin4@pgadmin.org",children:"pgadmin4@pgadmin.org"})]}),"\n",(0,s.jsx)(r.li,{children:"\uc554\ud638: admin"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(5258).A+"",width:"1252",height:"603"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.h2,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,s.jsx)(r.h3,{id:"\ud14c\uc774\ube14-\uc0dd\uc131",children:"\ud14c\uc774\ube14 \uc0dd\uc131"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE links (\r\n  id SERIAL PRIMARY KEY,\r\n  url VARCHAR(255) NOT NULL,\r\n  name VARCHAR(255) NOT NULL,\r\n  description VARCHAR (255),\r\n  last_update DATE\r\n);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\ub370\uc774\ud130-insert--select",children:"\ub370\uc774\ud130 Insert & Select"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"## 1. insert\r\nINSERT INTO links (url, name)\r\nVALUES('https://www.postgresqltutorial.com','PostgreSQL Tutorial');\r\n\r\nSELECT * FROM links;\r\n\r\n## 2. '\uae30\ud638: ''\r\nINSERT INTO links (url, name)\r\nVALUES('http://www.oreilly.com','O''Reilly Media');\r\n\r\nSELECT * FROM links;\r\n\r\n## 3. \ucd5c\uadfc \uc2dc\uac04\r\nINSERT INTO links (url, name, last_update)\r\nVALUES('https://www.google.com','Google','2013-06-01');\r\n\r\n## 4. \uacb0\uacfc \uac12\r\nINSERT INTO links (url, name)\r\nVALUES('https://www.postgresql.org','PostgreSQL')\r\nRETURNING id;\r\n\r\n## 5. \ubaa8\ub4e0 \uacb0\uacfc \uac12\r\nINSERT INTO links (url, name)\r\nVALUES('https://www.postgresql.org','PostgreSQL')\r\nRETURNING *;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},5258:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/2024-05-02-13-17-51-46867f432a1e1735e980a4e21705c6da.png"},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var s=n(6540);const t={},l=s.createContext(t);function i(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);