(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{670:function(e,t,n){"use strict";n.r(t);var s=n(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"implementing-the-consensusstate-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementing-the-consensusstate-interface"}},[e._v("#")]),e._v(" Implementing the "),n("code",[e._v("ConsensusState")]),e._v(" interface")]),e._v(" "),n("p",[e._v("A "),n("code",[e._v("ConsensusState")]),e._v(" is the snapshot of the counterparty chain, that an IBC client uses to verify proofs (e.g. a block).")]),e._v(" "),n("p",[e._v("The further development of multiple types of IBC light clients and the difficulties presented by this generalization problem (see "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/architecture/adr-006-02-client-refactor.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-006"),n("OutboundLink")],1),e._v(" for more information about this historical context) led to the design decision of each client keeping track of and set its own "),n("code",[e._v("ClientState")]),e._v(" and "),n("code",[e._v("ConsensusState")]),e._v(", as well as the simplification of client "),n("code",[e._v("ConsensusState")]),e._v(" updates through the generalized "),n("code",[e._v("ClientMessage")]),e._v(" interface.")]),e._v(" "),n("p",[e._v("The below "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/exported/client.go#L134",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("ConsensusState")]),n("OutboundLink")],1),e._v(" interface is a generalized interface for the types of information a "),n("code",[e._v("ConsensusState")]),e._v(" could contain. For a reference "),n("code",[e._v("ConsensusState")]),e._v(" implementation, please see the "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/consensus_state.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint light client "),n("code",[e._v("ConsensusState")]),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"clienttype-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clienttype-method"}},[e._v("#")]),e._v(" "),n("code",[e._v("ClientType")]),e._v(" method")]),e._v(" "),n("p",[e._v("This is the type of client consensus. It should be the same as the "),n("code",[e._v("ClientType")]),e._v(" return value for the "),n("RouterLink",{attrs:{to:"/ibc/light-clients/client-state.html"}},[e._v("corresponding "),n("code",[e._v("ClientState")]),e._v(" implementation")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"gettimestamp-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gettimestamp-method"}},[e._v("#")]),e._v(" "),n("code",[e._v("GetTimestamp")]),e._v(" method")]),e._v(" "),n("p",[n("code",[e._v("GetTimestamp")]),e._v(" should return the timestamp (in nanoseconds) of the consensus state snapshot.")]),e._v(" "),n("h2",{attrs:{id:"validatebasic-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#validatebasic-method"}},[e._v("#")]),e._v(" "),n("code",[e._v("ValidateBasic")]),e._v(" method")]),e._v(" "),n("p",[n("code",[e._v("ValidateBasic")]),e._v(" should validate every consensus state field and should return an error if any value is invalid. The light client implementer is in charge of determining which checks are required.")])])}),[],!1,null,null,null);t.default=o.exports}}]);