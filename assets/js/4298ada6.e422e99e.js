"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6820],{9580:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(4848),s=i(8453);const r={sidebar_position:7},c="Verify",l={id:"test/verify/README",title:"Verify",description:"\uad6c\uc131",source:"@site/docs/04-test/07-verify/README.md",sourceDirName:"04-test/07-verify",slug:"/test/verify/",permalink:"/ArchDdd/docs/test/verify/",draft:!1,unlisted:!1,editUrl:"https://github.com/hhko/ArchDdd/tree/main/docs/docs/04-test/07-verify/README.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Fluent Assertions",permalink:"/ArchDdd/docs/test/fluentassertions/"},next:{title:"Microsoft.AspNetCore.Mvc.Testing",permalink:"/ArchDdd/docs/test/webapi/"}},d={},a=[{value:"\uad6c\uc131",id:"\uad6c\uc131",level:2},{value:"Verify CLI",id:"verify-cli",level:2},{value:"WebApi \uc801\uc6a9",id:"webapi-\uc801\uc6a9",level:2},{value:"WebAPI \ud1b5\ud569 \ud14c\uc2a4\ud2b8",id:"webapi-\ud1b5\ud569-\ud14c\uc2a4\ud2b8",level:3},{value:"Verify \ud14c\uc2a4\ud2b8 \uc790\ub3d9\ud654",id:"verify-\ud14c\uc2a4\ud2b8-\uc790\ub3d9\ud654",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"verify",children:"Verify"}),"\n",(0,t.jsx)(n.h2,{id:"\uad6c\uc131",children:"\uad6c\uc131"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[".gitattributes","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"*.verified.txt text eol=lf working-tree-encoding=UTF-8\r\n*.verified.xml text eol=lf working-tree-encoding=UTF-8\r\n*.verified.json text eol=lf working-tree-encoding=UTF-8\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[".gitignore","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"*.received.*\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["verify.tool \ub3c4\uad6c \uc124\uce58","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"dotnet tool install -g verify.tool\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"verify-cli",children:"Verify CLI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# *.received.txt \ubaa8\ub4e0 \ud30c\uc77c\uc744 .verified.txt \ud30c\uc77c\ub85c \ubcc0\ud658\ud55c\ub2e4.\r\ndotnet verify accept -y\r\ndotnet verify accept -y -w \ud2b9\uc815_\uacbd\ub85c\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(9578).A+"",width:"2346",height:"512"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# *.received.txt \ubaa8\ub4e0 \ud30c\uc77c\uc744 \uc0ad\uc81c\ud55c\ub2e4.\r\ndotnet verify reject -y\r\ndotnet verify reject -y -w \ud2b9\uc815_\uacbd\ub85c\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# *.received.txt \ud30c\uc77c \ub2e8\uc704\ub85c .verified.txt \uc0dd\uc131\uc744 \uacb0\uc815\ud55c\ub2e4.\r\ndotnet verify review\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(1691).A+"",width:"2346",height:"1500"})}),"\n",(0,t.jsx)(n.h2,{id:"webapi-\uc801\uc6a9",children:"WebApi \uc801\uc6a9"}),"\n",(0,t.jsx)(n.h3,{id:"webapi-\ud1b5\ud569-\ud14c\uc2a4\ud2b8",children:"WebAPI \ud1b5\ud569 \ud14c\uc2a4\ud2b8"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["WebAPI \uc0dd\uc131: Microsoft.AspNetCore.Mvc.Testing","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",children:"var webAppFactory = new WebApplicationFactory<Program>();\r\nusing var httpClient = webAppFactory.CreateDefaultClient();\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["WebAPI \ud638\ucd9c: System.Net.Http.Json","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",children:"PostAsJsonAsync<T>\r\nReadFromJsonAsync<T>\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"verify-\ud14c\uc2a4\ud2b8-\uc790\ub3d9\ud654",children:"Verify \ud14c\uc2a4\ud2b8 \uc790\ub3d9\ud654"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\ud3f4\ub354 \uc9c0\uc815","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",children:'public static class Settings\r\n{\r\n    [ModuleInitializer]\r\n    public static void Initialize()\r\n    {\r\n        // \ud2b9\uc815 \uacbd\ub85c\uc5d0 \ube44\uad50 \ud30c\uc77c \uc0dd\uc131\ud558\uae30\r\n        //  - \uae30\ubcf8\uc740 [Fact]\uac00 \uc788\ub294 \uacbd\ub85c\uc785\ub2c8\ub2e4.\r\n        //  - \uc774\ub984\uc740 {\ud074\ub798\uc2a4\uba85}_{\uba54\uc11c\ub4dc\uba85}.received.txt\r\n        // https://github.com/VerifyTests/Verify/blob/main/docs/naming.md\r\n        Verifier.UseProjectRelativeDirectory("Snapshots");\r\n\r\n        // \uc2e4\ud328\uc2dc \ud30c\uc77c \ube44\uad50\ucc3d \ube44\ud65c\uc131\ud654\r\n        DiffRunner.Disabled = true;\r\n    }\r\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\ud30c\ub77c\ubbf8\ud130 \uc9c0\uc815","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[Theory]\r\n[InlineData("1")]\r\n[InlineData("2")]\r\npublic async Task GetStudentById(string id)\r\n{\r\n    // ...\r\n\r\n    await VerifyJson(student)\r\n         .UseParameters(id);            // https://github.com/VerifyTests/Verify/blob/main/docs/parameterised.md\r\n\r\n\r\n    using var response = await httpClient.GetAsync($"api/students/{id}");\r\n    var student = await response.Content.ReadAsStringAsync();\r\n    await VerifyJson(student)\r\n        .UseParameters(id);\r\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["StudentControllerTest.GetStudentById_id",(0,t.jsx)(n.code,{children:"=1"}),".verified.txt"]}),"\n",(0,t.jsxs)(n.li,{children:["StudentControllerTest.GetStudentById_id",(0,t.jsx)(n.code,{children:"=2"}),".verified.txt"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["TODO","\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\ud2b9\uc815 \ud3f4\ub354 \uacb0\uacfc \uc0dd\uc131: ",(0,t.jsx)(n.code,{children:"Verifier.UseProjectRelativeDirectory"})]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","InlineData \ucc98\ub9ac: ",(0,t.jsx)(n.code,{children:"UseParameters"})]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",".txt -> .json \ud655\uc7a5\uc790 \ubcc0\uacbd"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\uc2e4\ud328\uc2dc \ud30c\uc77c \ube44\uad50 \ube44\ud65c\uc131\ud654"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1691:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2024-05-06-15-54-04-eefe05214e226415652cbe1364af0e18.png"},9578:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2024-05-26-12-03-17-165c75042c67c0c9921432760cbe5462.png"},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);