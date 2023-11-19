"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[920],{738:(o,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var s=e(5893),i=e(1151);const d={sidebar_position:3},c="\u4f7f\u7528uboot\u5f15\u5bfc\u81ea\u5df1\u7684\u64cd\u4f5c\u7cfb\u7edf",t={id:"Milkv-duo/uboot-boot-os",title:"\u4f7f\u7528uboot\u5f15\u5bfc\u81ea\u5df1\u7684\u64cd\u4f5c\u7cfb\u7edf",description:"\u66f4\u65b0\uff1a",source:"@site/docs/Milkv-duo/uboot-boot-os.md",sourceDirName:"Milkv-duo",slug:"/Milkv-duo/uboot-boot-os",permalink:"/docs/Milkv-duo/uboot-boot-os",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Milkv-duo \u8fd0\u884c Arch Linux \u7cfb\u7edf",permalink:"/docs/Milkv-duo/arch-linux-on-milkv-duo"},next:{title:"\u4f7f\u7528 Opensbi \u5f15\u5bfc\u81ea\u5df1\u7684 bl33",permalink:"/docs/Milkv-duo/opensbi-boot-os"}},r={},l=[];function _(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...o.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4f7f\u7528uboot\u5f15\u5bfc\u81ea\u5df1\u7684\u64cd\u4f5c\u7cfb\u7edf",children:"\u4f7f\u7528uboot\u5f15\u5bfc\u81ea\u5df1\u7684\u64cd\u4f5c\u7cfb\u7edf"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u66f4\u65b0\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u4ece\u4e4b\u524d\u7684repo\u4ed3\u5e93\u6362\u6210\u6574\u4e2a\u7684git\u4ed3\u5e93\u4e4b\u540e\uff0c\u6587\u4ef6\u8def\u5f84\u4e0d\u540c\u4e86"}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u4fee\u6539\u7684uboot config\u6587\u4ef6\u4e3a\uff1a",(0,s.jsx)(n.code,{children:"duo-buildroot-sdk/build/boards/cv180x/cv1800b_milkv_duo_sd/u-boot/cvitek_cv1800b_milkv_duo_sd_defconfig"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u7f16\u8bd1\u51fa\u6765\u7684\u6587\u4ef6\u8def\u5f84\u662f\uff1a",(0,s.jsx)(n.code,{children:"duo-buildroot-sdk/install/soc_cv1800b_milkv_duo_sd/fip.bin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636e\u82af\u7247\u7684\u5b98\u65b9\u6587\u6863\uff0cCV1800b \u5728\u542f\u52a8\u65f6\u4f1a\u5728 FAT32 \u5206\u533a\u4e2d\u5bfb\u627e ",(0,s.jsx)(n.code,{children:"fip.bin"})," \u6587\u4ef6\uff0c\u5f15\u5bfc\u5176\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"bl2->opensbi->uboot"}),"\uff0cuboot \u518d\u53bb\u5f15\u5bfc ",(0,s.jsx)(n.code,{children:"boot.sd"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(6875).Z+"",width:"375",height:"643"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u5f00\u59cb\u6211\u60f3\u7684\u662f\u5c06\u81ea\u5df1\u7684 kernel \u66ff\u6362 uboot\uff08\u5373\u653e\u5728 LOADER_2ND \u7684\u4f4d\u7f6e\uff09\uff0c\u76f4\u63a5\u4ece opensbi \u8df3\u8f6c\u8fdb\u6765\uff0c\u4f46\u5728\u7f16\u8bd1 ",(0,s.jsx)(n.code,{children:"fip.bin"})," \u7684\u8fc7\u7a0b\u4e2d\u53d1\u73b0 \uff0cLOADER_2ND \u9700\u8981\u6ee1\u8db3 BL33 \u7684\u76f8\u5173\u8981\u6c42\uff0c\u5373\u4f7f\u5f3a\u884c\u5220\u6389 BL33 \u7684\u76f8\u5173\u6821\u9a8c\u5f97\u5230 ",(0,s.jsx)(n.code,{children:"fip.bin"})," \u955c\u50cf\uff0c\u5728\u677f\u5b50\u542f\u52a8\u65f6\u8fd8\u662f\u4f1a\u62a5 lzma \u7f16\u89e3\u7801\u7684\u76f8\u5173\u9519\u8bef\u3002\u7531\u4e8e\u677f\u5b50\u7684 Bootrom \u4e0e BL2 \u90fd\u672a\u5f00\u6e90\uff0c\u52a0\u4e0a\u81ea\u5df1\u4e5f\u4e0d\u662f\u7279\u522b\u4e86\u89e3\uff0c\u9042\u653e\u5f03\u8fd9\u4e2a\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u540e\u6765\u770b\u5230\u4e86",(0,s.jsx)(n.a,{href:"https://bbs.aw-ol.com/topic/132/share/1",children:"\u5f00\u59cb\u88f8\u5954\u5427,\u5c11\u5e74"}),"\u8fd9\u7bc7\u6587\u7ae0\uff0c\u4e86\u89e3\u4e86\u53ef\u4ee5\u4f7f\u7528 uboot \u6765\u5f15\u5bfc\u81ea\u5df1\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5148\u4e86\u89e3\u4e0b uboot \u7684\u5f15\u5bfc\u6d41\u7a0b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u9996\u5148\u628a tf \u5361\u4e2d\u7684 boot \u5206\u533a\u4e2d\u53ea\u4fdd\u7559 ",(0,s.jsx)(n.code,{children:"fip.bin"})," \u6587\u4ef6\uff0c\u8fd9\u6837\u5728\u542f\u52a8\u65f6 uboot \u4f1a\u627e\u4e0d\u5230 ",(0,s.jsx)(n.code,{children:"boot.sd"})," \u6587\u4ef6\u800c\u505c\u6b62\uff08uboot \u9ed8\u8ba4\u7684\u7b49\u5f85\u65f6\u95f4\u53ea\u6709\u4e00\u79d2\uff0c\u592a\u5feb\u4e86\u6211\u6309\u4e0d\u8fc7\u6765\uff09\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["uboot \u547d\u4ee4\u884c\u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"printenv"})," \u67e5\u770b\u73af\u5883\u53d8\u91cf\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cv180x_c906# printenv\n...\nbootargs=root=/dev/mmcblk0p2 rootwait rw console=ttyS0,115200 earlycon=sbi loglevel=9 riscv.fwsz=0x80000\nbootcmd=run sdboot\n...\nsdboot=setenv bootargs ${root} ${mtdparts} console=$consoledev,$baudrate $othbootargs;echo Boot from SD ...;mmc dev 0 && fatload mmc 0 ${uImage_addr} boot.sd; if test $? -eq 0; then bootm ${uImage_addr}#config-cv1800b_sophpi_duo_sd;fi;\n...\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u53ef\u4ee5\u770b\u5230\uff0cuboot \u505a\u7684\u4e8b\u60c5\u5c31\u662f\u628a ",(0,s.jsx)(n.code,{children:"boot.sd"})," \u52a0\u8f7d\u5230 ",(0,s.jsx)(n.code,{children:"${uImage_addr}"})," \u7684\u4f4d\u7f6e\uff0c\u518d\u8df3\u8f6c\u5230 ",(0,s.jsx)(n.code,{children:"${uImage_addr}"})," \u7ee7\u7eed\u8fd0\u884c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636e\u4e0a\u9762\u8fd9\u7bc7\u6587\u7ae0\uff0c",(0,s.jsx)(n.code,{children:"bootm"})," \u662f\u5f15\u5bfc linux kernel \u7684\uff0c\u5305\u542b\u4e86\u5f15\u5bfc\u534f\u8bae\u7684\u4e00\u4e9b\u4e1c\u897f\uff0c\u6211\u4eec\u4f5c\u4e3a\u4e00\u4e2a\u88f8\u673a\u7a0b\u5e8f\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 uboot \u7684\xa0",(0,s.jsx)(n.code,{children:"go"}),"\xa0\u547d\u4ee4\u76f4\u63a5\u8df3\u8f6c\uff0c\u6211\u4eec\u9700\u8981\u5728 uboot \u7684 defconfig \u4e2d\u6253\u5f00 ",(0,s.jsx)(n.code,{children:"go"})," \u547d\u4ee4\u7684\u914d\u7f6e\u3002\uff08\u4e0d\u77e5\u9053 rls_defconfig \u6709\u4ec0\u4e48\u7528\uff0c\u5e72\u8106\u4e00\u8d77\u6539\u4e86\uff09"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"diff --git a/boards/cv180x/cv1800b_sophpi_duo_sd/u-boot/cvitek_cv1800b_sophpi_duo_sd_defconfig b/boards/cv180x/cv1800b_sophpi_duo_sd/u-boot/cvitek_cv1800b_sophpi_duo_sd_defconfig\nindex 1bb7fde..e821fcb 100644\n--- a/boards/cv180x/cv1800b_sophpi_duo_sd/u-boot/cvitek_cv1800b_sophpi_duo_sd_defconfig\n+++ b/boards/cv180x/cv1800b_sophpi_duo_sd/u-boot/cvitek_cv1800b_sophpi_duo_sd_defconfig\n@@ -32,7 +32,7 @@ CONFIG_BOOTM_OPENRTOS=y\n # CONFIG_BOOTM_VXWORKS is not set\n # CONFIG_CMD_ELF is not set\n # CONFIG_CMD_FDT is not set\n-# CONFIG_CMD_GO is not set\n+CONFIG_CMD_GO=y\n # CONFIG_CMD_IMI is not set\n # CONFIG_CMD_XIMG is not set\n # CONFIG_CMD_EXPORTENV is not set\ndiff --git a/boards/cv180x/cv1800b_sophpi_duo_sd/u-boot/cvitek_cv1800b_sophpi_duo_sd_rls_defconfig b/boards/cv180x/cv1800b_sophpi_duo_sd/u-boot/cvitek_cv1800b_sophpi_duo_sd_rls_defconfig\nindex b4250f2..4419c0c 100644\n--- a/boards/cv180x/cv1800b_sophpi_duo_sd/u-boot/cvitek_cv1800b_sophpi_duo_sd_rls_defconfig\n+++ b/boards/cv180x/cv1800b_sophpi_duo_sd/u-boot/cvitek_cv1800b_sophpi_duo_sd_rls_defconfig\n@@ -32,7 +32,7 @@ CONFIG_BOOTM_OPENRTOS=y\n# CONFIG_BOOTM_VXWORKS is not set\n# CONFIG_CMD_ELF is not set\n# CONFIG_CMD_FDT is not set\n-# CONFIG_CMD_GO is not set\n+CONFIG_CMD_GO=y\n# CONFIG_CMD_IMI is not set\n# CONFIG_CMD_XIMG is not set\n# CONFIG_CMD_EXPORTENV is not set\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539\u5b8c\u6210\u540e\u91cd\u65b0\u7f16\u8bd1 ",(0,s.jsx)(n.code,{children:"fip.bin"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source build/cvisetup.sh\ndefconfig cv1800b_sophpi_duo_sd\nclean_all\nbuild_fsbl\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u7f16\u8bd1\u51fa\u6765\u7684 ",(0,s.jsx)(n.code,{children:"install/soc_cv1800b_sophpi_duo_sd/fip.bin"})," \u6587\u4ef6\u4e0e\u81ea\u5df1\u7684 ",(0,s.jsx)(n.code,{children:"kernel.bin"})," \u6587\u4ef6\u653e\u5165 tf\u5361\u7684 boot \u5206\u533a\u4e2d\uff0c\u542f\u52a8\u540e\u5728 uboot \u547d\u4ee4\u884c\u4e2d\u8f93\u5165\u547d\u4ee4\u8df3\u8f6c\u5230 kernel \u4e2d\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mmc dev 0;fatload mmc 0 ${uImage_addr} kernel.bin;go ${uImage_addr}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f15\u5bfc\u6210\u529f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(2122).Z+"",width:"760",height:"245"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u60f3 uboot \u5728\u542f\u52a8\u65f6\u5c31\u76f4\u63a5\u5f15\u5bfc\u81ea\u5df1\u7684 kernel\uff0c\u53ef\u4ee5\u5728",(0,s.jsx)(n.code,{children:"u-boot-2021.10/include/configs/cv180x-asic.h"}),"\u4e2d\u4fee\u6539 bootcommand\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'diff --git a/include/configs/cv180x-asic.h b/include/configs/cv180x-asic.h\nindex 08b70193..f1cfc95e 100644\n--- a/include/configs/cv180x-asic.h\n+++ b/include/configs/cv180x-asic.h\n@@ -283,12 +283,9 @@\n                    "console=$consoledev,$baudrate $othbootargs;"\n\n    #define SD_BOOTM_COMMAND \\\n-               SET_BOOTARGS \\\n                "echo Boot from SD ...;" \\\n-               "mmc dev 0 && fatload mmc 0 ${uImage_addr} boot.sd; " \\\n-               "if test $? -eq 0; then " \\\n-               UBOOT_VBOOT_BOOTM_COMMAND \\\n-               "fi;"\n+               "mmc dev 0 && fatload mmc 0 ${uImage_addr} kernel.bin; " \\\n+               "go ${uImage_addr}"\n\n    #ifndef CONFIG_SD_BOOT\n        #define CONFIG_BOOTCOMMAND  SHOWLOGOCMD "cvi_update || run norboot || run nandboot ||run emmcboot"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u53c2\u8003\u8d44\u6599\uff1a",(0,s.jsx)(n.a,{href:"https://bbs.aw-ol.com/topic/132/share/1",children:"https://bbs.aw-ol.com/topic/132/share/1"})]})]})}function b(o={}){const{wrapper:n}={...(0,i.a)(),...o.components};return n?(0,s.jsx)(n,{...o,children:(0,s.jsx)(_,{...o})}):_(o)}},6875:(o,n,e)=>{e.d(n,{Z:()=>s});const s=e.p+"assets/images/boot-process-8a8c321929946c206b34bc86b4c4d16c.png"},2122:(o,n,e)=>{e.d(n,{Z:()=>s});const s=e.p+"assets/images/ucore-9f3ee5634a6f39b62a216132549d734f.png"},1151:(o,n,e)=>{e.d(n,{Z:()=>t,a:()=>c});var s=e(7294);const i={},d=s.createContext(i);function c(o){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function t(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:c(o.components),s.createElement(d.Provider,{value:n},o.children)}}}]);