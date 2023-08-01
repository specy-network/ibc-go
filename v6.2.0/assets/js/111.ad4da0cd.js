(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{671:function(e,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-upgrade-ibc-chains-and-their-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-upgrade-ibc-chains-and-their-clients"}},[e._v("#")]),e._v(" How to Upgrade IBC Chains and their Clients")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Learn how to upgrade your chain and counterparty clients.")]),e._v(" "),a("p",[e._v("The information in this doc for upgrading chains is relevant to SDK chains. However, the guide for counterparty clients is relevant to any Tendermint client that enables upgrades.")]),e._v(" "),a("h3",{attrs:{id:"ibc-client-breaking-upgrades"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-client-breaking-upgrades"}},[e._v("#")]),e._v(" IBC Client Breaking Upgrades")]),e._v(" "),a("p",[e._v("IBC-connected chains must perform an IBC upgrade if their upgrade will break counterparty IBC clients. The current IBC protocol supports upgrading tendermint chains for a specific subset of IBC-client-breaking upgrades. Here is the exhaustive list of IBC client-breaking upgrades and whether the IBC protocol currently supports such upgrades.")]),e._v(" "),a("p",[e._v("IBC currently does "),a("strong",[e._v("NOT")]),e._v(" support unplanned upgrades. All of the following upgrades must be planned and committed to in advance by the upgrading chain, in order for counterparty clients to maintain their connections securely.")]),e._v(" "),a("p",[e._v("Note: Since upgrades are only implemented for Tendermint clients, this doc only discusses upgrades on Tendermint chains that would break counterparty IBC Tendermint Clients.")]),e._v(" "),a("ol",[a("li",[e._v("Changing the Chain-ID: "),a("strong",[e._v("Supported")])]),e._v(" "),a("li",[e._v("Changing the UnbondingPeriod: "),a("strong",[e._v("Partially Supported")]),e._v(", chains may increase the unbonding period with no issues. However, decreasing the unbonding period may irreversibly break some counterparty clients. Thus, it is "),a("strong",[e._v("not recommended")]),e._v(" that chains reduce the unbonding period.")]),e._v(" "),a("li",[e._v("Changing the height (resetting to 0): "),a("strong",[e._v("Supported")]),e._v(", so long as chains remember to increment the revision number in their chain-id.")]),e._v(" "),a("li",[e._v("Changing the ProofSpecs: "),a("strong",[e._v("Supported")]),e._v(", this should be changed if the proof structure needed to verify IBC proofs is changed across the upgrade. Ex: Switching from an IAVL store, to a SimpleTree Store")]),e._v(" "),a("li",[e._v("Changing the UpgradePath: "),a("strong",[e._v("Supported")]),e._v(", this might involve changing the key under which upgraded clients and consensus states are stored in the upgrade store, or even migrating the upgrade store itself.")]),e._v(" "),a("li",[e._v("Migrating the IBC store: "),a("strong",[e._v("Unsupported")]),e._v(", as the IBC store location is negotiated by the connection.")]),e._v(" "),a("li",[e._v("Upgrading to a backwards compatible version of IBC: Supported")]),e._v(" "),a("li",[e._v("Upgrading to a non-backwards compatible version of IBC: "),a("strong",[e._v("Unsupported")]),e._v(", as IBC version is negotiated on connection handshake.")]),e._v(" "),a("li",[e._v("Changing the Tendermint LightClient algorithm: "),a("strong",[e._v("Partially Supported")]),e._v(". Changes to the light client algorithm that do not change the ClientState or ConsensusState struct may be supported, provided that the counterparty is also upgraded to support the new light client algorithm. Changes that require updating the ClientState and ConsensusState structs themselves are theoretically possible by providing a path to translate an older ClientState struct into the new ClientState struct; however this is not currently implemented.")])]),e._v(" "),a("h3",{attrs:{id:"step-by-step-upgrade-process-for-sdk-chains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-upgrade-process-for-sdk-chains"}},[e._v("#")]),e._v(" Step-by-Step Upgrade Process for SDK chains")]),e._v(" "),a("p",[e._v("If the IBC-connected chain is conducting an upgrade that will break counterparty clients, it must ensure that the upgrade is first supported by IBC using the list above and then execute the upgrade process described below in order to prevent counterparty clients from breaking.")]),e._v(" "),a("ol",[a("li",[e._v("Create a 02-client "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/ibc/proto-docs.md#upgradeproposal",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("UpgradeProposal")]),a("OutboundLink")],1),e._v(" with an "),a("code",[e._v("UpgradePlan")]),e._v(" and a new IBC ClientState in the "),a("code",[e._v("UpgradedClientState")]),e._v(" field. Note that the "),a("code",[e._v("UpgradePlan")]),e._v(" must specify an upgrade height "),a("strong",[e._v("only")]),e._v(" (no upgrade time), and the "),a("code",[e._v("ClientState")]),e._v(" should only include the fields common to all valid clients and zero out any client-customizable fields (such as TrustingPeriod).")]),e._v(" "),a("li",[e._v("Vote on and pass the "),a("code",[e._v("UpgradeProposal")])])]),e._v(" "),a("p",[e._v("Upon the "),a("code",[e._v("UpgradeProposal")]),e._v(" passing, the upgrade module will commit the UpgradedClient under the key: "),a("code",[e._v("upgrade/UpgradedIBCState/{upgradeHeight}/upgradedClient")]),e._v(". On the block right before the upgrade height, the upgrade module will also commit an initial consensus state for the next chain under the key: "),a("code",[e._v("upgrade/UpgradedIBCState/{upgradeHeight}/upgradedConsState")]),e._v(".")]),e._v(" "),a("p",[e._v("Once the chain reaches the upgrade height and halts, a relayer can upgrade the counterparty clients to the last block of the old chain. They can then submit the proofs of the "),a("code",[e._v("UpgradedClient")]),e._v(" and "),a("code",[e._v("UpgradedConsensusState")]),e._v(" against this last block and upgrade the counterparty client.")]),e._v(" "),a("h3",{attrs:{id:"step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients"}},[e._v("#")]),e._v(" Step-by-Step Upgrade Process for Relayers Upgrading Counterparty Clients")]),e._v(" "),a("p",[e._v("Once the upgrading chain has committed to upgrading, relayers must wait till the chain halts at the upgrade height before upgrading counterparty clients. This is because chains may reschedule or cancel upgrade plans before they occur. Thus, relayers must wait till the chain reaches the upgrade height and halts before they can be sure the upgrade will take place.")]),e._v(" "),a("p",[e._v("Thus, the upgrade process for relayers trying to upgrade the counterparty clients is as follows:")]),e._v(" "),a("ol",[a("li",[e._v("Wait for the upgrading chain to reach the upgrade height and halt")]),e._v(" "),a("li",[e._v("Query a full node for the proofs of "),a("code",[e._v("UpgradedClient")]),e._v(" and "),a("code",[e._v("UpgradedConsensusState")]),e._v(" at the last height of the old chain.")]),e._v(" "),a("li",[e._v("Update the counterparty client to the last height of the old chain using the "),a("code",[e._v("UpdateClient")]),e._v(" msg.")]),e._v(" "),a("li",[e._v("Submit an "),a("code",[e._v("UpgradeClient")]),e._v(" msg to the counterparty chain with the "),a("code",[e._v("UpgradedClient")]),e._v(", "),a("code",[e._v("UpgradedConsensusState")]),e._v(" and their respective proofs.")]),e._v(" "),a("li",[e._v("Submit an "),a("code",[e._v("UpdateClient")]),e._v(" msg to the counterparty chain with a header from the new upgraded chain.")])]),e._v(" "),a("p",[e._v("The Tendermint client on the counterparty chain will verify that the upgrading chain did indeed commit to the upgraded client and upgraded consensus state at the upgrade height (since the upgrade height is included in the key). If the proofs are verified against the upgrade height, then the client will upgrade to the new client while retaining all of its client-customized fields. Thus, it will retain its old TrustingPeriod, TrustLevel, MaxClockDrift, etc; while adopting the new chain-specified fields such as UnbondingPeriod, ChainId, UpgradePath, etc. Note, this can lead to an invalid client since the old client-chosen fields may no longer be valid given the new chain-chosen fields. Upgrading chains should try to avoid these situations by not altering parameters that can break old clients. For an example, see the UnbondingPeriod example in the supported upgrades section.")]),e._v(" "),a("p",[e._v("The upgraded consensus state will serve purely as a basis of trust for future "),a("code",[e._v("UpdateClientMsgs")]),e._v(" and will not contain a consensus root to perform proof verification against. Thus, relayers must submit an "),a("code",[e._v("UpdateClientMsg")]),e._v(" with a header from the new chain so that the connection can be used for proof verification again.")])])}),[],!1,null,null,null);t.default=r.exports}}]);