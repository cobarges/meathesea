webpackJsonp([1],{312:function(t,e,a){a(635);var s=a(300)(a(553),a(682),"data-v-611dbb21",null);t.exports=s.exports},468:function(t,e,a){t.exports=a.p+"static/img/logo.dbf377a.png"},553:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(143),r=a.n(s),i=a(37),n=a(55),o=a(23),l=a(139);e.default={mounted:function(){},data:function(){return{username:"",email:"",password:"",cpassword:"",type:"USER",errorMessage:null,errorMessage2:null,errorMessage3:null,errorMessage4:null,errorMessage5:null,errorMessage6:null,errorMessage7:null,successMessage:null,user:n.a.user,tokenData:n.a.tokenData,schools:null,schoolIndex:null,config:o.default,common:l.a,visibility:"password",visibilityC:"password"}},methods:{showPassword:function(t){"password"===t?this.visibility="text":this.visibilityC="text"},hidePassword:function(t){"cpassword"===t?this.visibilityC="password":this.visibility="password"},signUp:function(){var t=this;this.validate("email"),this.validate("username"),this.validate("password"),this.validate("cpassword");var e={username:this.username,email:this.email,password:this.password,config:o.default,account_type:this.type,referral_code:null,status:"ADMIN"};null===this.errorMessage&&null===this.errorMessage2&&null===this.errorMessage3&&null===this.errorMessage4&&null===this.errorMessage5&&null===this.errorMessage6&&null===this.errorMessage7&&($("#loading").css({display:"block"}),this.APIRequest("accounts/create",e).then(function(e){if($("#loading").css({display:"none"}),null!==e.error)if(100===e.error.status){var a=e.error.message;void 0!==r()(a.username)&&void 0!==a.username?t.errorMessage=a.username[0]:void 0!==r()(a.email)&&void 0!==a.email&&(t.errorMessage=a.email[0])}else null!==e.data&&e.data>0&&t.login()}))},redirect:function(t){i.a.push(t)},strong:function(){this.successMessage="Strong password."},validate:function(t){this.successMessage=null;var e=/\s/;"username"===t?(this.errorMessage=null,e.test(this.username)?this.errorMessage="Username should not contain a space.":this.username.length<6?this.errorMessage2="Username must be atleast 6 characters.":(this.errorMessage=null,this.errorMessage2=null)):"email"===t?(this.errorMessage3=null,!1===n.a.validateEmail(this.email)?this.errorMessage3="You have entered an invalid email address.":this.errorMessage3=null):"password"===t?(this.errorMessage4=null,this.password.length<l.a.passwordLimit?this.errorMessage4="Password must be atleast "+l.a.passwordLimit+" characters.":/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(this.password)?(this.strong(),this.errorMessage4=null,this.errorMessage5=null):this.errorMessage5="Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter."):"cpassword"===t?(this.errorMessage6=null,this.successMessage=null,0!==this.password.localeCompare(this.cpassword)?this.errorMessage6="Password did not match.":this.errorMessage6=null):this.username.length>=6&&null!==this.email&&null!==this.password&&this.password.length>=6&&0===this.password.localeCompare(this.cpassword)&&null!==this.type&&!0===n.a.validateEmail(this.email)?this.errorMessage=null:(this.errorMessage7="Please fill in all required fields.",this.errorMessage7=null)},login:function(){var t=this;n.a.authenticate(this.username,this.password,function(t){i.a.push("dashboard")},function(e,a){$("#loading").css({display:"none"}),t.errorMessage=401===a?"Username and Password did not match.":402===a?e.error:"Cannot log in? Contact us through email: "+t.common.APP_EMAIL})},openModal:function(t){$(t).modal("show")}}}},597:function(t,e,a){e=t.exports=a(440)(),e.push([t.i,".holder[data-v-611dbb21],.signup-container[data-v-611dbb21]{margin-top:25px}.signup-header[data-v-611dbb21]{height:100px;color:#060;width:100%;float:left;text-align:center}.signup-header img[data-v-611dbb21]{height:100px!important;width:auto!important}.signup-header img[data-v-611dbb21]:hover{cursor:pointer}.header-title[data-v-611dbb21]{width:90%;margin:25px 5% 0;font-size:24px;font-weight:700px}.signup-holder[data-v-611dbb21]{width:90%;margin:0 5%;float:left}.input-holder[data-v-611dbb21]{width:90%;margin:0 5%}.form-control[data-v-611dbb21]{height:45px!important}.btn[data-v-611dbb21]{height:50px!important}.input-group[data-v-611dbb21]{margin-top:5px;margin-bottom:5px}.site-title[data-v-611dbb21]{margin-top:25px;width:100%;float:left}.site-title img[data-v-611dbb21]{width:50px;float:left;margin-right:10px}.site-title .app-name[data-v-611dbb21]{float:left}.account-type[data-v-611dbb21]{width:120px!important}.options[data-v-611dbb21]{width:90%;margin:0 5%;float:left}.options button[data-v-611dbb21]{width:49%!important;float:left!important;height:60px!important}.input-group label[data-v-611dbb21]{width:100%;float:left;line-height:50px;text-align:center}.input-group-addon[data-v-611dbb21]{width:15%!important;text-align:center!important;padding:0!important;display:block!important;line-height:43px!important}.input-group label b[data-v-611dbb21]:hover{cursor:pointer}@media (max-width:991px){.custom-holder[data-v-611dbb21]{box-shadow:0 0 0 0 #fff!important;margin-top:50px!important}}","",{version:3,sources:["C:/xampp/htdocs/meathesea/src/components/increment/basic/Signup.vue"],names:[],mappings:"AACA,4DACE,eAAiB,CAClB,AACD,gCACE,aAAc,AACd,WAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,oCACE,uBAAyB,AACzB,oBAAuB,CACxB,AACD,0CACE,cAAgB,CACjB,AACD,+BACE,UAAW,AACX,iBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACpB,AACD,gCACE,UAAW,AACX,YAAkB,AAClB,UAAY,CACb,AACD,+BACE,UAAW,AACX,WAAmB,CACpB,AACD,+BACE,qBAAwB,CACzB,AACD,sBACE,qBAAwB,CACzB,AACD,8BACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,6BACE,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,iCAEE,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,uCACE,UAAY,CACb,AACD,+BACE,qBAAwB,CACzB,AACD,0BACE,UAAW,AACX,YAAmB,AACnB,UAAY,CACb,AACD,iCACE,oBAAsB,AACtB,qBAAuB,AACvB,qBAAwB,CACzB,AACD,oCACE,WAAY,AACZ,WAAY,AACZ,iBAAkB,AAClB,iBAAmB,CACpB,AACD,oCACE,oBAAsB,AACtB,4BAA8B,AAC9B,oBAAwB,AACxB,wBAA0B,AAC1B,0BAA6B,CAC9B,AACD,4CACE,cAAgB,CACjB,AAED,yBACA,gCACI,kCAAoC,AACpC,yBAA4B,CAC/B,CACA",file:"Signup.vue",sourcesContent:["\n.signup-container[data-v-611dbb21], .holder[data-v-611dbb21]{\r\n  margin-top: 25px;\n}\n.signup-header[data-v-611dbb21]{\r\n  height: 100px;\r\n  color: #006600;\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.signup-header img[data-v-611dbb21]{\r\n  height: 100px !important;\r\n  width: auto !important;\n}\n.signup-header img[data-v-611dbb21]:hover{\r\n  cursor: pointer;\n}\n.header-title[data-v-611dbb21]{\r\n  width: 90%;\r\n  margin:  25px 5% 0 5%;\r\n  font-size: 24px;\r\n  font-weight: 700px;\n}\n.signup-holder[data-v-611dbb21]{\r\n  width: 90%;\r\n  margin: 0 5% 0 5%;\r\n  float: left;\n}\n.input-holder[data-v-611dbb21]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\n}\n.form-control[data-v-611dbb21]{\r\n  height: 45px !important;\n}\n.btn[data-v-611dbb21]{\r\n  height: 50px !important;\n}\n.input-group[data-v-611dbb21]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\n}\n.site-title[data-v-611dbb21]{\r\n  margin-top: 25px;\r\n  width: 100%;\r\n  float: left;\n}\n.site-title img[data-v-611dbb21]{\r\n  width: 50px;\r\n  width: 50px;\r\n  float: left;\r\n  margin-right: 10px;\n}\n.site-title .app-name[data-v-611dbb21]{\r\n  float: left;\n}\n.account-type[data-v-611dbb21]{\r\n  width: 120px !important;\n}\n.options[data-v-611dbb21]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\r\n  float: left;\n}\n.options button[data-v-611dbb21]{\r\n  width: 49% !important;\r\n  float: left !important;\r\n  height: 60px !important;\n}\n.input-group label[data-v-611dbb21]{\r\n  width: 100%;\r\n  float: left;\r\n  line-height: 50px;\r\n  text-align: center;\n}\n.input-group-addon[data-v-611dbb21]{\r\n  width: 15% !important;\r\n  text-align: center !important;\r\n  padding: 0px !important;\r\n  display: block !important;\r\n  line-height: 43px !important;\n}\n.input-group label b[data-v-611dbb21]:hover{\r\n  cursor: pointer;\n}\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.custom-holder[data-v-611dbb21]{\r\n    box-shadow: 0 0 0 0 #fff !important;\r\n    margin-top: 50px !important;\n}\n}\r\n"],sourceRoot:""}])},635:function(t,e,a){var s=a(597);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(441)("c73c1ea8",s,!0)},682:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row holder"},[s("div",{staticClass:"col-md-6 col-lg-4 mx-auto signup-container"},[s("div",{staticClass:"signup-wrapper"},[s("div",{staticClass:"signup-header",staticStyle:{"margin-top":"50px"}},[s("img",{attrs:{src:a(468)},on:{click:function(e){return t.redirect("/")}}})]),t._v(" "),s("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"20px"}},[t._v("\n        Register to "),s("b",{staticClass:"text-primary"},[t._v(t._s(t.common.APP_NAME))])]),t._v(" "),s("div",{staticClass:"signup-holder"},[null!==t.errorMessage?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage))])]):t._e(),t._v(" "),null!==t.errorMessage2?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage2))])]):t._e(),t._v(" "),null!==t.errorMessage3?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage3))])]):t._e(),t._v(" "),null!==t.errorMessage4?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage4))])]):t._e(),t._v(" "),null!==t.errorMessage5?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage5))])]):t._e(),t._v(" "),null!==t.errorMessage6?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage6))])]):t._e(),t._v(" "),null!==t.errorMessage7?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage7))])]):t._e(),t._v(" "),null!==t.successMessage?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-success text-center"},[s("b",[t._v("Wow!")]),t._v(" "+t._s(t.successMessage))])]):t._e(),t._v(" "),s("div",[s("div",{staticClass:"input-group login-spacer"},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control form-control-login",attrs:{type:"text",placeholder:"Username","aria-describedby":"addon-1"},domProps:{value:t.username},on:{keyup:function(e){return t.validate("username")},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-group login-spacer"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-login",attrs:{type:"text",placeholder:"Email","aria-describedby":"addon-1"},domProps:{value:t.email},on:{keyup:function(e){return t.validate("email")},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-group"},[t._m(2),t._v(" "),"checkbox"===t.visibility?s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Password","aria-describedby":"addon-2",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{keyup:function(e){return t.validate("password")},change:function(e){var a=t.password,s=e.target,r=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.password=a.concat([null])):i>-1&&(t.password=a.slice(0,i).concat(a.slice(i+1)))}else t.password=r}}}):"radio"===t.visibility?s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Password","aria-describedby":"addon-2",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{keyup:function(e){return t.validate("password")},change:function(e){t.password=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Password","aria-describedby":"addon-2",type:t.visibility},domProps:{value:t.password},on:{keyup:function(e){return t.validate("password")},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-addon",staticStyle:{background:"white"}},["password"==t.visibility?s("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.showPassword("password")}}}):t._e(),t._v(" "),"text"==t.visibility?s("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.hidePassword("password")}}}):t._e()])]),t._v(" "),s("div",{staticClass:"input-group login-spacer"},[t._m(3),t._v(" "),"checkbox"===t.visibilityC?s("input",{directives:[{name:"model",rawName:"v-model",value:t.cpassword,expression:"cpassword"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Confirm Password","aria-describedby":"addon-2",type:"checkbox"},domProps:{checked:Array.isArray(t.cpassword)?t._i(t.cpassword,null)>-1:t.cpassword},on:{keyup:function(e){return t.validate("cpassword")},change:function(e){var a=t.cpassword,s=e.target,r=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.cpassword=a.concat([null])):i>-1&&(t.cpassword=a.slice(0,i).concat(a.slice(i+1)))}else t.cpassword=r}}}):"radio"===t.visibilityC?s("input",{directives:[{name:"model",rawName:"v-model",value:t.cpassword,expression:"cpassword"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Confirm Password","aria-describedby":"addon-2",type:"radio"},domProps:{checked:t._q(t.cpassword,null)},on:{keyup:function(e){return t.validate("cpassword")},change:function(e){t.cpassword=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.cpassword,expression:"cpassword"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Confirm Password","aria-describedby":"addon-2",type:t.visibilityC},domProps:{value:t.cpassword},on:{keyup:function(e){return t.validate("cpassword")},input:function(e){e.target.composing||(t.cpassword=e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-addon",staticStyle:{background:"white"}},["password"==t.visibilityC?s("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.showPassword("cpassword")}}}):t._e(),t._v(" "),"text"==t.visibilityC?s("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.hidePassword("cpassword")}}}):t._e()])]),t._v(" "),s("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(e){return t.signUp()}}},[t._v("Signup")]),t._v(" "),s("div",{staticClass:"input-group login-spacer"},[s("label",[t._v("By signing up, you agree to our "),s("b",{staticClass:"text-primary",on:{click:function(e){return t.openModal("#termsAndConditionsModal")}}},[t._v("Terms")]),t._v(" and "),s("b",{staticClass:"text-primary",on:{click:function(e){return t.openModal("#privacyModal")}}},[t._v("Privacy Policy")])])]),t._v(" "),s("div",{staticClass:"input-group login-spacer",staticStyle:{"margin-top":"50px","border-top":"solid 1px #ddd"}},[s("label",[t._v("Have an account? "),s("b",{staticClass:"text-primary",on:{click:function(e){return t.redirect("/login")}}},[t._v("Login")])])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon",attrs:{id:"addon-1"}},[a("i",{staticClass:"fa fa-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon",attrs:{id:"addon-1"}},[a("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon",attrs:{id:"addon-2"}},[a("i",{staticClass:"fa fa-key"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon",attrs:{id:"addon-2"}},[a("i",{staticClass:"fa fa-key"})])}]}}});
//# sourceMappingURL=1.b80a4717670b952c7992.js.map