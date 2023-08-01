(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{682:function(e,a,t){"use strict";t.r(a);var l=t(1),c=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ibc-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-middleware"}},[e._v("#")]),e._v(" IBC middleware")]),e._v(" "),t("p",[e._v("Learn how to write your own custom middleware to wrap an IBC application, and understand how to hook different middleware to IBC base applications to form different IBC application stacks {synopsis}.")]),e._v(" "),t("p",[e._v("This document serves as a guide for middleware developers who want to write their own middleware and for chain developers who want to use IBC middleware on their chains.")]),e._v(" "),t("p",[e._v("IBC applications are designed to be self-contained modules that implement their own application-specific logic through a set of interfaces with the core IBC handlers. These core IBC handlers, in turn, are designed to enforce the correctness properties of IBC (transport, authentication, ordering) while delegating all application-specific handling to the IBC application modules. However, there are cases where some functionality may be desired by many applications, yet not appropriate to place in core IBC.")]),e._v(" "),t("p",[e._v("Middleware allows developers to define the extensions as separate modules that can wrap over the base application. This middleware can thus perform its own custom logic, and pass data into the application so that it may run its logic without being aware of the middleware's existence. This allows both the application and the middleware to implement its own isolated logic while still being able to run as part of a single packet flow.")]),e._v(" "),t("h2",{attrs:{id:"pre-requisite-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite readings")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/ibc/overview.html"}},[e._v("IBC Overview")])],1),e._v(" "),t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/ibc/integration.html"}},[e._v("IBC Integration")])],1),e._v(" "),t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/ibc/apps/apps.html"}},[e._v("IBC Application Developer Guide")])],1)]),e._v(" "),t("h2",{attrs:{id:"definitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),t("p",[t("code",[e._v("Middleware")]),e._v(": A self-contained module that sits between core IBC and an underlying IBC application during packet execution. All messages between core IBC and underlying application must flow through middleware, which may perform its own custom logic.")]),e._v(" "),t("p",[t("code",[e._v("Underlying Application")]),e._v(": An underlying application is the application that is directly connected to the middleware in question. This underlying application may itself be middleware that is chained to a base application.")]),e._v(" "),t("p",[t("code",[e._v("Base Application")]),e._v(": A base application is an IBC application that does not contain any middleware. It may be nested by 0 or multiple middleware to form an application stack.")]),e._v(" "),t("p",[t("code",[e._v("Application Stack (or stack)")]),e._v(": A stack is the complete set of application logic (middleware(s) + base application) that gets connected to core IBC. A stack may be just a base application, or it may be a series of middlewares that nest a base application.")]),e._v(" "),t("h2",{attrs:{id:"create-a-custom-ibc-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-ibc-middleware"}},[e._v("#")]),e._v(" Create a custom IBC middleware")]),e._v(" "),t("p",[e._v("IBC middleware will wrap over an underlying IBC application and sits between core IBC and the application. It has complete control in modifying any message coming from IBC to the application, and any message coming from the application to core IBC. Thus, middleware must be completely trusted by chain developers who wish to integrate them, however this gives them complete flexibility in modifying the application(s) they wrap.")]),e._v(" "),t("h4",{attrs:{id:"interfaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWlkZGxld2FyZSBpbXBsZW1lbnRzIHRoZSBJQ1MyNiBNb2R1bGUgaW50ZXJmYWNlCnR5cGUgTWlkZGxld2FyZSBpbnRlcmZhY2UgewogICAgcG9ydHR5cGVzLklCQ01vZHVsZSAvLyBtaWRkbGV3YXJlIGhhcyBhY2NjZXNzIHRvIGFuIHVuZGVybHlpbmcgYXBwbGljYXRpb24gd2hpY2ggbWF5IGJlIHdyYXBwZWQgYnkgbW9yZSBtaWRkbGV3YXJlCiAgICBpY3M0V3JhcHBlcjogSUNTNFdyYXBwZXIgLy8gbWlkZGxld2FyZSBoYXMgYWNjZXNzIHRvIElDUzRXcmFwcGVyIHdoaWNoIG1heSBiZSBjb3JlIElCQyBDaGFubmVsIEhhbmRsZXIgb3IgYSBoaWdoZXItbGV2ZWwgbWlkZGxld2FyZSB0aGF0IHdyYXBzIHRoaXMgbWlkZGxld2FyZS4KfQo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Ly8gVGhpcyBpcyBpbXBsZW1lbnRlZCBieSBJQ1M0IGFuZCBhbGwgbWlkZGxld2FyZSB0aGF0IGFyZSB3cmFwcGluZyBiYXNlIGFwcGxpY2F0aW9uLgovLyBUaGUgYmFzZSBhcHBsaWNhdGlvbiB3aWxsIGNhbGwgYHNlbmRQYWNrZXRgIG9yIGB3cml0ZUFja25vd2xlZGdlbWVudGAgb2YgdGhlIG1pZGRsZXdhcmUgZGlyZWN0bHkgYWJvdmUgdGhlbQovLyB3aGljaCB3aWxsIGNhbGwgdGhlIG5leHQgbWlkZGxld2FyZSB1bnRpbCBpdCByZWFjaGVzIHRoZSBjb3JlIElCQyBoYW5kbGVyLgp0eXBlIElDUzRXcmFwcGVyIGludGVyZmFjZSB7CiAgICBTZW5kUGFja2V0KAogICAgICAgIGN0eCBzZGsuQ29udGV4dCwKICAgICAgICBjaGFuQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICAgICAgICBzb3VyY2VQb3J0IHN0cmluZywKICAgICAgICBzb3VyY2VDaGFubmVsIHN0cmluZywKICAgICAgICB0aW1lb3V0SGVpZ2h0IGNsaWVudHR5cGVzLkhlaWdodCwKICAgICAgICB0aW1lb3V0VGltZXN0YW1wIHVpbnQ2NCwKICAgICAgICBkYXRhIFtdYnl0ZSwKICAgICkgKHNlcXVlbmNlIHVpbnQ2NCwgZXJyIGVycm9yKQoKICAgIFdyaXRlQWNrbm93bGVkZ2VtZW50KAogICAgICAgIGN0eCBzZGsuQ29udGV4dCwKICAgICAgICBjaGFuQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICAgICAgICBwYWNrZXQgZXhwb3J0ZWQuUGFja2V0SSwKICAgICAgICBhY2sgZXhwb3J0ZWQuQWNrbm93bGVkZ2VtZW50LAogICAgKSBlcnJvcgoKICAgIEdldEFwcFZlcnNpb24oCiAgICAgICAgY3R4IHNkay5Db250ZXh0LAogICAgICAgIHBvcnRJRCwKICAgICAgICBjaGFubmVsSUQgc3RyaW5nLAogICAgKSAoc3RyaW5nLCBib29sKQp9Cg=="}}),e._v(" "),t("h3",{attrs:{id:"implement-ibcmodule-interface-and-callbacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implement-ibcmodule-interface-and-callbacks"}},[e._v("#")]),e._v(" Implement "),t("code",[e._v("IBCModule")]),e._v(" interface and callbacks")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("IBCModule")]),e._v(" is a struct that implements the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/module.go#L11-L106",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-26 interface ("),t("code",[e._v("porttypes.IBCModule")]),e._v(")"),t("OutboundLink")],1),e._v(". It is recommended to separate these callbacks into a separate file "),t("code",[e._v("ibc_module.go")]),e._v(". As will be mentioned in the "),t("RouterLink",{attrs:{to:"/ibc/middleware/integration.html"}},[e._v("integration section")]),e._v(", this struct should be different than the struct that implements "),t("code",[e._v("AppModule")]),e._v(" in case the middleware maintains its own internal state and processes separate SDK messages.")],1),e._v(" "),t("p",[e._v("The middleware must have access to the underlying application, and be called before during all ICS-26 callbacks. It may execute custom logic during these callbacks, and then call the underlying application's callback. Middleware "),t("strong",[e._v("may")]),e._v(" choose not to call the underlying application's callback at all. Though these should generally be limited to error cases.")]),e._v(" "),t("p",[e._v("In the case where the IBC middleware expects to speak to a compatible IBC middleware on the counterparty chain, they must use the channel handshake to negotiate the middleware version without interfering in the version negotiation of the underlying application.")]),e._v(" "),t("p",[e._v("Middleware accomplishes this by formatting the version in a JSON-encoded string containing the middleware version and the application version. The application version may as well be a JSON-encoded string, possibly including further middleware and app versions, if the application stack consists of multiple milddlewares wrapping a base application. The format of the version is specified in ICS-30 as the following:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90OyZsdDttaWRkbGV3YXJlX3ZlcnNpb25fa2V5Jmd0OyZxdW90OzogJnF1b3Q7Jmx0O21pZGRsZXdhcmVfdmVyc2lvbl92YWx1ZSZndDsmcXVvdDssCiAgJnF1b3Q7YXBwX3ZlcnNpb24mcXVvdDs6ICZxdW90OyZsdDthcHBsaWNhdGlvbl92ZXJzaW9uX3ZhbHVlJmd0OyZxdW90Owp9Cg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("<middleware_version_key>")]),e._v(" key in the JSON struct should be replaced by the actual name of the key for the corresponding middleware (e.g. "),t("code",[e._v("fee_version")]),e._v(").")]),e._v(" "),t("p",[e._v("During the handshake callbacks, the middleware can unmarshal the version string and retrieve the middleware and application versions. It can do its negotiation logic on "),t("code",[e._v("<middleware_version_value>")]),e._v(", and pass the "),t("code",[e._v("<application_version_value>")]),e._v(" to the underlying application.")]),e._v(" "),t("p",[e._v("The middleware should simply pass the capability in the callback arguments along to the underlying application so that it may be claimed by the base application. The base application will then pass the capability up the stack in order to authenticate an outgoing packet/acknowledgement.")]),e._v(" "),t("p",[e._v("In the case where the middleware wishes to send a packet or acknowledgment without the involvement of the underlying application, it should be given access to the same "),t("code",[e._v("scopedKeeper")]),e._v(" as the base application so that it can retrieve the capabilities by itself.")]),e._v(" "),t("h3",{attrs:{id:"handshake-callbacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshake-callbacks"}},[e._v("#")]),e._v(" Handshake callbacks")]),e._v(" "),t("h4",{attrs:{id:"onchanopeninit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchanopeninit"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanOpenInit")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTW9kdWxlKSBPbkNoYW5PcGVuSW5pdCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIG9yZGVyIGNoYW5uZWx0eXBlcy5PcmRlciwKICAgIGNvbm5lY3Rpb25Ib3BzIFtdc3RyaW5nLAogICAgcG9ydElEIHN0cmluZywKICAgIGNoYW5uZWxJRCBzdHJpbmcsCiAgICBjaGFubmVsQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICAgIGNvdW50ZXJwYXJ0eSBjaGFubmVsdHlwZXMuQ291bnRlcnBhcnR5LAogICAgdmVyc2lvbiBzdHJpbmcsCikgKHN0cmluZywgZXJyb3IpIHsKICAgIGlmIHZlcnNpb24gIT0gJnF1b3Q7JnF1b3Q7IHsKICAgICAgICAvLyB0cnkgdG8gdW5tYXJzaGFsIEpTT04tZW5jb2RlZCB2ZXJzaW9uIHN0cmluZyBhbmQgcGFzcwogICAgICAgIC8vIHRoZSBhcHAtc3BlY2lmaWMgdmVyc2lvbiB0byBhcHAgY2FsbGJhY2suCiAgICAgICAgLy8gb3RoZXJ3aXNlLCBwYXNzIHZlcnNpb24gZGlyZWN0bHkgdG8gYXBwIGNhbGxiYWNrLgogICAgICAgIG1ldGFkYXRhLCBlcnIgOj0gVW5tYXJzaGFsKHZlcnNpb24pCiAgICAgICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgICAgIC8vIFNpbmNlIGl0IGlzIHZhbGlkIGZvciBmZWUgdmVyc2lvbiB0byBub3QgYmUgc3BlY2lmaWVkLAogICAgICAgICAgICAvLyB0aGUgYWJvdmUgbWlkZGxld2FyZSB2ZXJzaW9uIG1heSBiZSBmb3IgYW5vdGhlciBtaWRkbGV3YXJlLgogICAgICAgICAgICAvLyBQYXNzIHRoZSBlbnRpcmUgdmVyc2lvbiBzdHJpbmcgb250byB0aGUgdW5kZXJseWluZyBhcHBsaWNhdGlvbi4KICAgICAgICAgICAgcmV0dXJuIGltLmFwcC5PbkNoYW5PcGVuSW5pdCgKICAgICAgICAgICAgICAgIGN0eCwKICAgICAgICAgICAgICAgIG9yZGVyLAogICAgICAgICAgICAgICAgY29ubmVjdGlvbkhvcHMsCiAgICAgICAgICAgICAgICBwb3J0SUQsCiAgICAgICAgICAgICAgICBjaGFubmVsSUQsCiAgICAgICAgICAgICAgICBjaGFubmVsQ2FwLAogICAgICAgICAgICAgICAgY291bnRlcnBhcnR5LAogICAgICAgICAgICAgICAgdmVyc2lvbiwKICAgICAgICAgICAgKQogICAgICAgIH0KICAgIGVsc2UgewogICAgICAgIG1ldGFkYXRhID0gewogICAgICAgICAgICAvLyBzZXQgbWlkZGxld2FyZSB2ZXJzaW9uIHRvIGRlZmF1bHQgdmFsdWUKICAgICAgICAgICAgTWlkZGxld2FyZVZlcnNpb246IGRlZmF1bHRNaWRkbGV3YXJlVmVyc2lvbiwKICAgICAgICAgICAgLy8gYWxsb3cgYXBwbGljYXRpb24gdG8gcmV0dXJuIGl0cyBkZWZhdWx0IHZlcnNpb24KICAgICAgICAgICAgQXBwVmVyc2lvbjogJnF1b3Q7JnF1b3Q7LAogICAgICAgIH0KICAgIH0KCiAgICBkb0N1c3RvbUxvZ2ljKCkKCiAgICAvLyBpZiB0aGUgdmVyc2lvbiBzdHJpbmcgaXMgZW1wdHksIE9uQ2hhbk9wZW5Jbml0IGlzIGV4cGVjdGVkIHRvIHJldHVybgogICAgLy8gYSBkZWZhdWx0IHZlcnNpb24gc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdmVyc2lvbihzKSBpdCBzdXBwb3J0cwogICAgYXBwVmVyc2lvbiwgZXJyIDo9IGltLmFwcC5PbkNoYW5PcGVuSW5pdCgKICAgICAgICBjdHgsCiAgICAgICAgb3JkZXIsCiAgICAgICAgY29ubmVjdGlvbkhvcHMsCiAgICAgICAgcG9ydElELAogICAgICAgIGNoYW5uZWxJRCwKICAgICAgICBjaGFubmVsQ2FwLAogICAgICAgIGNvdW50ZXJwYXJ0eSwKICAgICAgICBtZXRhZGF0YS5BcHBWZXJzaW9uLCAvLyBub3RlIHdlIG9ubHkgcGFzcyBhcHAgdmVyc2lvbiBoZXJlCiAgICApCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gJnF1b3Q7JnF1b3Q7LCBlcnIKICAgIH0KCiAgICB2ZXJzaW9uIDo9IGNvbnN0cnVjdFZlcnNpb24obWV0YWRhdGEuTWlkZGxld2FyZVZlcnNpb24sIGFwcFZlcnNpb24pCgogICAgcmV0dXJuIHZlcnNpb24sIG5pbAp9Cg=="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L34-L82",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"onchanopentry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchanopentry"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanOpenTry")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5PcGVuVHJ5KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgb3JkZXIgY2hhbm5lbHR5cGVzLk9yZGVyLAogICAgY29ubmVjdGlvbkhvcHMgW11zdHJpbmcsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQgc3RyaW5nLAogICAgY2hhbm5lbENhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCiAgICBjb3VudGVycGFydHkgY2hhbm5lbHR5cGVzLkNvdW50ZXJwYXJ0eSwKICAgIGNvdW50ZXJwYXJ0eVZlcnNpb24gc3RyaW5nLAopIChzdHJpbmcsIGVycm9yKSB7CiAgICAvLyB0cnkgdG8gdW5tYXJzaGFsIEpTT04tZW5jb2RlZCB2ZXJzaW9uIHN0cmluZyBhbmQgcGFzcwogICAgLy8gdGhlIGFwcC1zcGVjaWZpYyB2ZXJzaW9uIHRvIGFwcCBjYWxsYmFjay4KICAgIC8vIG90aGVyd2lzZSwgcGFzcyB2ZXJzaW9uIGRpcmVjdGx5IHRvIGFwcCBjYWxsYmFjay4KICAgIGNwTWV0YWRhdGEsIGVyciA6PSBVbm1hcnNoYWwoY291bnRlcnBhcnR5VmVyc2lvbikKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBhcHAuT25DaGFuT3BlblRyeSgKICAgICAgICAgICAgY3R4LAogICAgICAgICAgICBvcmRlciwKICAgICAgICAgICAgY29ubmVjdGlvbkhvcHMsCiAgICAgICAgICAgIHBvcnRJRCwKICAgICAgICAgICAgY2hhbm5lbElELAogICAgICAgICAgICBjaGFubmVsQ2FwLAogICAgICAgICAgICBjb3VudGVycGFydHksCiAgICAgICAgICAgIGNvdW50ZXJwYXJ0eVZlcnNpb24sCiAgICAgICAgKQogICAgfQoKICAgIGRvQ3VzdG9tTG9naWMoKQoKICAgIC8vIENhbGwgdGhlIHVuZGVybHlpbmcgYXBwbGljYXRpb24ncyBPbkNoYW5PcGVuVHJ5IGNhbGxiYWNrLgogICAgLy8gVGhlIHRyeSBjYWxsYmFjayBtdXN0IHNlbGVjdCB0aGUgZmluYWwgYXBwLXNwZWNpZmljIHZlcnNpb24gc3RyaW5nIGFuZCByZXR1cm4gaXQuCiAgICBhcHBWZXJzaW9uLCBlcnIgOj0gYXBwLk9uQ2hhbk9wZW5UcnkoCiAgICAgICAgY3R4LAogICAgICAgIG9yZGVyLAogICAgICAgIGNvbm5lY3Rpb25Ib3BzLAogICAgICAgIHBvcnRJRCwKICAgICAgICBjaGFubmVsSUQsCiAgICAgICAgY2hhbm5lbENhcCwKICAgICAgICBjb3VudGVycGFydHksCiAgICAgICAgY3BNZXRhZGF0YS5BcHBWZXJzaW9uLCAvLyBub3RlIHdlIG9ubHkgcGFzcyBjb3VudGVycGFydHkgYXBwIHZlcnNpb24gaGVyZQogICAgKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuICZxdW90OyZxdW90OywgZXJyCiAgICB9CgogICAgLy8gbmVnb3RpYXRlIGZpbmFsIG1pZGRsZXdhcmUgdmVyc2lvbgogICAgbWlkZGxld2FyZVZlcnNpb24gOj0gbmVnb3RpYXRlTWlkZGxld2FyZVZlcnNpb24oY3BNZXRhZGF0YS5NaWRkbGV3YXJlVmVyc2lvbikKICAgIHZlcnNpb24gOj0gY29uc3RydWN0VmVyc2lvbihtaWRkbGV3YXJlVmVyc2lvbiwgYXBwVmVyc2lvbikKCiAgICByZXR1cm4gdmVyc2lvbiwgbmlsCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L84-L124",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"onchanopenack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchanopenack"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanOpenAck")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5PcGVuQWNrKAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKICAgIGNvdW50ZXJwYXJ0eUNoYW5uZWxJRCBzdHJpbmcsCiAgICBjb3VudGVycGFydHlWZXJzaW9uIHN0cmluZywKKSBlcnJvciB7CiAgICAvLyB0cnkgdG8gdW5tYXJzaGFsIEpTT04tZW5jb2RlZCB2ZXJzaW9uIHN0cmluZyBhbmQgcGFzcwogICAgLy8gdGhlIGFwcC1zcGVjaWZpYyB2ZXJzaW9uIHRvIGFwcCBjYWxsYmFjay4KICAgIC8vIG90aGVyd2lzZSwgcGFzcyB2ZXJzaW9uIGRpcmVjdGx5IHRvIGFwcCBjYWxsYmFjay4KICAgIGNwTWV0YWRhdGEsIGVyciA9IFVubWFyc2hhbEpTT04oY291bnRlcnBhcnR5VmVyc2lvbikKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBhcHAuT25DaGFuT3BlbkFjayhjdHgsIHBvcnRJRCwgY2hhbm5lbElELCBjb3VudGVycGFydHlDaGFubmVsSUQsIGNvdW50ZXJwYXJ0eVZlcnNpb24pCiAgICB9CgogICAgaWYgIWlzQ29tcGF0aWJsZShjcE1ldGFkYXRhLk1pZGRsZXdhcmVWZXJzaW9uKSB7CiAgICAgICAgcmV0dXJuIGVycm9yCiAgICB9CiAgICBkb0N1c3RvbUxvZ2ljKCkKCiAgICAvLyBjYWxsIHRoZSB1bmRlcmx5aW5nIGFwcGxpY2F0aW9uJ3MgT25DaGFuT3BlblRyeSBjYWxsYmFjawogICAgcmV0dXJuIGFwcC5PbkNoYW5PcGVuQWNrKGN0eCwgcG9ydElELCBjaGFubmVsSUQsIGNvdW50ZXJwYXJ0eUNoYW5uZWxJRCwgY3BNZXRhZGF0YS5BcHBWZXJzaW9uKQp9Cg=="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L126-L152",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h3",{attrs:{id:"onchanopenconfirm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchanopenconfirm"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanOpenConfirm")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5PcGVuQ29uZmlybSgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIHBvcnRJRCwKICAgIGNoYW5uZWxJRCBzdHJpbmcsCikgZXJyb3IgewogICAgZG9DdXN0b21Mb2dpYygpCgogICAgcmV0dXJuIGFwcC5PbkNoYW5PcGVuQ29uZmlybShjdHgsIHBvcnRJRCwgY2hhbm5lbElEKQp9Cg=="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L154-L162",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"onchancloseinit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchancloseinit"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanCloseInit")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5DbG9zZUluaXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQgc3RyaW5nLAopIGVycm9yIHsKICAgIGRvQ3VzdG9tTG9naWMoKQoKICAgIHJldHVybiBhcHAuT25DaGFuQ2xvc2VJbml0KGN0eCwgcG9ydElELCBjaGFubmVsSUQpCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L164-L187",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"onchancloseconfirm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchancloseconfirm"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanCloseConfirm")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5DbG9zZUNvbmZpcm0oCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQgc3RyaW5nLAopIGVycm9yIHsKICAgIGRvQ3VzdG9tTG9naWMoKQoKICAgIHJldHVybiBhcHAuT25DaGFuQ2xvc2VDb25maXJtKGN0eCwgcG9ydElELCBjaGFubmVsSUQpCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L189-L212",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("p",[t("strong",[e._v("NOTE")]),e._v(": Middleware that does not need to negotiate with a counterparty middleware on the remote stack will not implement the version unmarshalling and negotiation, and will simply perform its own custom logic on the callbacks without relying on the counterparty behaving similarly.")]),e._v(" "),t("h3",{attrs:{id:"packet-callbacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packet-callbacks"}},[e._v("#")]),e._v(" Packet callbacks")]),e._v(" "),t("p",[e._v("The packet callbacks just like the handshake callbacks wrap the application's packet callbacks. The packet callbacks are where the middleware performs most of its custom logic. The middleware may read the packet flow data and perform some additional packet handling, or it may modify the incoming data before it reaches the underlying application. This enables a wide degree of usecases, as a simple base application like token-transfer can be transformed for a variety of usecases by combining it with custom middleware.")]),e._v(" "),t("h4",{attrs:{id:"onrecvpacket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onrecvpacket"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnRecvPacket")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPblJlY3ZQYWNrZXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICAgIHJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCikgaWJjZXhwb3J0ZWQuQWNrbm93bGVkZ2VtZW50IHsKICAgIGRvQ3VzdG9tTG9naWMocGFja2V0KQoKICAgIGFjayA6PSBhcHAuT25SZWN2UGFja2V0KGN0eCwgcGFja2V0LCByZWxheWVyKQoKICAgIGRvQ3VzdG9tTG9naWMoYWNrKSAvLyBtaWRkbGV3YXJlIG1heSBtb2RpZnkgb3V0Z29pbmcgYWNrCiAgICByZXR1cm4gYWNrCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L214-L237",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"onacknowledgementpacket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onacknowledgementpacket"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnAcknowledgementPacket")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkFja25vd2xlZGdlbWVudFBhY2tldCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIHBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LAogICAgYWNrbm93bGVkZ2VtZW50IFtdYnl0ZSwKICAgIHJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCikgZXJyb3IgewogICAgZG9DdXN0b21Mb2dpYyhwYWNrZXQsIGFjaykKCiAgICByZXR1cm4gYXBwLk9uQWNrbm93bGVkZ2VtZW50UGFja2V0KGN0eCwgcGFja2V0LCBhY2ssIHJlbGF5ZXIpCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L239-L292",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"ontimeoutpacket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ontimeoutpacket"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnTimeoutPacket")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPblRpbWVvdXRQYWNrZXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICAgIHJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCikgZXJyb3IgewogICAgZG9DdXN0b21Mb2dpYyhwYWNrZXQpCgogICAgcmV0dXJuIGFwcC5PblRpbWVvdXRQYWNrZXQoY3R4LCBwYWNrZXQsIHJlbGF5ZXIpCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L294-L334",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h3",{attrs:{id:"ics-4-wrappers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics-4-wrappers"}},[e._v("#")]),e._v(" ICS-4 wrappers")]),e._v(" "),t("p",[e._v("Middleware must also wrap ICS-4 so that any communication from the application to the "),t("code",[e._v("channelKeeper")]),e._v(" goes through the middleware first. Similar to the packet callbacks, the middleware may modify outgoing acknowledgements and packets in any way it wishes.")]),e._v(" "),t("h4",{attrs:{id:"sendpacket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sendpacket"}},[e._v("#")]),e._v(" "),t("code",[e._v("SendPacket")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTZW5kUGFja2V0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgY2hhbkNhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCiAgICBzb3VyY2VQb3J0IHN0cmluZywKICAgIHNvdXJjZUNoYW5uZWwgc3RyaW5nLAogICAgdGltZW91dEhlaWdodCBjbGllbnR0eXBlcy5IZWlnaHQsCiAgICB0aW1lb3V0VGltZXN0YW1wIHVpbnQ2NCwKICAgIGFwcERhdGEgW11ieXRlLAopIHsKICAgIC8vIG1pZGRsZXdhcmUgbWF5IG1vZGlmeSBkYXRhCiAgICBkYXRhID0gZG9DdXN0b21Mb2dpYyhhcHBEYXRhKQoKICAgIHJldHVybiBpY3M0S2VlcGVyLlNlbmRQYWNrZXQoCiAgICAgICAgY3R4LCAKICAgICAgICBjaGFuQ2FwLCAKICAgICAgICBzb3VyY2VQb3J0LCAKICAgICAgICBzb3VyY2VDaGFubmVsLCAKICAgICAgICB0aW1lb3V0SGVpZ2h0LCAKICAgICAgICB0aW1lb3V0VGltZXN0YW1wLCAKICAgICAgICBkYXRhLAogICAgKQp9Cg=="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L336-L343",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this function for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"writeacknowledgement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writeacknowledgement"}},[e._v("#")]),e._v(" "),t("code",[e._v("WriteAcknowledgement")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gb25seSBjYWxsZWQgZm9yIGFzeW5jIGFja3MKZnVuYyBXcml0ZUFja25vd2xlZGdlbWVudCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIGNoYW5DYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgcGFja2V0IGV4cG9ydGVkLlBhY2tldEksCiAgICBhY2sgZXhwb3J0ZWQuQWNrbm93bGVkZ2VtZW50LAopIHsKICAgIC8vIG1pZGRsZXdhcmUgbWF5IG1vZGlmeSBhY2tub3dsZWRnZW1lbnQKICAgIGFja19ieXRlcyA9IGRvQ3VzdG9tTG9naWMoYWNrKQoKICAgIHJldHVybiBpY3M0S2VlcGVyLldyaXRlQWNrbm93bGVkZ2VtZW50KHBhY2tldCwgYWNrX2J5dGVzKQp9Cg=="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L345-L353",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this function for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"getappversion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getappversion"}},[e._v("#")]),e._v(" "),t("code",[e._v("GetAppVersion")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gbWlkZGxld2FyZSBtdXN0IHJldHVybiB0aGUgdW5kZXJseWluZyBhcHBsaWNhdGlvbiB2ZXJzaW9uCmZ1bmMgR2V0QXBwVmVyc2lvbigKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIHBvcnRJRCwKICAgIGNoYW5uZWxJRCBzdHJpbmcsCikgKHN0cmluZywgYm9vbCkgewogICAgdmVyc2lvbiwgZm91bmQgOj0gaWNzNEtlZXBlci5HZXRBcHBWZXJzaW9uKGN0eCwgcG9ydElELCBjaGFubmVsSUQpCiAgICBpZiAhZm91bmQgewogICAgICAgIHJldHVybiAmcXVvdDsmcXVvdDssIGZhbHNlCiAgICB9CgogICAgaWYgIU1pZGRsZXdhcmVFbmFibGVkIHsKICAgICAgICByZXR1cm4gdmVyc2lvbiwgdHJ1ZQogICAgfQoKICAgIC8vIHVud3JhcCBjaGFubmVsIHZlcnNpb24KICAgIG1ldGFkYXRhLCBlcnIgOj0gVW5tYXJzaGFsKHZlcnNpb24pCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICBwYW5pYyhmbXQuRXJyb2YoJnF1b3Q7dW5hYmxlIHRvIHVubWFyc2hhbCB2ZXJzaW9uOiAldyZxdW90OywgZXJyKSkKICAgIH0KCiAgICByZXR1cm4gbWV0YWRhdGEuQXBwVmVyc2lvbiwgdHJ1ZQp9CgovLyBtaWRkbGV3YXJlIG11c3QgcmV0dXJuIHRoZSB1bmRlcmx5aW5nIGFwcGxpY2F0aW9uIHZlcnNpb24gCmZ1bmMgR2V0QXBwVmVyc2lvbihjdHggc2RrLkNvbnRleHQsIHBvcnRJRCwgY2hhbm5lbElEIHN0cmluZykgKHN0cmluZywgYm9vbCkgewogICAgdmVyc2lvbiwgZm91bmQgOj0gaWNzNEtlZXBlci5HZXRBcHBWZXJzaW9uKGN0eCwgcG9ydElELCBjaGFubmVsSUQpCiAgICBpZiAhZm91bmQgewogICAgICAgIHJldHVybiAmcXVvdDsmcXVvdDssIGZhbHNlCiAgICB9CgogICAgaWYgIU1pZGRsZXdhcmVFbmFibGVkIHsKICAgICAgICByZXR1cm4gdmVyc2lvbiwgdHJ1ZQogICAgfQoKICAgIC8vIHVud3JhcCBjaGFubmVsIHZlcnNpb24KICAgIG1ldGFkYXRhLCBlcnIgOj0gVW5tYXJzaGFsKHZlcnNpb24pCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICBwYW5pYyhmbXQuRXJyb2YoJnF1b3Q7dW5hYmxlIHRvIHVubWFyc2hhbCB2ZXJzaW9uOiAldyZxdW90OywgZXJyKSkKICAgIH0KCiAgICByZXR1cm4gbWV0YWRhdGEuQXBwVmVyc2lvbiwgdHJ1ZQp9Cg=="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L355-L358",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this function for the ICS29 Fee Middleware module.")])],1)}),[],!1,null,null,null);a.default=c.exports}}]);