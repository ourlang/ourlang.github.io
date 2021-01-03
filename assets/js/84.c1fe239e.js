(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{430:function(t,_,v){"use strict";v.r(_);var e=v(18),d=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"权限模块设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#权限模块设计"}},[t._v("#")]),t._v(" 权限模块设计")]),t._v(" "),v("h2",{attrs:{id:"_1-什么是openid、oauth"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是openid、oauth"}},[t._v("#")]),t._v(" 1 什么是OpenID、OAuth")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),v("p",[t._v("无论是Web端还是移动端，现在第三方应用账户登录已经成为了标配，任意打开个网站都可以看到，QQ/微信账号登录的字样。使用第三方账户的登录的过程，既要限制用户身份只让有效注册用户才能登录，还要根据注册用户的不同身份来控制能浏览的内容，这就需要认证和授权")])]),t._v(" "),v("ul",[v("li",[t._v("OpenID：Authentication 认证 ----\x3e验证用户账号密码是否正确")]),t._v(" "),v("li",[t._v("OAuth ：Authorization   授权 ----\x3e 先进行OpenID验证，通过后再根据不同用户来控制用户的功能权限")])]),t._v(" "),v("h2",{attrs:{id:"_2-oauth四种授权模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-oauth四种授权模式"}},[t._v("#")]),t._v(" 2 OAuth四种授权模式")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("授权模式")]),t._v(" "),v("p",[t._v("OAuth：比如用户在QQ授权页面输入QQ的账号和密码，QQ验证成功之后，返回 access_token，然后自身系统拿到 access_token 之后，再去请求QQ的用户 API，QQ授权中心验证 access_token，如果验证通过，则返回用户 API 的请求数据给自身的系统。")])]),t._v(" "),v("h3",{attrs:{id:"_2-1-授权码模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-授权码模式"}},[t._v("#")]),t._v(" 2.1 授权码模式")]),t._v(" "),v("p",[t._v("授权码模式（authorization code）是功能最完整、流程最严密的授权模式，code保证了token的安全性，即使code被拦截，由于没有app_secret，也是无法通过code获得token的。")]),t._v(" "),v("h4",{attrs:{id:"_2-1-1-角色行为与功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-角色行为与功能"}},[t._v("#")]),t._v(" 2.1.1 角色行为与功能")]),t._v(" "),v("ul",[v("li",[t._v("资源所有者")])]),t._v(" "),v("p",[t._v("只需要允许或拒绝第三方应用获得授权")]),t._v(" "),v("ul",[v("li",[t._v("第三方应用")])]),t._v(" "),v("p",[t._v("申请成为资源服务器的第三方应用")]),t._v(" "),v("p",[t._v("获取资源服务器提供的资源")]),t._v(" "),v("ul",[v("li",[t._v("授权服务器")])]),t._v(" "),v("p",[t._v("提供授权许可code、令牌token等")]),t._v(" "),v("ul",[v("li",[t._v("资源服务器")])]),t._v(" "),v("p",[t._v("提供给第三方应用注册接口，需要提供给第三方应用app_id和app_secret")]),t._v(" "),v("p",[t._v("提供给第三方应用开放资源的接口")]),t._v(" "),v("h3",{attrs:{id:"_2-2-隐式授权模式-简化模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-隐式授权模式-简化模式"}},[t._v("#")]),t._v(" 2.2 隐式授权模式/简化模式")]),t._v(" "),v("p",[t._v("和授权码模式类似，只不过少了获取code的步骤，是直接获取令牌token的，适用于公开的浏览器单页应用，令牌直接从授权服务器返回，不支持刷新令牌，且没有code安全保证，令牌容易因为被拦截窃听而泄露。")]),t._v(" "),v("h3",{attrs:{id:"_2-3-密码模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-密码模式"}},[t._v("#")]),t._v(" 2.3 密码模式")]),t._v(" "),v("p",[t._v("使用用户名/密码作为授权方式从授权服务器上获取令牌，一般不支持刷新令牌。")]),t._v(" "),v("h3",{attrs:{id:"_2-4-客户端凭证模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-客户端凭证模式"}},[t._v("#")]),t._v(" 2.4 客户端凭证模式")]),t._v(" "),v("p",[t._v("一般用于资源服务器是应用的一个后端模块，客户端向认证服务器验证身份来获取令牌。\n"),v("a",{attrs:{"data-fancybox":"",title:"OAuth2",href:"/img/blogImage/OAuth2.png"}},[v("img",{attrs:{src:"/img/blogImage/OAuth2.png",alt:"OAuth2"}})])]),t._v(" "),v("h2",{attrs:{id:"_3-具体表结构说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-具体表结构说明"}},[t._v("#")]),t._v(" 3 具体表结构说明")]),t._v(" "),v("h3",{attrs:{id:"_3-1-tb-system-系统表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-tb-system-系统表"}},[t._v("#")]),t._v(" 3.1 tb_system 系统表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("数据库字段")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("字段中文说明")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("system_id")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("系统编码")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("system_name")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("系统中文名称描述")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("company_id")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("公司id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("company_name")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("公司中文名称")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("system_url")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("对应系统的url")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("model_name")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("模块请求路径名称")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("model_port")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("模块端口号")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("is_delete")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑删除 1 表示是，0 表示否")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("create_time")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("记录时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("update_time")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("更新时间")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"_3-2-tb-role角色表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-tb-role角色表"}},[t._v("#")]),t._v(" 3.2 tb_role角色表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("数据库字段")]),t._v(" "),v("th",[t._v("字段中文说明")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("role_id")]),t._v(" "),v("td",[t._v("角色id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("role_name")]),t._v(" "),v("td",[t._v("角色名称")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("system_id")]),t._v(" "),v("td",[t._v("系统id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("company_id")]),t._v(" "),v("td",[t._v("公司id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("is_delete")]),t._v(" "),v("td",[t._v("逻辑删除 1 表示是，0 表示否")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("create_time")]),t._v(" "),v("td",[t._v("记录时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("update_time")]),t._v(" "),v("td",[t._v("更新时间")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"_3-3-tb-authority-权限表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-tb-authority-权限表"}},[t._v("#")]),t._v(" 3.3 tb_authority 权限表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("数据库字段")]),t._v(" "),v("th",[t._v("字段中文说明")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("authority_id")]),t._v(" "),v("td",[t._v("权限主键id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("authority_name")]),t._v(" "),v("td",[t._v("权限名称")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("authority_url")]),t._v(" "),v("td",[t._v("权限对应模块的vue路径（备用）")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("company_id")]),t._v(" "),v("td",[t._v("公司id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("system_id")]),t._v(" "),v("td",[t._v("系统编码")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("permission")]),t._v(" "),v("td",[t._v("功能许可编码")]),t._v(" "),v("td",[t._v("system:user:add")])]),t._v(" "),v("tr",[v("td",[t._v("is_delete")]),t._v(" "),v("td",[t._v("逻辑删除 1 表示是，0 表示否")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("create_time")]),t._v(" "),v("td",[t._v("记录时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("update_time")]),t._v(" "),v("td",[t._v("更新时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("remarks")]),t._v(" "),v("td",[t._v("备用")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"_3-4-tb-user-role用户角色表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-tb-user-role用户角色表"}},[t._v("#")]),t._v(" 3.4 tb_user_role用户角色表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("数据库字段")]),t._v(" "),v("th",[t._v("字段中文说明")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("user_id")]),t._v(" "),v("td",[t._v("用户id")]),t._v(" "),v("td",[t._v("用户中心传参数过来")])]),t._v(" "),v("tr",[v("td",[t._v("role_id")]),t._v(" "),v("td",[t._v("角色id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("role_name")]),t._v(" "),v("td",[t._v("角色名称")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("company_id")]),t._v(" "),v("td",[t._v("公司id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("system_id")]),t._v(" "),v("td",[t._v("系统id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("create_time")]),t._v(" "),v("td",[t._v("记录时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("update_time")]),t._v(" "),v("td",[t._v("更新时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("is_delete")]),t._v(" "),v("td",[t._v("逻辑删除 1 表示是，0 表示否")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"_3-5-tb-role-authority角色菜单表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-tb-role-authority角色菜单表"}},[t._v("#")]),t._v(" 3.5 tb_role_authority角色菜单表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("数据库字段")]),t._v(" "),v("th",[t._v("字段中文说明")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("role_id")]),t._v(" "),v("td",[t._v("角色id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("authority_id")]),t._v(" "),v("td",[t._v("菜单id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("system_id")]),t._v(" "),v("td",[t._v("系统id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("company_id")]),t._v(" "),v("td",[t._v("公司id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("is_delete")]),t._v(" "),v("td",[t._v("逻辑删除 1 表示是，0 表示否")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("create_time")]),t._v(" "),v("td",[t._v("记录时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("update_time")]),t._v(" "),v("td",[t._v("更新时间")]),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"_4-多语言开源项目对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-多语言开源项目对比"}},[t._v("#")]),t._v(" 4 多语言开源项目对比")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("编程语言")]),t._v(" "),v("th",[t._v("github地址")]),t._v(" "),v("th",[t._v("点赞数")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("java")]),t._v(" "),v("td",[t._v("https://github.com/wuyouzhuguli/SpringAll")]),t._v(" "),v("td",[t._v("10.9k")]),t._v(" "),v("td",[t._v("基于spring security 说明文档比较齐全 https://mrbird.cc")])]),t._v(" "),v("tr",[v("td",[t._v("go")]),t._v(" "),v("td",[t._v("https://github.com/ory/hydra")]),t._v(" "),v("td",[t._v("7.5k")]),t._v(" "),v("td",[t._v("有一定的资料 https://www.ibm.com/developerworks/cn/security/se-bootstrap-hydra-oauth2/index.html")])]),t._v(" "),v("tr",[v("td",[t._v("c#")]),t._v(" "),v("td",[t._v("https://github.com/IdentityServer/IdentityServer4")]),t._v(" "),v("td",[t._v("5.5k")]),t._v(" "),v("td",[t._v("微软开源 https://identityserver.io")])])])]),t._v(" "),v("src-comment")],1)}),[],!1,null,null,null);_.default=d.exports}}]);