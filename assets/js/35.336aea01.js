(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{381:function(s,t,a){"use strict";a.r(t);var e=a(18),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos-解压zip文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-解压zip文件"}},[s._v("#")]),s._v(" CentOS 解压Zip文件")]),s._v(" "),a("h3",{attrs:{id:"安装支持zip的工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装支持zip的工具"}},[s._v("#")]),s._v(" 安装支持ZIP的工具")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum install -y unzip zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1、把文件解压到当前目录下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、把文件解压到当前目录下"}},[s._v("#")]),s._v(" 1、把文件解压到当前目录下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("unzip test.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2、如果要把文件解压到指定的目录下，需要用到-d参数。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、如果要把文件解压到指定的目录下，需要用到-d参数。"}},[s._v("#")]),s._v(" 2、如果要把文件解压到指定的目录下，需要用到-d参数。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("unzip -d /temp test.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3、解压的时候，有时候不想覆盖已经存在的文件，那么可以加上-n参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、解压的时候，有时候不想覆盖已经存在的文件，那么可以加上-n参数"}},[s._v("#")]),s._v(" 3、解压的时候，有时候不想覆盖已经存在的文件，那么可以加上-n参数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("unzip -n test.zip\nunzip -n -d /temp test.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_4、只看一下zip压缩包中包含哪些文件，不进行解压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、只看一下zip压缩包中包含哪些文件，不进行解压缩"}},[s._v("#")]),s._v(" 4、只看一下zip压缩包中包含哪些文件，不进行解压缩")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("unzip -l test.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5、查看显示的文件列表还包含压缩比率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、查看显示的文件列表还包含压缩比率"}},[s._v("#")]),s._v(" 5、查看显示的文件列表还包含压缩比率")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("unzip -v test.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_6、检查zip文件是否损坏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、检查zip文件是否损坏"}},[s._v("#")]),s._v(" 6、检查zip文件是否损坏")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("unzip -t test.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_7、将压缩文件test-zip在指定目录tmp下解压缩，如果已有相同的文件存在，要求unzip命令覆盖原先的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、将压缩文件test-zip在指定目录tmp下解压缩，如果已有相同的文件存在，要求unzip命令覆盖原先的文件"}},[s._v("#")]),s._v(" 7、将压缩文件test.zip在指定目录tmp下解压缩，如果已有相同的文件存在，要求unzip命令覆盖原先的文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("unzip -o test.zip -d /tmp/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v(" "),a("src-comment")],1)}),[],!1,null,null,null);t.default=r.exports}}]);