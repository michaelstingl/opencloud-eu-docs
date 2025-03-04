"use strict";(self.webpackChunkopen_cloud_doku=self.webpackChunkopen_cloud_doku||[]).push([[9605],{1033:(A,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>a,default:()=>R,frontMatter:()=>d,metadata:()=>e,toc:()=>r});const e=JSON.parse('{"id":"admin/getting-started/bare-metal","title":"Bare-Metal","description":"Manual, minimalist setup with essential features.","source":"@site/docs/admin/20-getting-started/40-bare-metal.md","sourceDirName":"admin/20-getting-started","slug":"/admin/getting-started/bare-metal","permalink":"/de/docs/admin/getting-started/bare-metal","draft":false,"unlisted":false,"editUrl":"https://github.com/opencloud-eu/docs/tree/main/docs/admin/20-getting-started/40-bare-metal.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"id":"bare-metal","title":"Bare-Metal","description":"Manual, minimalist setup with essential features."},"sidebar":"admin","previous":{"title":"Docker","permalink":"/de/docs/admin/getting-started/docker"},"next":{"title":"Configuration","permalink":"/de/docs/category/configuration-1"}}');var s=n(5105),l=n(7890);const d={sidebar_position:4,id:"bare-metal",title:"Bare-Metal",description:"Manual, minimalist setup with essential features."},a=void 0,t={},r=[{value:"User Guide for Installing OpenCloud",id:"user-guide-for-installing-opencloud",level:2},{value:"1. Install Git and clone the repository",id:"1-install-git-and-clone-the-repository",level:3},{value:"2. Update system and install required packages",id:"2-update-system-and-install-required-packages",level:3},{value:"3. Build process and OpenCloud initialization",id:"3-build-process-and-opencloud-initialization",level:3},{value:"4. Login",id:"4-login",level:3},{value:"5. Conclusion",id:"5-conclusion",level:3},{value:"If you encounter any issues or errors, try finding a solution here:",id:"if-you-encounter-any-issues-or-errors-try-finding-a-solution-here",level:3}];function c(A){const i={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"user-guide-for-installing-opencloud",children:"User Guide for Installing OpenCloud"}),"\n",(0,s.jsxs)(i.p,{children:["Follow the steps below to install and configure OpenCloud on your system.",(0,s.jsx)("br",{}),"\nThis example is on Linux Ubuntu 24.04 distribution!"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"1-install-git-and-clone-the-repository",children:"1. Install Git and clone the repository"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Open a terminal."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Update your package list:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo apt update && upgrade\n"})}),"\n",(0,s.jsx)("img",{src:n(7172).A,alt:"sudo apt",width:"1920"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Install Git using the following command:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo apt install git\n"})}),"\n",(0,s.jsx)("img",{src:n(2455).A,alt:"install git",width:"1920"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Clone the OpenCloud repository:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/opencloud-eu/opencloud.git\n"})}),"\n",(0,s.jsx)("img",{src:n(7581).A,alt:"git clone",width:"1920"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"2-update-system-and-install-required-packages",children:"2. Update system and install required packages"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Install the golang package:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo apt install golang -y\n"})}),"\n",(0,s.jsx)("img",{src:n(4145).A,alt:"install golang",width:"1920"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Install npm (Node Package Manager):"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo apt install npm -y\n"})}),"\n",(0,s.jsx)("img",{src:n(988).A,alt:"install npm",width:"1920"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Install corepack globally:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo npm install -g corepack\n"})}),"\n",(0,s.jsx)("img",{src:n(8345).A,alt:"install corepack",width:"1920"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Enable ",(0,s.jsx)(i.code,{children:"pnpm"})," using corepack:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"corepack enable pnpm\n"})}),"\n",(0,s.jsx)("img",{src:n(5275).A,alt:"corepack enable",width:"1920"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"3-build-process-and-opencloud-initialization",children:"3. Build process and OpenCloud initialization"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Navigate to the OpenCloud directory:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"cd opencloud\n"})}),"\n",(0,s.jsx)("img",{src:n(6560).A,alt:"cd opencloud",width:"1920"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Run the generate process:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"make clean generate\n"})}),"\n",(0,s.jsx)("img",{src:n(1439).A,alt:"make clean generate",width:"1920"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Navigate to the OpenCloud subdirectory:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"cd opencloud\n"})}),"\n",(0,s.jsx)("img",{src:n(1620).A,alt:"cd opencloud subdirectory",width:"1920"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Build OpenCloud:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"make clean build\n"})}),"\n",(0,s.jsx)("img",{src:n(8888).A,alt:"make clean build",width:"1920"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Initialize OpenCloud with insecure configuration and set an admin password:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"./bin/opencloud init --insecure true --admin-password admin\n"})}),"\n",(0,s.jsx)("img",{src:n(5623).A,alt:"opencloud init",width:"1920"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Start the OpenCloud server:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"./bin/opencloud server\n"})}),"\n",(0,s.jsx)("img",{src:n(9888).A,alt:"opencloud server",width:"1920"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"4-login",children:"4. Login"}),"\n",(0,s.jsx)(i.p,{children:"Login with your browser:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://cloud.opencloud.test",children:"https://cloud.opencloud.test"})}),"\n",(0,s.jsxs)(i.li,{children:["user: ",(0,s.jsx)(i.strong,{children:"admin"})]}),"\n",(0,s.jsxs)(i.li,{children:["password: ",(0,s.jsx)(i.strong,{children:"admin"})]}),"\n"]}),"\n",(0,s.jsx)("img",{src:n(7182).A,alt:"login",width:"1920"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"5-conclusion",children:"5. Conclusion"}),"\n",(0,s.jsx)(i.p,{children:"Your OpenCloud server is now running and ready to use \ud83d\ude80"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"if-you-encounter-any-issues-or-errors-try-finding-a-solution-here",children:"If you encounter any issues or errors, try finding a solution here:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/de/docs/admin/resources/common-issues",children:"Common Issues & Help"})}),"\n"]})]})}function R(A={}){const{wrapper:i}={...(0,l.R)(),...A.components};return i?(0,s.jsx)(i,{...A,children:(0,s.jsx)(c,{...A})}):c(A)}},7172:(A,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/apt-update-&&-upgrade-2d370e22152b7bd87b3fe0598e6d2e66.png"},1620:(A,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/cd-opencloud-subdirectory-cb7b1335234bff85f65d248b5afb14e2.png"},6560:(A,i,n)=>{n.d(i,{A:()=>e});const e="data:image/png;base64,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"},5275:(A,i,n)=>{n.d(i,{A:()=>e});const e="data:image/png;base64,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"},7581:(A,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/git-clone-cfbd1badf140989fdf7113dd64481f03.png"},8345:(A,i,n)=>{n.d(i,{A:()=>e});const e="data:image/png;base64,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"},2455:(A,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/install-git-29867bc5cd2e82fd1978059c56b42f36.png"},4145:(A,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/install-golang-182dd215563532e60b51ea9618221151.png"},988:(A,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/install-npm-4483f3eb943896dc3f81554d3f5e96de.png"},7182:(A,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/login-212daf17f37f34bca9d143324040eddc.png"},8888:(A,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/make-clean-build-ad2ae0d688835465ff424d90ec67ddc3.png"},1439:(A,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/make-clean-generate-06bcaebe6ad979d846d1fe5240f3d8e8.png"},5623:(A,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/opencloud-init-00826b11b4503078da02d0c71d4e1a07.png"},9888:(A,i,n)=>{n.d(i,{A:()=>e});const e="data:image/png;base64,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"},7890:(A,i,n)=>{n.d(i,{R:()=>d,x:()=>a});var e=n(8101);const s={},l=e.createContext(s);function d(A){const i=e.useContext(l);return e.useMemo((function(){return"function"==typeof A?A(i):{...i,...A}}),[i,A])}function a(A){let i;return i=A.disableParentContext?"function"==typeof A.components?A.components(s):A.components||s:d(A.components),e.createElement(l.Provider,{value:i},A.children)}}}]);