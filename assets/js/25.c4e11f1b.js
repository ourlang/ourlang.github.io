(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{371:function(s,a,t){"use strict";t.r(a);var e=t(18),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos安装elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos安装elasticsearch"}},[s._v("#")]),s._v(" CentOS安装ElasticSearch")]),s._v(" "),t("h2",{attrs:{id:"_1-下载elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载elasticsearch"}},[s._v("#")]),s._v(" 1.下载ElasticSearch")]),s._v(" "),t("h4",{attrs:{id:"_1-1-官网下载地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-官网下载地址"}},[s._v("#")]),s._v(" 1.1 官网下载地址")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.elastic.co/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.elastic.co/products/elasticsearch"),t("OutboundLink")],1)]),s._v(" "),t("h4",{attrs:{id:"_1-2-直接远程下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-直接远程下载"}},[s._v("#")]),s._v(" 1.2 直接远程下载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.4.3.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_2-把elasticsearch拷贝到指定目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-把elasticsearch拷贝到指定目录"}},[s._v("#")]),s._v(" 2.把elasticSearch拷贝到指定目录")]),s._v(" "),t("h4",{attrs:{id:"_2-1-创建一个普通用户，es默认不能使用root用户进行启动，这里创建一个用户-es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建一个普通用户，es默认不能使用root用户进行启动，这里创建一个用户-es"}},[s._v("#")]),s._v(' 2.1.创建一个普通用户，es默认不能使用root用户进行启动，这里创建一个用户"es"')]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("adduser es\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-2-指定用户密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-指定用户密码"}},[s._v("#")]),s._v(" 2.2 指定用户密码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" es\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-3创建创建es组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3创建创建es组"}},[s._v("#")]),s._v(" 2.3创建创建es组")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" esgroup\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-4在es压缩文件根目录设置-修改文件所属用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4在es压缩文件根目录设置-修改文件所属用户"}},[s._v("#")]),s._v(" 2.4在es压缩文件根目录设置 修改文件所属用户")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R es elasticsearch-6.4.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("a",{attrs:{"data-fancybox":"",title:"修改文件所属用户",href:"https://img-blog.csdnimg.cn/20191120222303746.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120222303746.png",alt:"修改文件所属用户"}})])]),s._v(" "),t("h4",{attrs:{id:"_2-5-修改文件所属组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-修改文件所属组"}},[s._v("#")]),s._v(" 2.5 修改文件所属组")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chgrp")]),s._v(" -R esgroup elasticsearch-6.4.3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3-解压安装es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-解压安装es"}},[s._v("#")]),s._v(" 3.解压安装es")]),s._v(" "),t("h4",{attrs:{id:"_3-1-切换用户到es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-切换用户到es"}},[s._v("#")]),s._v(" 3.1 切换用户到es")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" es\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("a",{attrs:{"data-fancybox":"",title:"切换用户到es",href:"https://img-blog.csdnimg.cn/20191120222539491.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120222539491.png",alt:"切换用户到es"}})])]),s._v(" "),t("h4",{attrs:{id:"_3-2-解压文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-解压文件"}},[s._v("#")]),s._v(" 3.2 解压文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf elasticsearch-6.4.3.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("a",{attrs:{"data-fancybox":"",title:"解压文件",href:"https://img-blog.csdnimg.cn/20191120222719757.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120222719757.png",alt:"解压文件"}})])]),s._v(" "),t("h4",{attrs:{id:"_3-3-进入-elasticsearch-6-4-3，并启动elasticsearch，输出日志中显示started表示启动成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-进入-elasticsearch-6-4-3，并启动elasticsearch，输出日志中显示started表示启动成功"}},[s._v("#")]),s._v(" 3.3 进入 elasticsearch-6.4.3，并启动elasticsearch，输出日志中显示started表示启动成功")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./elasticsearch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/20191120223009461.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120223009461.png",alt:"elasticsearch"}})]),s._v(" "),t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/20191120223119600.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120223119600.png",alt:"elasticsearch"}})]),s._v(" "),t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/20191120223138855.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120223138855.png",alt:"elasticsearch"}})])]),s._v(" "),t("h4",{attrs:{id:"_3-4-验证是否启动成功输入-curl-localhost-9200"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-验证是否启动成功输入-curl-localhost-9200"}},[s._v("#")]),s._v(" 3.4 验证是否启动成功输入 curl localhost:9200")]),s._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/20191120223221535.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120223221535.png",alt:"elasticsearch"}})])]),s._v(" "),t("h4",{attrs:{id:"_3-5-现在只能访问elasticsearch的本地服务，外网访问需要修改配置文件config-elasticsearch-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-现在只能访问elasticsearch的本地服务，外网访问需要修改配置文件config-elasticsearch-yml"}},[s._v("#")]),s._v(" 3.5 现在只能访问ElasticSearch的本地服务，外网访问需要修改配置文件config/elasticsearch.yml")]),s._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/20191120223511909.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120223511909.png",alt:"elasticsearch"}})])]),s._v(" "),t("h4",{attrs:{id:"_3-6修改完后启动有可能出现下面错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6修改完后启动有可能出现下面错误"}},[s._v("#")]),s._v(" 3.6修改完后启动有可能出现下面错误")]),s._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/20191120223642656.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120223642656.png",alt:"elasticsearch"}})])]),s._v(" "),t("p",[s._v("打开配置文件elasticsearch.yml 修改为0.0.0.0")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" network.host: 192.168.0.1 修改为本机IP 0.0.0.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_3-7-修改完后启动有可能还会出现下面三种错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-修改完后启动有可能还会出现下面三种错误"}},[s._v("#")]),s._v(" 3.7 修改完后启动有可能还会出现下面三种错误")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[1]: max file descriptors [4096] for elasticsearch process is too low, increase to at least [65536]\n[2]: max number of threads [3802] for user [esyonghu] is too low, increase to at least [4096]\n[3]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("解决办法 ：切换到root用户")]),s._v(" "),t("h4",{attrs:{id:"a-第一个错误需要将当前用户的软硬调用限制调大"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-第一个错误需要将当前用户的软硬调用限制调大"}},[s._v("#")]),s._v(" a 第一个错误需要将当前用户的软硬调用限制调大")]),s._v(" "),t("p",[s._v("切换到root用户,然后执行vim /etc/security/limits.conf 在文件末尾加上以下代码 备注 es为用户名 请根据实际情况修改")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("es soft nofile "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\nes hard nofile "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("131072")]),s._v("\nes soft nproc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\nes hard nproc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/2019112023083567.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019112023083567.png",alt:"elasticsearch"}})])]),s._v(" "),t("h4",{attrs:{id:"b-第二个错误需要修改-vim-etc-security-limits-d-20-nproc-conf-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-第二个错误需要修改-vim-etc-security-limits-d-20-nproc-conf-文件"}},[s._v("#")]),s._v(" b.第二个错误需要修改 vim  /etc/security/limits.d/20-nproc.conf 文件")]),s._v(" "),t("p",[s._v("在文件中添加")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("esyonghu soft nproc  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/20191120230959359.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120230959359.png",alt:"elasticsearch"}})])]),s._v(" "),t("h4",{attrs:{id:"c-第三个错误需要修改-etc-sysctl-conf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-第三个错误需要修改-etc-sysctl-conf"}},[s._v("#")]),s._v(" c 第三个错误需要修改/etc/sysctl.conf")]),s._v(" "),t("p",[s._v("使用命令 vim /etc/sysctl.conf来编辑该文件，在文件中加入如下内容")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("加上vm.max_map_count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/20191120231128193.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120231128193.png",alt:"elasticsearch"}})])]),s._v(" "),t("p",[s._v("需要使改文件生效，执行sysctl -p")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("sysctl -p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/20191120231200475.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120231200475.png",alt:"elasticsearch"}})])]),s._v(" "),t("h2",{attrs:{id:"_4-启动es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动es"}},[s._v("#")]),s._v(" 4.启动es")]),s._v(" "),t("p",[s._v("再次切换到esyonghu去elasticsearch文件目录启动elasticsearch\n"),t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/2019112023133184.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019112023133184.png",alt:"elasticsearch"}})])]),s._v(" "),t("p",[s._v("在浏览器输入自己的ip地址 出现以下界面则启动成功\n"),t("a",{attrs:{"data-fancybox":"",title:"elasticsearch",href:"https://img-blog.csdnimg.cn/2019112023135291.png"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019112023135291.png",alt:"elasticsearch"}})])]),s._v(" "),t("src-comment")],1)}),[],!1,null,null,null);a.default=r.exports}}]);