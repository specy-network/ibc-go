(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{682:function(e,t,o){"use strict";o.r(t);var i=o(1),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"state-verification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#state-verification"}},[e._v("#")]),e._v(" State verification")]),e._v(" "),o("p",[e._v("The localhost client handles state verification through the "),o("code",[e._v("ClientState")]),e._v(" interface methods "),o("code",[e._v("VerifyMembership")]),e._v(" and "),o("code",[e._v("VerifyNonMembership")]),e._v(" by performing read-only operations directly on the core IBC store.")]),e._v(" "),o("p",[e._v("When verifying channel state in handshakes or processing packets the "),o("code",[e._v("09-localhost")]),e._v(" client can simply compare bytes stored under the standardized key paths defined by "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-24"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("For existence proofs via "),o("code",[e._v("VerifyMembership")]),e._v(" the 09-localhost client will retrieve the value stored under the provided key path and compare it against the value provided by the caller. In contrast, non-existence proofs via "),o("code",[e._v("VerifyNonMembership")]),e._v(" assert the absence of a value at the provided key path.")]),e._v(" "),o("p",[e._v("Relayers are expected to provide a sentinel proof when sending IBC messages. Submission of nil or empty proofs is disallowed in core IBC messaging.\nThe 09-localhost light client module defines a "),o("code",[e._v("SentinelProof")]),e._v(" as a single byte. Localhost client state verification will fail if the sentinel proof value is not provided.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIFNlbnRpbmVsUHJvb2YgPSBbXWJ5dGV7MHgwMX0K"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);