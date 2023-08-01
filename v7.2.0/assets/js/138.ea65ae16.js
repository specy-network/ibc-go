(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{698:function(e,t,r){"use strict";r.r(t);var a=r(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"genesis-restart-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#genesis-restart-upgrades"}},[e._v("#")]),e._v(" Genesis Restart Upgrades")]),e._v(" "),r("p",{attrs:{synopsis:""}},[e._v("Learn how to upgrade your chain and counterparty clients using genesis restarts.")]),e._v(" "),r("p",[r("strong",[e._v("NOTE")]),e._v(": Regular genesis restarts are currently unsupported by relayers!")]),e._v(" "),r("h3",{attrs:{id:"ibc-client-breaking-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ibc-client-breaking-upgrades"}},[e._v("#")]),e._v(" IBC Client Breaking Upgrades")]),e._v(" "),r("p",[e._v("IBC client breaking upgrades are possible using genesis restarts.\nIt is highly recommended to use the in-place migrations instead of a genesis restart.\nGenesis restarts should be used sparingly and as backup plans.")]),e._v(" "),r("p",[e._v("Genesis restarts still require the usage of an IBC upgrade proposal in order to correctly upgrade counterparty clients.")]),e._v(" "),r("h4",{attrs:{id:"step-by-step-upgrade-process-for-sdk-chains"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-upgrade-process-for-sdk-chains"}},[e._v("#")]),e._v(" Step-by-Step Upgrade Process for SDK Chains")]),e._v(" "),r("p",[e._v("If the IBC-connected chain is conducting an upgrade that will break counterparty clients, it must ensure that the upgrade is first supported by IBC using the "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/ibc/upgrades/quick-guide.md#ibc-client-breaking-upgrades",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC Client Breaking Upgrade List"),r("OutboundLink")],1),e._v(" and then execute the upgrade process described below in order to prevent counterparty clients from breaking.")]),e._v(" "),r("ol",[r("li",[e._v("Create a 02-client "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/ibc/proto-docs.md#upgradeproposal",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("UpgradeProposal")]),r("OutboundLink")],1),e._v(" with an "),r("code",[e._v("UpgradePlan")]),e._v(" and a new IBC ClientState in the "),r("code",[e._v("UpgradedClientState")]),e._v(" field. Note that the "),r("code",[e._v("UpgradePlan")]),e._v(" must specify an upgrade height "),r("strong",[e._v("only")]),e._v(" (no upgrade time), and the "),r("code",[e._v("ClientState")]),e._v(" should only include the fields common to all valid clients and zero out any client-customizable fields (such as TrustingPeriod).")]),e._v(" "),r("li",[e._v("Vote on and pass the "),r("code",[e._v("UpgradeProposal")])]),e._v(" "),r("li",[e._v("Halt the node after successful upgrade.")]),e._v(" "),r("li",[e._v("Export the genesis file.")]),e._v(" "),r("li",[e._v("Swap to the new binary.")]),e._v(" "),r("li",[e._v("Run migrations on the genesis file.")]),e._v(" "),r("li",[e._v("Remove the "),r("code",[e._v("UpgradeProposal")]),e._v(" plan from the genesis file. This may be done by migrations.")]),e._v(" "),r("li",[e._v("Change desired chain-specific fields (chain id, unbonding period, etc). This may be done by migrations.")]),e._v(" "),r("li",[e._v("Reset the node's data.")]),e._v(" "),r("li",[e._v("Start the chain.")])]),e._v(" "),r("p",[e._v("Upon the "),r("code",[e._v("UpgradeProposal")]),e._v(" passing, the upgrade module will commit the UpgradedClient under the key: "),r("code",[e._v("upgrade/UpgradedIBCState/{upgradeHeight}/upgradedClient")]),e._v(". On the block right before the upgrade height, the upgrade module will also commit an initial consensus state for the next chain under the key: "),r("code",[e._v("upgrade/UpgradedIBCState/{upgradeHeight}/upgradedConsState")]),e._v(".")]),e._v(" "),r("p",[e._v("Once the chain reaches the upgrade height and halts, a relayer can upgrade the counterparty clients to the last block of the old chain. They can then submit the proofs of the "),r("code",[e._v("UpgradedClient")]),e._v(" and "),r("code",[e._v("UpgradedConsensusState")]),e._v(" against this last block and upgrade the counterparty client.")]),e._v(" "),r("h4",{attrs:{id:"step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients"}},[e._v("#")]),e._v(" Step-by-Step Upgrade Process for Relayers Upgrading Counterparty Clients")]),e._v(" "),r("p",[e._v("These steps are identical to the regular "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/ibc/upgrades/quick-guide.md#step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC client breaking upgrade process"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"non-ibc-client-breaking-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#non-ibc-client-breaking-upgrades"}},[e._v("#")]),e._v(" Non-IBC Client Breaking Upgrades")]),e._v(" "),r("p",[e._v("While ibc-go supports genesis restarts which do not break IBC clients, relayers do not support this upgrade path.\nHere is a tracking issue on "),r("a",{attrs:{href:"https://github.com/informalsystems/ibc-rs/issues/1152",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hermes"),r("OutboundLink")],1),e._v(".\nPlease do not attempt a regular genesis restarts unless you have a tool to update counterparty clients correctly.")])])}),[],!1,null,null,null);t.default=s.exports}}]);