(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{399:function(a,t,e){"use strict";e.r(t);var r=e(18),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"java面试题总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java面试题总结"}},[a._v("#")]),a._v(" java面试题总结")]),a._v(" "),e("h2",{attrs:{id:"_1-java基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-java基础"}},[a._v("#")]),a._v(" 1 java基础")]),a._v(" "),e("h3",{attrs:{id:"_1-1-hashmap和hashtable的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-hashmap和hashtable的区别"}},[a._v("#")]),a._v(" 1.1 HashMap和Hashtable的区别")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("ul",[e("li",[a._v("①、HashMap 是线程不安全的,HashTable 是线程安全的")]),a._v(" "),e("li",[a._v("②、由于线程安全,所以 HashTable 的效率比不上 HashMap")]),a._v(" "),e("li",[a._v("③、HashMap最多只允许一条记录的键为null,允许多条记录的值为null，而 HashTable不允许")]),a._v(" "),e("li",[a._v("④、HashMap 默认初始化数组的大小为16,HashTable 为 11，前者扩容时，扩大两倍，后者扩大两倍+1")]),a._v(" "),e("li",[a._v("⑤、HashMap 需要重新计算 hash 值,而 HashTable 直接使用对象的 hashCode")])])]),a._v(" "),e("h3",{attrs:{id:"_1-2-什么是线程安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-什么是线程安全"}},[a._v("#")]),a._v(" 1.2 什么是线程安全")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("blockquote",[e("p",[a._v("【百度百科】线程安全是多线程编程时的计算机程序代码中的一个概念。在拥有共享数据的多条线程并行执行的程序中，线程安全的代码会通过同步机制保证各个线程都可以正常且正确的执行，\n不会出现数据污染等意外情况。")])]),a._v(" "),e("ul",[e("li",[a._v("线程安全就是多线程访问时，采用了加锁机制，当一个线程访问该类的某个数据时，进行保护，其他线程不能进行访问直到该线程读取完，其他线程才可使用。不会出现数据不一致或者数据污染。")]),a._v(" "),e("li",[a._v("线程不安全就是不提供数据访问保护，有可能出现多个线程先后更改数据造成所得到的数据是脏数据")])]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/q669239799/article/details/90614077",target:"_blank",rel:"noopener noreferrer"}},[a._v("如何实现线程安全"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_1-3-死锁的场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-死锁的场景"}},[a._v("#")]),a._v(" 1.3 死锁的场景")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/67570178",target:"_blank",rel:"noopener noreferrer"}},[a._v("死锁举例一"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.jianshu.com/p/68c0fef7b63e",target:"_blank",rel:"noopener noreferrer"}},[a._v("死锁举例二"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_1-4-hashmap如何保证线程安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-hashmap如何保证线程安全"}},[a._v("#")]),a._v(" 1.4 HashMap如何保证线程安全")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("blockquote",[e("p",[a._v("在多线程条件下，容易导致死循环，具体表现为CPU使用率100%。因此多线程环境下保证 HashMap 的线程安全性，主要有如下几种方法：")])]),a._v(" "),e("ul",[e("li",[a._v("1.替换成Hashtable，Hashtable通过对整个表上锁实现线程安全，因此效率比较低")]),a._v(" "),e("li",[a._v("2.使用Collections类的synchronizedMap方法包装一下。方法如下：")])]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//返回由指定映射支持的同步（线程安全的）映射")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("K")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("K")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("synchronizedMap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("K")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("3.使用ConcurrentHashMap，它使用分段锁来保证线程安全\n通过前两种方式获得的线程安全的HashMap在读写数据的时候会对整个容器上锁，而ConcurrentHashMap并不需要对整个容器上锁，它只需要锁住要修改的部分就行了")])])]),a._v(" "),e("h3",{attrs:{id:"_1-5-如何设计线程池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-如何设计线程池"}},[a._v("#")]),a._v(" 1.5 如何设计线程池")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/zhaohong_bo/article/details/89303522",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java线程池面试题"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/weixin_44189883/article/details/85127723",target:"_blank",rel:"noopener noreferrer"}},[a._v("设计线程池"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"_2-spring相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-spring相关"}},[a._v("#")]),a._v(" 2 spring相关")]),a._v(" "),e("h3",{attrs:{id:"_2-1-设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-设计模式"}},[a._v("#")]),a._v(" 2.1 设计模式")]),a._v(" "),e("p",[a._v("java中用了哪些设计模式，在spring中的应用，举例说明动态代理\n")]),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),e("p"),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.kancloud.cn/sstd521/design/193489",target:"_blank",rel:"noopener noreferrer"}},[a._v("java设计模式"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_2-2-什么是ioc和aop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-什么是ioc和aop"}},[a._v("#")]),a._v(" 2.2 什么是IOC和AOP")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/141204279",target:"_blank",rel:"noopener noreferrer"}},[a._v("什么是IOC和AOP"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_37126357/article/details/100689342",target:"_blank",rel:"noopener noreferrer"}},[a._v("谈谈自己对于 Spring IoC 和 AOP 的理解"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_2-3-spring-bean的作用范围"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-spring-bean的作用范围"}},[a._v("#")]),a._v(" 2.3 spring bean的作用范围")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("ul",[e("li",[a._v("singleton：单例的（默认的），使用singleton定义的Bean是单例的，每次调用getBean都是调用的同一个对象。只要IoC容器一创建就会创建Bean的实例。")]),a._v(" "),e("li",[a._v("prototype：多例的，每次通过Spring IoC容器获取prototype定义的Bean时，容器都将创建一个新的Bean实例。创建时不会实例该Bean，只有调用getBean方法时，才会实例化。")]),a._v(" "),e("li",[a._v("request：作用于web的请求范围，在每一次HTTP请求时，容器会返回Bean的同一个实例，对不同的HTTP请求则会产生一个新的Bean，而且该Bean仅在当前HTTP Request内有效。")]),a._v(" "),e("li",[a._v("session：作用于web的会话范围，在一次HTTP Session中，容器会返回该Bean的同一个实例，对不同的HTTP请求则会产生一个新的Bean，而且该Bean仅在当前HTTP Session内有效。")]),a._v(" "),e("li",[a._v("global-session：作用于集群环境的会话范围（全局会话范围），在一个全局的HTTP Session中，容器返回Bean的同一个实例。当不是集群环境时，它就是session。")])])]),a._v(" "),e("h3",{attrs:{id:"_2-4-aop切面织入方式有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-aop切面织入方式有哪些"}},[a._v("#")]),a._v(" 2.4 aop切面织入方式有哪些")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("blockquote",[e("ul",[e("li",[a._v("1.通知(Advice):\n通知定义了切面是什么以bai及何时使用。描述了切面要完成的工作和何时需要执行这个工作。")]),a._v(" "),e("li",[a._v("2.连接点(Joinpoint):\n程序能够应用通知的一 个“时机”，这些“时机”就是连接点，例如方法被调用时、异常被抛出时等等。")]),a._v(" "),e("li",[a._v("3.切入点(Pointcut)\n通知定义了切面要发生的“故事”和时间，那么切入点就定义了“故事”发生的地点，例如某个类或方法的名称，spring中允许我们方便的用正则表达式来指定")]),a._v(" "),e("li",[a._v("4.切面(Aspect)\n通知和切入点共同组成了切面：时间、地点和要发生的“故事”")]),a._v(" "),e("li",[a._v("5.引入(Introduction)\n引入允许我们向现有的类添加新的方法和属性(spring提供了一个方法注入的功能）")]),a._v(" "),e("li",[a._v("6.目标(Target)\n即被通知的对象，如果没有AOP,那么它的逻辑将要交叉别的事务逻辑，有了AOP之后它可以只关注自己要做的事（AOP让他做爱做的事）")]),a._v(" "),e("li",[a._v("7.代理(proxy)\n应用通知的对象，详细内容参见设计模式里面的代理模式")]),a._v(" "),e("li",[a._v("8.织入(Weaving)\n把切面应用到目标对象来创建新的代理对象的过程，织入一般发生在如下几个时机:\n"),e("ul",[e("li",[a._v("(1)编译时：当一个类文件被编译时进行织入，这需要特殊的编译器才可以做的到，例如AspectJ的织入编译器")]),a._v(" "),e("li",[a._v("(2)类加载时：使用特殊的ClassLoader在目标类被加载到程序之前增强类的字节代码")]),a._v(" "),e("li",[a._v("(3)运行时：切面在运行的某个时刻被织入,SpringAOP就是以这种方式织入切面的，原理应该是使用了JDK的动态代理技术")])])])])]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/yangji0202/p/10939706.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("springAOP的各种织入方式一览"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_2-5-spring中的事务传播行为"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-spring中的事务传播行为"}},[a._v("#")]),a._v(" 2.5 Spring中的事务传播行为")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/happy4java/p/11206804.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring中的事务传播行为"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"_3-数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据库"}},[a._v("#")]),a._v(" 3 数据库")]),a._v(" "),e("h3",{attrs:{id:"_3-1-mysql-innodb和myisam的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-mysql-innodb和myisam的区别"}},[a._v("#")]),a._v(" 3.1 mysql InnoDB和MyISAM的区别")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_35642036/article/details/82820178",target:"_blank",rel:"noopener noreferrer"}},[a._v("MyISAM与InnoDB 的区别"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_3-2-mysql的事务隔离级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-mysql的事务隔离级别"}},[a._v("#")]),a._v(" 3.2 mysql的事务隔离级别")]),a._v(" "),e("p",[a._v("mysql的事务隔离级别分别解决了哪些问题\n")]),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),e("p"),a._v(" "),e("p",[e("a",{attrs:{href:"https://developer.aliyun.com/article/743691",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://developer.aliyun.com/article/743691"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_3-3-select-for-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-select-for-update"}},[a._v("#")]),a._v(" 3.3 select for update")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/143866444",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://zhuanlan.zhihu.com/p/143866444"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000023045909",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://segmentfault.com/a/1190000023045909"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_3-4-mysql如何避免回表查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-mysql如何避免回表查询"}},[a._v("#")]),a._v(" 3.4 MySQL如何避免回表查询")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/myseries/p/11265849.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("MySQL如何避免回表查询？什么是索引覆盖"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_3-5-mysql去重如何实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-mysql去重如何实现"}},[a._v("#")]),a._v(" 3.5 mysql去重如何实现")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/ninglinglong/p/13606763.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.cnblogs.com/ninglinglong/p/13606763.html"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_3-6-字典库如何跨库查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-字典库如何跨库查询"}},[a._v("#")]),a._v(" 3.6 字典库如何跨库查询")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h3",{attrs:{id:"_3-7-数据库的优化的步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-数据库的优化的步骤"}},[a._v("#")]),a._v(" 3.7 数据库的优化的步骤")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/weixin_30613343/article/details/99068660",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/weixin_30613343/article/details/99068660"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_3-8-千万级数据查询优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-千万级数据查询优化"}},[a._v("#")]),a._v(" 3.8 千万级数据查询优化")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h3",{attrs:{id:"_3-9-redis的aof和rdb区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-redis的aof和rdb区别"}},[a._v("#")]),a._v(" 3.9 redis的aof和rdb区别")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h3",{attrs:{id:"_3-10-redis的set和list的应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-10-redis的set和list的应用场景"}},[a._v("#")]),a._v(" 3.10 redis的set和list的应用场景")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h3",{attrs:{id:"_3-11-mysql索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-11-mysql索引"}},[a._v("#")]),a._v(" 3.11 mysql索引")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[a._v("普通索引  唯一索引  主键索引 组合索引 全文索引")])]),a._v(" "),e("h3",{attrs:{id:"_3-12-优化表设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-12-优化表设计"}},[a._v("#")]),a._v(" 3.12 优化表设计")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("blockquote",[e("p",[a._v("1、主键，一定要设计主键。用来唯一地标识表中的某一条记录。它能保证实体的完整性，加快数据库的操作速度，这一点很重要，一定要设置主键。")])]),a._v(" "),e("blockquote",[e("p",[a._v("2、字段命名最好避开保留字。在给字段命名的时候，要尽量避开关键字，以免出了问题而不好查找。虽然在以关键字命名的字段上加''可以不再报错，但保险起见，就不要这么设计。")])]),a._v(" "),e("blockquote",[e("p",[a._v("3、表名长度尽可能短。表名称不要太长，如果有转数据库的需要，表名太长（超过30个字符）无疑会增加转换的工作量。")])]),a._v(" "),e("blockquote",[e("p",[a._v("4、尽可能不使用default null。\nNULL值不能进行索引，影响索引的统计信息，影响优化器的判断。复合索引中只要有一列含有NULL值，那么这一列对于此复合索引就是无效的。")])]),a._v(" "),e("blockquote",[e("p",[a._v("5、时间戳Timestamp。\n每个表的最后都加一个create_time为时间戳类型timestamp的字段，该方式对于调试阶段非常有帮助。")])]),a._v(" "),e("blockquote",[e("p",[a._v("6、少用外键")])])]),a._v(" "),e("h3",{attrs:{id:"_3-13-如何保持mysql和redis中数据的一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-13-如何保持mysql和redis中数据的一致性"}},[a._v("#")]),a._v(" 3.13 如何保持mysql和redis中数据的一致性")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/blog/sql/mysql-redis-uniformity.html"}},[a._v("如何保持mysql和redis中数据的一致性")])],1)]),a._v(" "),e("h2",{attrs:{id:"_4-微服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-微服务"}},[a._v("#")]),a._v(" 4 微服务")]),a._v(" "),e("h3",{attrs:{id:"_4-1-springboot为什么叫零配置服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-springboot为什么叫零配置服务"}},[a._v("#")]),a._v(" 4.1 springboot为什么叫零配置服务")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("blockquote",[e("ul",[e("li",[a._v("1、@SpringBootConfiguration：该注解表示这是一个 SpringBoot 的配置类，其实它就是一个 @Configuration 注解而已。")]),a._v(" "),e("li",[a._v("2、@ComponentScan：开启组件扫描。")]),a._v(" "),e("li",[a._v("3、@EnableAutoConfiguration：从名字就可以看出来，就是这个类开启自动配置的。嗯，自动配置的奥秘全都在这个注解里面")])])])]),a._v(" "),e("h3",{attrs:{id:"_4-2-mq如何保证消息的可靠性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-mq如何保证消息的可靠性"}},[a._v("#")]),a._v(" 4.2 MQ如何保证消息的可靠性")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("blockquote",[e("ul",[e("li",[a._v("1、@SpringBootConfiguration：该注解表示这是一个 SpringBoot 的配置类，其实它就是一个 @Configuration 注解而已。")]),a._v(" "),e("li",[a._v("2、@ComponentScan：开启组件扫描。")]),a._v(" "),e("li",[a._v("3、@EnableAutoConfiguration：从名字就可以看出来，就是这个类开启自动配置的。嗯，自动配置的奥秘全都在这个注解里面")])])])]),a._v(" "),e("h3",{attrs:{id:"_4-3-nacos的权重"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-nacos的权重"}},[a._v("#")]),a._v(" 4.3 nacos的权重")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h3",{attrs:{id:"_4-4-分布式事务如何实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-分布式事务如何实现"}},[a._v("#")]),a._v(" 4.4 分布式事务如何实现")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h2",{attrs:{id:"_5-demo设计思想"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-demo设计思想"}},[a._v("#")]),a._v(" 5 demo设计思想")]),a._v(" "),e("h3",{attrs:{id:"_5-1-a转账给b-如何设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-a转账给b-如何设计"}},[a._v("#")]),a._v(" 5.1 A转账给B 如何设计")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h3",{attrs:{id:"_5-2-搭建http服务的步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-搭建http服务的步骤"}},[a._v("#")]),a._v(" 5.2 搭建http服务的步骤")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h3",{attrs:{id:"_5-3-扫码登录系统如何设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-扫码登录系统如何设计"}},[a._v("#")]),a._v(" 5.3 扫码登录系统如何设计")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h3",{attrs:{id:"_5-4-redis实现token机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-redis实现token机制"}},[a._v("#")]),a._v(" 5.4 redis实现token机制")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h2",{attrs:{id:"_6-其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-其他"}},[a._v("#")]),a._v(" 6 其他")]),a._v(" "),e("h3",{attrs:{id:"_6-1-tcp与udp的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-tcp与udp的区别"}},[a._v("#")]),a._v(" 6.1 TCP与UDP的区别")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/sifanchao/article/details/82285018",target:"_blank",rel:"noopener noreferrer"}},[a._v("TCP与UDP的区别"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_6-2-rpc、rmi、http、rest的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-rpc、rmi、http、rest的区别"}},[a._v("#")]),a._v(" 6.2 RPC、RMI、HTTP、REST的区别")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("blockquote",[e("ul",[e("li",[a._v("RPC：远程服务调用（Remote Procedure Call），加上Protocol后可以称为远程过程调用协议，可以用不同的语言实现，可以借用HTTP协议或者其他协议来实现，一般都是通过基于TCP/IP的自定义协议实现。")]),a._v(" "),e("li",[a._v("HTTP：超文本传输协议（HyperText Transfer Protocal），是应用层的一种网络传输协议，一般格式都是json或者xml，也是基于TCP/IP实现的。")]),a._v(" "),e("li",[a._v("REST：是一种架构风格，是基于HTTP协议的，可以理解称一种API的规范，比如查询都是GET请求，新增都是POST，修改是PUT，删除是DELETE等。")]),a._v(" "),e("li",[a._v("RMI：远程方法调用（Remote Method Invocation），是一种用于实现RPC的java API，仅仅应用在java程序上，依赖于JVM，因为他仅仅支持从一个JVM到另一个JVM的调用。")])])])]),a._v(" "),e("h3",{attrs:{id:"_6-3-什么时候选择递归"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-什么时候选择递归"}},[a._v("#")]),a._v(" 6.3 什么时候选择递归")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("blockquote",[e("p",[a._v("递归，在数学与计算机科学中，是指在函数的定义中使用函数自身的方法。也就是说，递归算法是一种直接或者间接调用自身函数或者方法的算法。\n通俗来说，递归算法的实质是把问题分解成规模缩小的同类问题的子问题，然后递归调用方法来表示问题的解。")])]),a._v(" "),e("ul",[e("li",[a._v("1 优点-----\x3e实现简单,  可读性好")]),a._v(" "),e("li",[a._v("2 缺点-----\x3e\n递归调用，占用空间大。递归太深，易发生栈溢出。可能存在重复计算。")])])]),a._v(" "),e("h3",{attrs:{id:"_6-4-nginx的负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-nginx的负载均衡"}},[a._v("#")]),a._v(" 6.4 nginx的负载均衡")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h3",{attrs:{id:"_6-5-mybatis的二级缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-mybatis的二级缓存"}},[a._v("#")]),a._v(" 6.5 mybatis的二级缓存")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")])]),a._v(" "),e("h3",{attrs:{id:"_6-6-多cpu、多核、多进程、多线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-多cpu、多核、多进程、多线程"}},[a._v("#")]),a._v(" 6.6 多CPU、多核、多进程、多线程")]),a._v(" "),e("details",{staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0",padding:"1.6em","background-color":"#eee"}},[e("summary",{staticStyle:{color:"red",cursor:"default"}},[a._v("点击查看答案")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_38998213/article/details/87688929",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/qq_38998213/article/details/87688929"),e("OutboundLink")],1)])]),a._v(" "),e("src-comment")],1)}),[],!1,null,null,null);t.default=s.exports}}]);