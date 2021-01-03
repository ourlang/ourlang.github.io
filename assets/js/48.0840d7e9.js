(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{394:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"跨域的本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域的本质"}},[t._v("#")]),t._v(" 跨域的本质")]),t._v(" "),a("blockquote",[a("p",[t._v("相信大家在做web系统开发的时候，都遇到过前端页面访问另一个服务器而非本服务器从而遭遇的跨域问题。跨域是个很常见的问题，虽然在web系统中的解决方式很简单，加一段耳熟能详的代码，或者一个注解，或者在某个框架中配置点什么就能解决，但是不少开发者并没有对跨域有全面的系统性的认知。")])]),t._v(" "),a("h2",{attrs:{id:"_1、什么是跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是跨域"}},[t._v("#")]),t._v(" 1、什么是跨域")]),t._v(" "),a("h4",{attrs:{id:"浏览器的同源策略same-origin-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的同源策略same-origin-policy"}},[t._v("#")]),t._v(" 浏览器的同源策略Same-origin Policy")]),t._v(" "),a("blockquote",[a("p",[t._v("如果两个url的协议、域名或ip、端口都相同，即在浏览器中被视为两者同源。\n下表给出了相对http://store.company.com/dir/page.html同源检测的示例:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("URL")]),t._v(" "),a("th",[t._v("结果")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("http://store.company.com/dir2/other.html")]),t._v(" "),a("td",[t._v("成功")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("http://store.company.com/dir/inner/another.html")]),t._v(" "),a("td",[t._v("成功")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("https://store.company.com/secure.html")]),t._v(" "),a("td",[t._v("失败")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不同协议 ( https和http )")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("http://store.company.com:81/dir/etc.html")]),t._v(" "),a("td",[t._v("失败")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不同端口 ( 81和80)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("http://news.company.com/dir/other.html\t失败")]),t._v(" "),a("td",[t._v("不同域名 ( news和store )")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("DOM同源策略")]),t._v(":禁止对不同源的页面的DOM进行操作，主要包括iframe、canvas之类的。不同源的iframe禁止数据交互的，含有不同源数据的canvas会受到污染而无法进行操作。")]),t._v(" "),a("li",[a("strong",[t._v("XmlHttpRequest同源策略")]),t._v(":禁止不同源的AJAX请求，主要用来防止CSRF攻击")])]),t._v(" "),a("h2",{attrs:{id:"_2、cors说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、cors说明"}},[t._v("#")]),t._v(" 2、CORS说明")]),t._v(" "),a("blockquote",[a("p",[t._v('CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。也就是说CORS是为了解决跨源访问问题的一套机制。')])]),t._v(" "),a("blockquote",[a("p",[t._v("CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。")])]),t._v(" "),a("h2",{attrs:{id:"_3、跨域演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、跨域演示"}},[t._v("#")]),t._v(" 3、跨域演示")]),t._v(" "),a("blockquote",[a("p",[t._v("设有两个服务器A和B，A的页面调用A的接口，没有问题；\n但是A的页面调用B的接口，将会产生跨域问题。进入A的index页面")])]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"跨域演示",href:"https://img-blog.csdnimg.cn/20200613165843937.png"}},[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200613165843937.png",alt:"跨域演示"}})])]),t._v(" "),a("p",[a("strong",[t._v("两个按钮的对应的触发代码")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/testA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Data Loaded: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:8081/testB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Data Loaded: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[a("strong",[t._v("点击左边按钮，对应后台代码为：")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/testA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"访问A网站"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"访问A网站"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("这时触发效果：")]),t._v(" "),a("a",{attrs:{"data-fancybox":"",title:"触发效果",href:"https://img-blog.csdnimg.cn/20200613170020686.png"}},[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200613170020686.png",alt:"触发效果"}})])]),t._v(" "),a("p",[a("strong",[t._v("访问正常，但是当点击右边按钮时，就会报错")]),t._v(" "),a("a",{attrs:{"data-fancybox":"",title:"报错效果",href:"https://img-blog.csdnimg.cn/20200613170039780.png"}},[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200613170039780.png",alt:"报错效果"}})])]),t._v(" "),a("blockquote",[a("p",[t._v("大体意思就是从源localhost:8080发出的请求localhost:8081/testB被CORS跨资源共享机制阻止了。因为端口不同。")])]),t._v(" "),a("h2",{attrs:{id:"_4、跨域引起的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、跨域引起的问题"}},[t._v("#")]),t._v(" 4、跨域引起的问题")]),t._v(" "),a("h4",{attrs:{id:"那么为什么会防范跨域这个机制呢，因为如果允许跨域会发生诸多的安全问题。如csrf攻击："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那么为什么会防范跨域这个机制呢，因为如果允许跨域会发生诸多的安全问题。如csrf攻击："}},[t._v("#")]),t._v(" 那么为什么会防范跨域这个机制呢，因为如果允许跨域会发生诸多的安全问题。如CSRF攻击：")]),t._v(" "),a("blockquote",[a("p",[t._v("一个网站用户Bob可能正在浏览聊天论坛，而同时另一个用户Alice也在此论坛中，并且后者刚刚发布了一个具有Bob银行链接的图片消息。\n设想一下，Alice编写了一个在Bob的银行站点上进行取款的form提交的链接，并将此链接作为图片src。如果Bob的银行在cookie中保存他的授权信息，并且此cookie没有过期，那么当Bob的浏览器尝试装载图片时将提交这个取款form和他的cookie，这样在没经Bob同意的情况下便授权了这次事务。")])]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"跨域引起的问题",href:"https://img-blog.csdnimg.cn/20200613170205269.png"}},[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200613170205269.png",alt:"跨域引起的问题"}})])]),t._v(" "),a("h2",{attrs:{id:"_5、跨域cors头信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、跨域cors头信息"}},[t._v("#")]),t._v(" 5、跨域CORS头信息")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("CORS头信息")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Access-Control-Allow-Origin")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指示请求的资源能共享给哪些域"),a("br"),t._v("可以是具体的域名或者*表示所有域。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Access-Control-Allow-Credentials")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指示当请求的凭证标记为 true 时"),a("br"),t._v("是否响应该请求。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Access-Control-Allow-Headers")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用在对预请求的响应中，"),a("br"),t._v("指示实际的请求中可以使用哪些 HTTP 头。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Access-Control-Allow-Methods")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定对预请求的响应中，"),a("br"),t._v("哪些 HTTP 方法允许访问请求的资源。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Access-Control-Expose-Headers")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指示哪些 HTTP 头的名称能在响应中列出。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Access-Control-Max-Age")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指示预请求的结果能被缓存多久。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Access-Control-Request-Headers")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于发起一个预请求，"),a("br"),t._v("告知服务器正式请求会使用那些 HTTP 头。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Access-Control-Request-Method")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于发起一个预请求，"),a("br"),t._v("告知服务器正式请求会使用哪一种 HTTP 请求方法。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Origin")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指示获取资源的请求是从什么域发起的")])])])]),t._v(" "),a("src-comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);