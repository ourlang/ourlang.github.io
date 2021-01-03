(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{383:function(s,t,a){"use strict";a.r(t);var n=a(18),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"channel的死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel的死锁"}},[s._v("#")]),s._v(" channel的死锁")]),s._v(" "),a("h2",{attrs:{id:"_1-channel的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-channel的使用"}},[s._v("#")]),s._v(" 1 channel的使用")]),s._v(" "),a("h3",{attrs:{id:"_1-1-channel分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-channel分类"}},[s._v("#")]),s._v(" 1.1 channel分类")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("分类")]),s._v(" "),a("ul",[a("li",[s._v("无缓冲区 "),a("code",[s._v("ch := make(chan string)")])]),s._v(" "),a("li",[s._v("有缓冲区 "),a("code",[s._v("ch := make(chan string, 2)")])])])]),s._v(" "),a("h3",{attrs:{id:"_1-2-channel两类的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-channel两类的区别"}},[s._v("#")]),s._v(" 1.2 channel两类的区别")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("区别是什么")]),s._v(" "),a("p",[s._v("1、从声明方式来看，有缓冲带了容量，即后面的数字，这里的2表示信道可以存放两个"),a("code",[s._v("stirng")]),s._v("类型的变量\n2、无缓冲信道本身不存储信息，它只负责转手，有人传给它，它就必须要传给别人，如果只有进或者只有出的操作，\n都会造成阻塞。有缓冲的可以存储指定容量个变量，但是超过这个容量再取值也会阻塞。")])]),s._v(" "),a("h3",{attrs:{id:"_1-3-两种channel的使用举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-两种channel的使用举例"}},[s._v("#")]),s._v(" 1.3 两种channel的使用举例")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("无缓冲channel")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"send"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     \n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("p",[s._v("在主协程中新启一个协程且是匿名函数，在子协程中向通道发送"),a("code",[s._v("send")]),s._v("，通过打印结果，\n我们知道在主线程使用"),a("code",[s._v("<-ch")]),s._v("接收到了传给ch的值。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("有缓冲channel")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first"')]),s._v("\n    ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"second"')]),s._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出结果如下")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//first")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//second")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])]),s._v(" "),a("p",[s._v("channel本身结构是一个先进先出的队列，所以这里输出的顺序如结果所示。\n从代码来看这里也不需要重新启动一个goroutine，也不会发生死锁（后面会讲原因）。")]),s._v(" "),a("h2",{attrs:{id:"_2-channel的关闭和遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-channel的关闭和遍历"}},[s._v("#")]),s._v(" 2 channel的关闭和遍历")]),s._v(" "),a("h3",{attrs:{id:"_2-1-关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-关闭"}},[s._v("#")]),s._v(" 2.1 关闭")]),s._v(" "),a("p",[s._v("channel是可以关闭的。对于无缓冲和有缓冲信道关闭的语法都是一样的。注意信道关闭了，就不能往信道传值了，否则会报错。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("channelName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-2-遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-遍历"}},[s._v("#")]),s._v(" 2.2 遍历")]),s._v(" "),a("p",[s._v("有缓冲信道是有容量的，所以是可以遍历的，并且支持使用我们熟悉的range遍历。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    chs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    chs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first"')]),s._v("\n    chs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"second"')]),s._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" chs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_3-死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-死锁"}},[s._v("#")]),s._v(" 3 死锁")]),s._v(" "),a("h3",{attrs:{id:"_3-1-死锁现场1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-死锁现场1"}},[s._v("#")]),s._v(" 3.1 死锁现场1")]),s._v(" "),a("blockquote",[a("p",[s._v("下面这两种情况，即无论是向无缓冲信道传值还是取值，都会发生死锁。")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一种情况")]),s._v("\n\tch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"channelValue"')]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//第二种情况")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//ch := make(chan string)")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//<-ch")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("原因分析")]),s._v(" "),a("p",[s._v("如上场景是在只有一个"),a("code",[s._v("goroutine")]),s._v("即主"),a("code",[s._v("goroutine")]),s._v("的，且使用的是无缓冲信道的情况下。\n前面提过，无缓冲信道不存储值，无论是传值还是取值都会阻塞。这里只有一个主协程的情况下，\n第一种情况是阻塞在传值，第二种情况是阻塞在取值。因为一直卡住主协程，系统一直在等待，所以系统判断为死锁，\n最终报deadlock错误并结束程序。")])]),s._v(" "),a("h3",{attrs:{id:"_3-2-死锁现场2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-死锁现场2"}},[s._v("#")]),s._v(" 3.2 死锁现场2")]),s._v(" "),a("blockquote",[a("p",[s._v("紧接着上面死锁现场1的延伸场景，我们提到延伸场景没有死锁是因为主协程发车走了，\n所以子协程也只能回家。也就是两者没有耦合的关系。")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     ch1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     ch2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         ch2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ch2 value"')]),s._v("\n         ch1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ch1 value"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      \n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" ch1\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//fatal error: all goroutines are asleep - deadlock!")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("原因分析")]),s._v(" "),a("p",[s._v("上面的代码不能保证是主线程的<-ch1先执行还是子协程的代码先执行。")]),s._v(" "),a("p",[s._v('如果主协程先执行到<-ch1，显然会阻塞等待有其他协程往ch1传值。终于等到子协程运行了，结果子协程运行ch2 <- "ch2 value"就阻塞了，因为是无缓冲，所以必须有下家接收值才行，但是等了半天也没有人来传值。')]),s._v(" "),a("p",[s._v("所以这时候就出现了主协程等子协程的ch1，子协程在等ch2的接收者，ch1<-“ch1 value”语句迟迟拿不到执行权，于是大家都在相互等待，系统看不下去了，判定死锁，程序结束。")]),s._v(" "),a("p",[s._v("相反执行顺序也是一样。")])]),s._v(" "),a("h3",{attrs:{id:"_3-3-死锁现场3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-死锁现场3"}},[s._v("#")]),s._v(" 3.3 死锁现场3")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    chs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    chs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first"')]),s._v("\n    chs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"second"')]),s._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" chs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("原因分析")]),s._v(" "),a("p",[s._v("为什么会在输出完chs信道所有缓存值后会死锁呢？\n其实也很简单，虽然这里的chs是带有缓冲的信道，但是容量只有两个，当两个输出完之后，可以简单的将此时的信道等价于无缓冲的信道。\n显然对于无缓冲的信道只是单纯的读取元素是会造成阻塞的，而且是在主协程，所以和死锁现场1等价，故而会死锁。")])]),s._v(" "),a("h2",{attrs:{id:"_4-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-总结"}},[s._v("#")]),s._v(" 4 总结")]),s._v(" "),a("ul",[a("li",[s._v("channel是协程之间沟通的桥梁")]),s._v(" "),a("li",[s._v("channel分为无缓冲信道和有缓冲信道")]),s._v(" "),a("li",[s._v("channel使用时要注意是否构成死锁以及各种死锁产生的原因")])]),s._v(" "),a("src-comment")],1)}),[],!1,null,null,null);t.default=e.exports}}]);