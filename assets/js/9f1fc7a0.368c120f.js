"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6494],{3246:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=o(4848),i=o(8453);const s={},r="\ucf54\ub529 \uc2a4\ud0c0\uc77c \uc815\uc758\ud558\uae30",l={id:"solution-organization/solution-devops/codestyle/README",title:"\ucf54\ub529 \uc2a4\ud0c0\uc77c \uc815\uc758\ud558\uae30",description:"---",source:"@site/docs/02-solution-organization/02-solution-devops/99-codestyle/README.md",sourceDirName:"02-solution-organization/02-solution-devops/99-codestyle",slug:"/solution-organization/solution-devops/codestyle/",permalink:"/archddd/docs/solution-organization/solution-devops/codestyle/",draft:!1,unlisted:!1,editUrl:"https://github.com/hhko/archddd/tree/main/docs/docs/02-solution-organization/02-solution-devops/99-codestyle/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub Packages \ub9cc\ub4e4\uae30",permalink:"/archddd/docs/solution-organization/solution-devops/github-packages/"},next:{title:"\uc124\uacc4 \ud328\ud0a4\uc9c0",permalink:"/archddd/docs/category/\uc124\uacc4-\ud328\ud0a4\uc9c0"}},d={},c=[];function a(e){const n={a:"a",code:"code",h1:"h1",hr:"hr",input:"input",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\ucf54\ub529-\uc2a4\ud0c0\uc77c-\uc815\uc758\ud558\uae30",children:"\ucf54\ub529 \uc2a4\ud0c0\uc77c \uc815\uc758\ud558\uae30"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",".editorconfig","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'dotnet tool install -g dotnet-format --version "8.*" --add-source https://pkgs.dev.azure.com/dnceng/public/_packaging/dotnet8/nuget/v3/index.json\r\ndotnet format --verify-no-changes\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","StyleCop"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","format"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<ItemGroup>\r\n    <AdditionalFiles Include="$(MSBuildThisFileDirectory)stylecop.json" Link="stylecop.json" />\r\n    <AdditionalFiles Include="$(MSBuildThisFileDirectory)SonarLint.xml" Link="SonarLint.xml" />\r\n    <EditorConfigFiles Include="$(MSBuildThisFileDirectory).editorconfig" Link=".editorconfig"/>\r\n  </ItemGroup>\r\n\r\n<PropertyGroup Condition="\'$(Configuration)\'==\'Debug\'">\r\n\r\n    \x3c!--the full path of your ruleset file for Debug mode--\x3e\r\n    <CodeAnalysisRuleSet>xxx\\RuleSet1.ruleset</CodeAnalysisRuleSet>\r\n  </PropertyGroup\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  dotnet format --verify-no-changes --report issues.json\r\n  dotnet format \u2013verify-no-changes \u2013report issues.json\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://devzone.channeladam.com/tags/analyzerconfig/",children:".NET Notebook Update - Distribution of a Common EditorConfig File to Multiple .NET Projects The .NET Notebook has been updat"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var t=o(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);