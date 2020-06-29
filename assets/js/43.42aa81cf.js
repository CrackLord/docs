(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{419:function(t,e,a){"use strict";a.r(e);var o=a(5),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"light-client-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#light-client-daemon"}},[t._v("#")]),t._v(" Light Client Daemon")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("The Terra SDKs currently rely on an active connection to a running LCD server. Please set it up if you need a dedicated connection for the SDKs.")])]),t._v(" "),a("p",[t._v("The Light Client Daemon (LCD) provides a REST-based adapter for the RPC endpoints, which also helps for decoding the Amino-encoded blockchain data into parseable JSON. This enables apps to communicate with a node through simple HTTP.")]),t._v(" "),a("p",[t._v("To start the LCD, you'll need to specify the following parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("chain-id")])]),t._v(" "),a("td",[a("code",[t._v('""')])]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("chain id of the full node to connect")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("node")])]),t._v(" "),a("td",[a("code",[t._v("tcp://localhost:26657")])]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("address of the full node to connect")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("laddr")])]),t._v(" "),a("td",[a("code",[t._v("tcp://localhost:1317")])]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("address for the REST server to listen to requests")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("trust-node")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("whether this LCD is connected to a trusted full node")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("home")])]),t._v(" "),a("td",[a("code",[t._v("$HOME/.terracli")])]),t._v(" "),a("td",[t._v("no")]),t._v(" "),a("td",[t._v("directory for save checkpoints and validator sets")])])])]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli rest-server --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --laddr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tcp://localhost:1317 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --node tcp://localhost:26657 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --trust-node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])])]),a("p",[t._v("For more information about the Terra REST API endpoints, see the "),a("a",{attrs:{href:"https://swagger.terra.money/",target:"_blank",rel:"noopener noreferrer"}},[t._v("swagger documentation"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);