(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{659:function(l,e,c){"use strict";c.r(e);var t=c(0),B=Object(t.a)({},(function(){var l=this,e=l.$createElement,c=l._self._c||e;return c("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[c("h1",{attrs:{id:"keeper"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#keeper"}},[l._v("#")]),l._v(" Keeper")]),l._v(" "),c("p",{attrs:{synopsis:""}},[l._v("Learn how to implement the IBC Module keeper.")]),l._v(" "),c("h2",{attrs:{id:"pre-requisites-readings"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites-readings"}},[l._v("#")]),l._v(" Pre-requisites Readings")]),l._v(" "),c("ul",[c("li",{attrs:{prereq:""}},[c("RouterLink",{attrs:{to:"/ibc/overview.html"}},[l._v("IBC Overview")]),l._v(")")],1),l._v(" "),c("li",{attrs:{prereq:""}},[c("RouterLink",{attrs:{to:"/ibc/integration.html"}},[l._v("IBC default integration")])],1)]),l._v(" "),c("p",[l._v("In the previous sections, on channel handshake callbacks and port binding in "),c("code",[l._v("InitGenesis")]),l._v(", a reference was made to keeper methods that need to be implemented when creating a custom IBC module. Below is an overview of how to define an IBC module's keeper.")]),l._v(" "),c("blockquote",[c("p",[l._v("Note that some code has been left out for clarity, to get a full code overview, please refer to "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/keeper/keeper.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("the transfer module's keeper in the ibc-go repo"),c("OutboundLink")],1),l._v(".")])]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gS2VlcGVyIGRlZmluZXMgdGhlIElCQyBhcHAgbW9kdWxlIGtlZXBlcgp0eXBlIEtlZXBlciBzdHJ1Y3QgewoJc3RvcmVLZXkgICBzZGsuU3RvcmVLZXkKCWNkYyAgICAgICAgY29kZWMuQmluYXJ5Q29kZWMKCXBhcmFtU3BhY2UgcGFyYW10eXBlcy5TdWJzcGFjZQoKCWNoYW5uZWxLZWVwZXIgdHlwZXMuQ2hhbm5lbEtlZXBlcgoJcG9ydEtlZXBlciAgICB0eXBlcy5Qb3J0S2VlcGVyCglzY29wZWRLZWVwZXIgIGNhcGFiaWxpdHlrZWVwZXIuU2NvcGVkS2VlcGVyCgogICAgLy8gLi4uIGFkZGl0aW9uYWwgYWNjb3JkaW5nIHRvIGN1c3RvbSBsb2dpYwp9CgovLyBOZXdLZWVwZXIgY3JlYXRlcyBhIG5ldyBJQkMgYXBwIG1vZHVsZSBLZWVwZXIgaW5zdGFuY2UKZnVuYyBOZXdLZWVwZXIoCgkvLyBhcmdzCikgS2VlcGVyIHsKCS8vIC4uLgoKCXJldHVybiBLZWVwZXJ7CgkJY2RjOiAgICAgICAgICAgY2RjLAoJCXN0b3JlS2V5OiAgICAgIGtleSwKCQlwYXJhbVNwYWNlOiAgICBwYXJhbVNwYWNlLAoKCQljaGFubmVsS2VlcGVyOiBjaGFubmVsS2VlcGVyLAoJCXBvcnRLZWVwZXI6ICAgIHBvcnRLZWVwZXIsCgkJc2NvcGVkS2VlcGVyOiAgc2NvcGVkS2VlcGVyLAoKICAgICAgICAvLyAuLi4gYWRkaXRpb25hbCBhY2NvcmRpbmcgdG8gY3VzdG9tIGxvZ2ljCgl9Cn0KCi8vIElzQm91bmQgY2hlY2tzIGlmIHRoZSBJQkMgYXBwIG1vZHVsZSBpcyBhbHJlYWR5IGJvdW5kIHRvIHRoZSBkZXNpcmVkIHBvcnQKZnVuYyAoayBLZWVwZXIpIElzQm91bmQoY3R4IHNkay5Db250ZXh0LCBwb3J0SUQgc3RyaW5nKSBib29sIHsKCV8sIG9rIDo9IGsuc2NvcGVkS2VlcGVyLkdldENhcGFiaWxpdHkoY3R4LCBob3N0LlBvcnRQYXRoKHBvcnRJRCkpCglyZXR1cm4gb2sKfQoKLy8gQmluZFBvcnQgZGVmaW5lcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHRoZSBwb3J0IEtlZXBlcidzIGZ1bmN0aW9uIGluCi8vIG9yZGVyIHRvIGV4cG9zZSBpdCB0byBtb2R1bGUncyBJbml0R2VuZXNpcyBmdW5jdGlvbgpmdW5jIChrIEtlZXBlcikgQmluZFBvcnQoY3R4IHNkay5Db250ZXh0LCBwb3J0SUQgc3RyaW5nKSBlcnJvciB7CgljYXAgOj0gay5wb3J0S2VlcGVyLkJpbmRQb3J0KGN0eCwgcG9ydElEKQoJcmV0dXJuIGsuQ2xhaW1DYXBhYmlsaXR5KGN0eCwgY2FwLCBob3N0LlBvcnRQYXRoKHBvcnRJRCkpCn0KCi8vIEdldFBvcnQgcmV0dXJucyB0aGUgcG9ydElEIGZvciB0aGUgSUJDIGFwcCBtb2R1bGUuIFVzZWQgaW4gRXhwb3J0R2VuZXNpcwpmdW5jIChrIEtlZXBlcikgR2V0UG9ydChjdHggc2RrLkNvbnRleHQpIHN0cmluZyB7CglzdG9yZSA6PSBjdHguS1ZTdG9yZShrLnN0b3JlS2V5KQoJcmV0dXJuIHN0cmluZyhzdG9yZS5HZXQodHlwZXMuUG9ydEtleSkpCn0KCi8vIFNldFBvcnQgc2V0cyB0aGUgcG9ydElEIGZvciB0aGUgSUJDIGFwcCBtb2R1bGUuIFVzZWQgaW4gSW5pdEdlbmVzaXMKZnVuYyAoayBLZWVwZXIpIFNldFBvcnQoY3R4IHNkay5Db250ZXh0LCBwb3J0SUQgc3RyaW5nKSB7CglzdG9yZSA6PSBjdHguS1ZTdG9yZShrLnN0b3JlS2V5KQoJc3RvcmUuU2V0KHR5cGVzLlBvcnRLZXksIFtdYnl0ZShwb3J0SUQpKQp9CgovLyBBdXRoZW50aWNhdGVDYXBhYmlsaXR5IHdyYXBzIHRoZSBzY29wZWRLZWVwZXIncyBBdXRoZW50aWNhdGVDYXBhYmlsaXR5IGZ1bmN0aW9uCmZ1bmMgKGsgS2VlcGVyKSBBdXRoZW50aWNhdGVDYXBhYmlsaXR5KGN0eCBzZGsuQ29udGV4dCwgY2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwgbmFtZSBzdHJpbmcpIGJvb2wgewoJcmV0dXJuIGsuc2NvcGVkS2VlcGVyLkF1dGhlbnRpY2F0ZUNhcGFiaWxpdHkoY3R4LCBjYXAsIG5hbWUpCn0KCi8vIENsYWltQ2FwYWJpbGl0eSBhbGxvd3MgdGhlIElCQyBhcHAgbW9kdWxlIHRvIGNsYWltIGEgY2FwYWJpbGl0eSB0aGF0IGNvcmUgSUJDCi8vIHBhc3NlcyB0byBpdApmdW5jIChrIEtlZXBlcikgQ2xhaW1DYXBhYmlsaXR5KGN0eCBzZGsuQ29udGV4dCwgY2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwgbmFtZSBzdHJpbmcpIGVycm9yIHsKCXJldHVybiBrLnNjb3BlZEtlZXBlci5DbGFpbUNhcGFiaWxpdHkoY3R4LCBjYXAsIG5hbWUpCn0KCi8vIC4uLiBhZGRpdGlvbmFsIGFjY29yZGluZyB0byBjdXN0b20gbG9naWMK"}})],1)}),[],!1,null,null,null);e.default=B.exports}}]);