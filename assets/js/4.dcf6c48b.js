(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{292:function(A,e,t){},293:function(A,e,t){var i=t(0),s=t(294);i({global:!0,forced:parseInt!=s},{parseInt:s})},294:function(A,e,t){var i=t(2),s=t(146).trim,o=t(147),a=i.parseInt,r=/^[+-]?0[Xx]/,n=8!==a(o+"08")||22!==a(o+"0x16");A.exports=n?function(A,e){var t=s(String(A));return a(t,e>>>0||(r.test(t)?16:10))}:a},317:function(A,e,t){const{webm:i,mp4:s}=t(318),o="undefined"!=typeof navigator&&parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10&&!window.MSStream;A.exports=class{constructor(){o?this.noSleepTimer=null:(this.noSleepVideo=document.createElement("video"),this.noSleepVideo.setAttribute("muted",""),this.noSleepVideo.setAttribute("title","No Sleep"),this.noSleepVideo.setAttribute("playsinline",""),this._addSourceToVideo(this.noSleepVideo,"webm",i),this._addSourceToVideo(this.noSleepVideo,"mp4",s),this.noSleepVideo.addEventListener("loadedmetadata",()=>{this.noSleepVideo.duration<=1?this.noSleepVideo.setAttribute("loop",""):this.noSleepVideo.addEventListener("timeupdate",()=>{this.noSleepVideo.currentTime>.5&&(this.noSleepVideo.currentTime=Math.random())})}))}_addSourceToVideo(A,e,t){var i=document.createElement("source");i.src=t,i.type="video/"+e,A.appendChild(i)}enable(){o?(this.disable(),console.warn("\n        NoSleep enabled for older iOS devices. This can interrupt\n        active or long-running network requests from completing successfully.\n        See https://github.com/richtr/NoSleep.js/issues/15 for more details.\n      "),this.noSleepTimer=window.setInterval(()=>{document.hidden||(window.location.href=window.location.href.split("#")[0],window.setTimeout(window.stop,0))},15e3)):this.noSleepVideo.play()}disable(){o?this.noSleepTimer&&(console.warn("\n          NoSleep now disabled for older iOS devices.\n        "),window.clearInterval(this.noSleepTimer),this.noSleepTimer=null):this.noSleepVideo.pause()}}},318:function(A,e){A.exports={webm:"data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=",mp4:"data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQAD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"}},319:function(A,e,t){"use strict";var i=t(292);t.n(i).a},320:function(A,e,t){},332:function(A,e,t){"use strict";t.r(e);t(293);var i=t(317),s=t.n(i),o=["0.5","0.75","1.0","1.25","1.5","2.0"],a={name:"rtyAudio",props:{src:{type:String,default:""},playNext:{type:Boolean,default:!1}},data:function(){return{showLoad:!0,playState:!1,musicMute:!1,audioDuration:0,playProgress:0,playedTime:0,audioSpeed:o,currentSpeed:2,autoplay:!1}},watch:{src:function(A,e){this.playState=!1,this.autoplay=!0}},mounted:function(){console.log(this.src)},methods:{audioLoadSuc:function(A){this.showLoad=!1,this.audioDuration=parseInt(A.target.duration)},changePlayState:function(){var A=new s.a;return document.addEventListener("click",(function e(){document.removeEventListener("click",e,!1),A.enable()}),!1),this.playState?this.$refs.audio.pause():this.$refs.audio.play()},onPlay:function(){this.playState=!0},onPause:function(){this.playState=!1},switchMute:function(){this.$refs.audio.muted=!this.$refs.audio.muted,this.musicMute=this.$refs.audio.muted},audioUpdate:function(A){this.playedTime=parseInt(A.target.currentTime),this.playProgress=parseInt(this.playedTime/this.audioDuration*100),this.$refs.progress.style.width="".concat(this.playProgress,"%")},addDuration:function(){this.$refs.audio.currentTime+=5},reduceDuration:function(){this.$refs.audio.currentTime-=5},changeSpeed:function(){this.currentSpeed+=1,this.currentSpeed>5&&(this.currentSpeed=0),this.$refs.audio.playbackRate=this.audioSpeed[this.currentSpeed]},playEnded:function(){this.playNext&&this.$emit("changSrc",!0)}}},r=(t(319),t(18)),n=Object(r.a)(a,(function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"position"},[t("div",{directives:[{name:"show",rawName:"v-show",value:A.showLoad,expression:"showLoad"}],staticClass:"loading"},[t("span"),A._v(" "),t("span"),A._v(" "),t("span"),A._v(" "),t("span")]),A._v(" "),t("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"audio",attrs:{id:"audio",controls:"",controlsList:"nodownload",oncontextmenu:"return false",preload:"",src:A.src,autoplay:A.autoplay},on:{loadedmetadata:A.audioLoadSuc,play:A.onPlay,pause:A.onPause,timeupdate:A.audioUpdate,ended:A.playEnded}}),A._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!A.showLoad,expression:"!showLoad"}],staticClass:"custom-audio"},[t("div",{staticClass:"flex-content"},[t("div",{staticClass:"audio-controls"},[t("i",{staticClass:"iconfont",class:A.musicMute?"icon-jingyin":"icon-yinliang1",on:{click:A.switchMute}})]),A._v(" "),t("div",{staticClass:"audio-controls"},[t("i",{staticClass:"iconfont icon-shipinkuaituimiao",on:{click:A.reduceDuration}})]),A._v(" "),t("div",{staticClass:"audio-controls play-control"},[t("i",{staticClass:"iconfont",class:A.playState?"icon-zanting":"icon-bofang",on:{click:A.changePlayState}})]),A._v(" "),t("div",{staticClass:"audio-controls"},[t("i",{staticClass:"iconfont icon-shipinkuaijinmiao",on:{click:A.addDuration}})]),A._v(" "),t("div",{staticClass:"audio-controls"},[t("div",{on:{click:A.changeSpeed}},[A._v(A._s(A.audioSpeed[A.currentSpeed])+"x")])])]),A._v(" "),t("div",{ref:"progress",staticClass:"audio-progress"})])])}),[],!1,null,"300c31a3",null);e.default=n.exports},356:function(A,e,t){"use strict";var i=t(320);t.n(i).a},368:function(A,e,t){"use strict";t.r(e);t(57);var i={components:{rtyAudio:t(332).default},data:function(){return{playList:[],randomArticle:"",playNext:!0}},mounted:function(){this.getAllPlayList(s)},methods:{getAllPlayList:function(A){var e=this;A.map((function(A){A.children.map((function(A){A.children.map((function(A){e.playList.push(A)}))}))})),this.getRandomArticle()},getRandomArticle:function(){var A=Math.floor(Math.random()*this.playList.length);this.randomArticle=this.playList[A]},changSrc:function(){this.getRandomArticle()}}},s=[{title:"muisc",children:[{title:"Coldplay",subhead:"Coldplay",children:[{title:"Something Just Like This",subhead:"Coldplay",src:"https://rtyxmd.gitee.io/rtyresourcesmusic/Coldplay/Something%20Just%20Like%20This.mp3"},{title:"Viva La Vida",subhead:"Coldplay",src:"https://rtyxmd.gitee.io/rtyresourcesmusic/Coldplay/Viva%20La%20Vida.mp3"}]},{title:"Chris Medina",subhead:"Chris Medina",children:[{title:"What Are Words",subhead:"--",src:"https://rtyxmd.gitee.io/rtyresourcesmusic/Chris%20Medina/What%20Are%20Words.mp3"}]}]},{title:2018,children:[{title:"十二月",subhead:"December",children:[{title:"教育的意义",subhead:"The Importance of Education",src:"https://rtyxmd.gitee.io/rtyresources2019/2018-December/The Importance of Education.mp3"}]}]},{title:2019,children:[{title:"一月",subhead:"January",children:[{title:"人生选择-爱与恐惧",subhead:"Fear or Love",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-January/Fear or Love.mp3"},{title:"致终将远行的孩子",subhead:"On Children",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-January/On Children.mp3"}]},{title:"二月",subhead:"Feburary",children:[{title:"但是你没有...",subhead:"But You Didn't",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-Feburary/But You Didn't.mp3"}]},{title:"三月",subhead:"March",children:[{title:"乔布斯斯坦福演讲 1",subhead:"Reasons of Dropping Out",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-March/Reasons of Dropping Out.mp3"},{title:"乔布斯斯坦福演讲 2",subhead:"Connecting the Dots",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-March/Connect the Dots.mp3"},{title:"乔布斯斯坦福演讲 3",subhead:"Love and Loss",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-March/Love and Loss.mp3"},{title:"乔布斯斯坦福演讲 4",subhead:"Thoughts on Death",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-March/Thoughts on Death.mp3"},{title:"乔布斯斯坦福演讲 5",subhead:"Stay Hungry Stay Foolish",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-March/Stay Hungry Stay Foolish.mp3"}]},{title:"四月",subhead:"April",children:[{title:"在生存模式中成长",subhead:"Grew Up in Survival Mode",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-April/Grew Up in Survival Mode.mp3"},{title:"在逆境中学习成长",subhead:"Learn More on Bad Days",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-April/Learn More on Bad Days.mp3"}]},{title:"五月",subhead:"May",children:[{title:"保护自然遗产",subhead:"Protecting Natural Heritage",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-May/Protecting Natural Heritage.mp3"},{title:"扭转物种灭绝的趋势",subhead:"Turning the Tide of Extinction",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-May/Turning the Tide of Extinction.mp3"},{title:"肩负我们这一代的责任",subhead:"Responsibilities of Our Generation",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-May/Responsibilities of Our Generation.mp3"},{title:"通力合作，保护动物",subhead:"Taking Concerted Action",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-May/Taking Concerted Action.mp3"}]},{title:"六月",subhead:"June",children:[{title:"埃菲尔铁塔",subhead:"The Eiffel Tower",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-June/The Eiffel Tower.mp3"},{title:"万里长城",subhead:"The Great Wall of China",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-June/The Great Wall of China.mp3"},{title:"自由女神像",subhead:"The Statue of Liberty",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-June/The Statue of Liberty.mp3"}]},{title:"七月",subhead:"July",children:[{title:"减轻书包的重量",subhead:"Reduce the Weight of the Bag",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-July/Reduce the Weight of the Bag.mp3"},{title:"为生活而工作，还是为工作而活",subhead:"Working to live or Living to work",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-July/Working to live or living to work.mp3"}]},{title:"八月",subhead:"August",children:[{title:"万圣节",subhead:"Halloween",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-August/Halloween.mp3"},{title:"母亲节的历史",subhead:"History of Mother's Day",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-August/History of Mother's Day.mp3"},{title:"情人节",subhead:"Saint Valentine's Day",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-August/Saint Valentine's Day.mp3"}]},{title:"九月",subhead:"September",children:[{title:"圣诞节起源 1",subhead:"Origins of Christmas 1",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-September/Origins of Christmas 1.mp3"},{title:"圣诞节起源 2",subhead:"Origins of Christmas 2",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-September/Origins of Christmas 2.mp3"}]},{title:"十月",subhead:"October",children:[{title:"人无完人",subhead:"Nobody Is Perfect",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-October/Nobody Is Perfect.mp3"},{title:"享受此刻的宁静",subhead:"The Serenity of the Moment",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-October/The Serenity of the Moment.mp3"},{title:"生活的意义是什么",subhead:"What Is the Meaning of Life",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-October/What Is the Meaning of Life.mp3"}]},{title:"十一月",subhead:"November",children:[{title:"时间银行",subhead:"The Time Bank",src:"https://rtyxmd.gitee.io/rtyresources2019/2019-November/The Time Bank.mp3"}]}]}],o=i,a=(t(356),t(18)),r=Object(a.a)(o,(function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"play-case"},[t("div",{staticClass:"intro"},[t("div",[A._v(A._s(A.randomArticle.title))]),A._v(" "),t("div",{staticClass:"sub"},[A._v(A._s(A.randomArticle.subhead))])]),A._v(" "),A.randomArticle.src?t("rty-audio",{attrs:{src:A.randomArticle.src,playNext:A.playNext},on:{changSrc:A.changSrc}}):A._e()],1)}),[],!1,null,"d6d57454",null);e.default=r.exports}}]);