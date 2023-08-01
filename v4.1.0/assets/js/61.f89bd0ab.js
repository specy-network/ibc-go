(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{622:function(e,n,t){"use strict";t.r(n);var a=t(0),c=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"understanding-active-channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#understanding-active-channels"}},[e._v("#")]),e._v(" Understanding Active Channels")]),e._v(" "),t("p",[e._v("The Interchain Accounts module uses "),t("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#ordering",target:"_blank",rel:"noopener noreferrer"}},[e._v("ORDERED channels"),t("OutboundLink")],1),e._v(" to maintain the order of transactions when sending packets from a controller to a host chain. A limitation when using ORDERED channels is that when a packet times out the channel will be closed.")]),e._v(" "),t("p",[e._v("In the case of a channel closing, a controller chain needs to be able to regain access to the interchain account registered on this channel. "),t("code",[e._v("Active Channels")]),e._v(" enable this functionality. Future versions of the ICS-27 protocol and the Interchain Accounts module will likely use a new\nchannel type that provides ordering of packets without the channel closing on timing out, thus removing the need for "),t("code",[e._v("Active Channels")]),e._v(" entirely.")]),e._v(" "),t("p",[e._v("When an Interchain Account is registered using the "),t("code",[e._v("RegisterInterchainAccount")]),e._v(" API, a new channel is created on a particular port. During the "),t("code",[e._v("OnChanOpenAck")]),e._v(" and "),t("code",[e._v("OnChanOpenConfirm")]),e._v(" steps (controller & host chain) the "),t("code",[e._v("Active Channel")]),e._v(" for this interchain account\nis stored in state.")]),e._v(" "),t("p",[e._v("It is possible to create a new channel using the same controller chain portID if the previously set "),t("code",[e._v("Active Channel")]),e._v(" is now in a "),t("code",[e._v("CLOSED")]),e._v(" state. This channel creation can be initialized programatically by sending a new "),t("code",[e._v("MsgChannelOpenInit")]),e._v(" message like so:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bXNnIDo9IGNoYW5uZWx0eXBlcy5OZXdNc2dDaGFubmVsT3BlbkluaXQocG9ydElELCBzdHJpbmcodmVyc2lvbkJ5dGVzKSwgY2hhbm5lbHR5cGVzLk9SREVSRUQsIFtdc3RyaW5ne2Nvbm5lY3Rpb25JRH0sIGljYXR5cGVzLlBvcnRJRCwgaWNhdHlwZXMuTW9kdWxlTmFtZSkKaGFuZGxlciA6PSBrLm1zZ1JvdXRlci5IYW5kbGVyKG1zZykK"}}),e._v(" "),t("p",[e._v("Alternatively, any relayer operator may initiate a new channel handshake for this interchain account once the previously set "),t("code",[e._v("Active Channel")]),e._v(" is in a "),t("code",[e._v("CLOSED")]),e._v(" state. This is done by initiating the channel handshake on the controller chain using the same portID associated with the interchain account in question.")]),e._v(" "),t("p",[e._v("It is important to note that once a channel has been opened for a given Interchain Account, new channels can not be opened for this account until the currently set "),t("code",[e._v("Active Channel")]),e._v(" is set to "),t("code",[e._v("CLOSED")]),e._v(".")])],1)}),[],!1,null,null,null);n.default=c.exports}}]);