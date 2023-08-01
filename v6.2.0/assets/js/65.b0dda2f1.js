(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{627:function(t,e,a){"use strict";a.r(e);var c=a(0),s=Object(c.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" Client")]),t._v(" "),a("h2",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),a("p",[t._v("A user can query and interact with the Interchain Accounts module using the CLI. Use the "),a("code",[t._v("--help")]),t._v(" flag to discover the available commands:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCBxdWVyeSBpbnRlcmNoYWluLWFjY291bnRzIC0taGVscAo="}}),t._v(" "),a("blockquote",[a("p",[t._v("Please not that this section does not document all the available commands, but only the ones that deserved extra documentation that was not possible to fit in the command line documentation.")])]),t._v(" "),a("h3",{attrs:{id:"controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),a("p",[t._v("A user can query and interact with the controller submodule.")]),t._v(" "),a("h4",{attrs:{id:"query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" Query")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("query")]),t._v(" commands allow users to query the controller submodule.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCBxdWVyeSBpbnRlcmNoYWluLWFjY291bnRzIGNvbnRyb2xsZXIgLS1oZWxwCg=="}}),t._v(" "),a("h4",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("tx")]),t._v(" commands allow users to interact with the controller submodule.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCB0eCBpbnRlcmNoYWluLWFjY291bnRzIGNvbnRyb2xsZXIgLS1oZWxwCg=="}}),t._v(" "),a("h4",{attrs:{id:"send-tx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-tx"}},[t._v("#")]),t._v(" "),a("code",[t._v("send-tx")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("send-tx")]),t._v(" command allows users to send a transaction on the provided connection to be executed using an interchain account on the host chain.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCB0eCBpbnRlcmNoYWluLWFjY291bnRzIGNvbnRyb2xsZXIgc2VuZC10eCBbY29ubmVjdGlvbi1pZF0gW3BhdGgvdG8vcGFja2V0X21zZy5qc29uXQo="}}),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCB0eCBpbnRlcmNoYWluLWFjY291bnRzIGNvbnRyb2xsZXIgc2VuZC10eCBjb25uZWN0aW9uLTAgcGFja2V0LWRhdGEuanNvbiAtLWZyb20gY29zbW9zMS4uCg=="}}),t._v(" "),a("p",[t._v("See below for example contents of "),a("code",[t._v("packet-data.json")]),t._v(". The CLI handler will unmarshal the following into "),a("code",[t._v("InterchainAccountPacketData")]),t._v(" appropriately.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7VFlQRV9FWEVDVVRFX1RYJnF1b3Q7LAogICZxdW90O2RhdGEmcXVvdDs6JnF1b3Q7Q3FJQkNod3ZZMjl6Ylc5ekxtSmhibXN1ZGpGaVpYUmhNUzVOYzJkVFpXNWtFb0VCQ2tGamIzTnRiM014TldOamMyaG9iWEF3WjNONE1qbHhjSEZ4Tm1jMGVtMXNkRzV1ZG1kdGVYVTVkV1YxWVdSb09Ya3libU0xZW1vd2MzcHNjelZuZEdSa2VoSXRZMjl6Ylc5ek1UQm9PWE4wWXpWMk5tNTBaMlY1WjJZMWVHWTVORFZ1YW5GeE5XZ3pNbkkxTTNWeGRYWjNHZzBLQlhOMFlXdGxFZ1F4TURBdyZxdW90OywKICAmcXVvdDttZW1vJnF1b3Q7OiZxdW90OyZxdW90Owp9Cg=="}}),t._v(" "),a("p",[t._v("Note the "),a("code",[t._v("data")]),t._v(" field is a base64 encoded byte string as per the "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#json",target:"_blank",rel:"noopener noreferrer"}},[t._v("proto3 JSON encoding specification"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("A helper CLI is provided in the host submodule which can be used to generate the packet data JSON using the counterparty chain's binary. See the "),a("a",{attrs:{href:"#generate-packet-data"}},[a("code",[t._v("generate-packet-data")]),t._v(" command")]),t._v(" for an example.")]),t._v(" "),a("h3",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" Host")]),t._v(" "),a("p",[t._v("A user can query and interact with the host submodule.")]),t._v(" "),a("h4",{attrs:{id:"query-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-2"}},[t._v("#")]),t._v(" Query")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("query")]),t._v(" commands allow users to query the host submodule.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCBxdWVyeSBpbnRlcmNoYWluLWFjY291bnRzIGhvc3QgLS1oZWxwCg=="}}),t._v(" "),a("h4",{attrs:{id:"transactions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions-2"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("tx")]),t._v(" commands allow users to interact with the controller submodule.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCB0eCBpbnRlcmNoYWluLWFjY291bnRzIGhvc3QgLS1oZWxwCg=="}}),t._v(" "),a("h5",{attrs:{id:"generate-packet-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-packet-data"}},[t._v("#")]),t._v(" "),a("code",[t._v("generate-packet-data")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("generate-packet-data")]),t._v(" command allows users to generate interchain accounts packet data for input message(s). The packet data can then be used with the controller submodule's "),a("a",{attrs:{href:"#send-tx"}},[a("code",[t._v("send-tx")]),t._v(" command")]),t._v(".")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCB0eCBpbnRlcmNoYWluLWFjY291bnRzIGhvc3QgZ2VuZXJhdGUtcGFja2V0LWRhdGEgW21lc3NhZ2VdCg=="}}),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCB0eCBpbnRlcmNoYWluLWFjY291bnRzIGhvc3QgZ2VuZXJhdGUtcGFja2V0LWRhdGEgJ1t7CiAgJnF1b3Q7QHR5cGUmcXVvdDs6JnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAmcXVvdDtmcm9tX2FkZHJlc3MmcXVvdDs6JnF1b3Q7Y29zbW9zMTVjY3NoaG1wMGdzeDI5cXBxcTZnNHptbHRubnZnbXl1OXVldWFkaDl5Mm5jNXpqMHN6bHM1Z3RkZHomcXVvdDssCiAgJnF1b3Q7dG9fYWRkcmVzcyZxdW90OzomcXVvdDtjb3Ntb3MxMGg5c3RjNXY2bnRnZXlnZjV4Zjk0NW5qcXE1aDMycjUzdXF1dncmcXVvdDssCiAgJnF1b3Q7YW1vdW50JnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDtzdGFrZSZxdW90OywKICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsxMDAwJnF1b3Q7CiAgICB9CiAgXQp9XScgLS1tZW1vIG1lbW8K"}}),t._v(" "),a("p",[t._v("The command accepts a single "),a("code",[t._v("sdk.Msg")]),t._v(" or a list of "),a("code",[t._v("sdk.Msg")]),t._v("s that will be encoded into the outputs "),a("code",[t._v("data")]),t._v(" field.")]),t._v(" "),a("p",[t._v("Example output:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7VFlQRV9FWEVDVVRFX1RYJnF1b3Q7LAogICZxdW90O2RhdGEmcXVvdDs6JnF1b3Q7Q3FJQkNod3ZZMjl6Ylc5ekxtSmhibXN1ZGpGaVpYUmhNUzVOYzJkVFpXNWtFb0VCQ2tGamIzTnRiM014TldOamMyaG9iWEF3WjNONE1qbHhjSEZ4Tm1jMGVtMXNkRzV1ZG1kdGVYVTVkV1YxWVdSb09Ya3libU0xZW1vd2MzcHNjelZuZEdSa2VoSXRZMjl6Ylc5ek1UQm9PWE4wWXpWMk5tNTBaMlY1WjJZMWVHWTVORFZ1YW5GeE5XZ3pNbkkxTTNWeGRYWjNHZzBLQlhOMFlXdGxFZ1F4TURBdyZxdW90OywKICAmcXVvdDttZW1vJnF1b3Q7OiZxdW90O21lbW8mcXVvdDsKfQo="}}),t._v(" "),a("h2",{attrs:{id:"grpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[t._v("#")]),t._v(" gRPC")]),t._v(" "),a("p",[t._v("A user can query the interchain account module using gRPC endpoints.")]),t._v(" "),a("h3",{attrs:{id:"controller-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller-2"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),a("p",[t._v("A user can query the controller submodule using gRPC endpoints.")]),t._v(" "),a("h4",{attrs:{id:"interchainaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interchainaccount"}},[t._v("#")]),t._v(" "),a("code",[t._v("InterchainAccount")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("InterchainAccount")]),t._v(" endpoint allows users to query the controller submodule for the interchain account address for a given owner on a particular connection.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"aWJjLmFwcGxpY2F0aW9ucy5pbnRlcmNoYWluX2FjY291bnRzLmNvbnRyb2xsZXIudjEuUXVlcnkvSW50ZXJjaGFpbkFjY291bnQK"}}),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IFwKICAgIC1kICd7JnF1b3Q7b3duZXImcXVvdDs6JnF1b3Q7Y29zbW9zMS4uJnF1b3Q7LCZxdW90O2Nvbm5lY3Rpb25faWQmcXVvdDs6JnF1b3Q7Y29ubmVjdGlvbi0wJnF1b3Q7fScgXAogICAgbG9jYWxob3N0OjkwOTAgXAogICAgaWJjLmFwcGxpY2F0aW9ucy5pbnRlcmNoYWluX2FjY291bnRzLmNvbnRyb2xsZXIudjEuUXVlcnkvSW50ZXJjaGFpbkFjY291bnQK"}}),t._v(" "),a("h4",{attrs:{id:"params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" "),a("code",[t._v("Params")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Params")]),t._v(" endpoint users to query the current controller submodule parameters.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"aWJjLmFwcGxpY2F0aW9ucy5pbnRlcmNoYWluX2FjY291bnRzLmNvbnRyb2xsZXIudjEuUXVlcnkvUGFyYW1zCg=="}}),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IFwKICAgIGxvY2FsaG9zdDo5MDkwIFwKICAgIGliYy5hcHBsaWNhdGlvbnMuaW50ZXJjaGFpbl9hY2NvdW50cy5jb250cm9sbGVyLnYxLlF1ZXJ5L1BhcmFtcwo="}}),t._v(" "),a("h3",{attrs:{id:"host-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-2"}},[t._v("#")]),t._v(" Host")]),t._v(" "),a("p",[t._v("A user can query the host submodule using gRPC endpoints.")]),t._v(" "),a("h4",{attrs:{id:"params-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#params-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("Params")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Params")]),t._v(" endpoint users to query the current host submodule parameters.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"aWJjLmFwcGxpY2F0aW9ucy5pbnRlcmNoYWluX2FjY291bnRzLmhvc3QudjEuUXVlcnkvUGFyYW1zCg=="}}),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IFwKICAgIGxvY2FsaG9zdDo5MDkwIFwKICAgIGliYy5hcHBsaWNhdGlvbnMuaW50ZXJjaGFpbl9hY2NvdW50cy5ob3N0LnYxLlF1ZXJ5L1BhcmFtcwo="}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);