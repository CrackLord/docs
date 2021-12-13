(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{435:function(e,t,a){"use strict";a.r(t);var s=a(5),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth"}},[e._v("#")]),e._v(" Auth")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Terra's Auth module inherits from Cosmos SDK's "),a("a",{attrs:{href:"https://docs.cosmos.network/master/modules/auth/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),a("OutboundLink")],1),e._v(" module. This document is a stub, and covers mainly important Terra-specific notes about how it is used.")])]),e._v(" "),a("p",[e._v("Terra's Auth module extends the functionality from Cosmos SDK's "),a("code",[e._v("auth")]),e._v(" module with a modified ante handler, which applies the "),a("RouterLink",{attrs:{to:"/Concepts/glossary.html#fees"}},[e._v("stability fee")]),e._v(" alongside all basic transaction validity checks, such as signatures, nonces, and auxiliary fields. This module also defines a special vesting account type that handles the logic for token vesting from the Luna presale.")],1),e._v(" "),a("h2",{attrs:{id:"fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fees"}},[e._v("#")]),e._v(" Fees")]),e._v(" "),a("p",[e._v("The Auth module reads the current effective "),a("code",[e._v("TaxRate")]),e._v(" and "),a("code",[e._v("TaxCap")]),e._v(" parameters from the "),a("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-treasury.html"}},[a("code",[e._v("Treasury")])]),e._v(" module to enforce a stability fee.")],1),e._v(" "),a("h3",{attrs:{id:"gas-fee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-fee"}},[e._v("#")]),e._v(" Gas Fee")]),e._v(" "),a("p",[e._v("Like all transactions on the Terra blockchain, "),a("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-bank.html#msgsend"}},[a("code",[e._v("MsgSend")])]),e._v(" and "),a("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-bank.html#msgmultisend"}},[a("code",[e._v("MsgMultiSend")])]),e._v(" incur gas fees. These fees are determined by a validator's minimum gas price and the complexity of the transaction. More complex transactions incur higher fees. Gas fees are specified by the sender when a transaction is outbound. For more information on how gas is calculated, see "),a("RouterLink",{attrs:{to:"/Reference/terrad/#fees"}},[e._v("fees")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"stability-fee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stability-fee"}},[e._v("#")]),e._v(" Stability Fee")]),e._v(" "),a("p",[e._v("In addition to the gas fee, the ante handler charges a stability fee on all transactions using Terra stablecoins, excluding market swaps. The ante handler reads the "),a("code",[e._v("TaxRate")]),e._v(" and "),a("code",[e._v("TaxCap")]),e._v(" parameters from the "),a("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-treasury.html"}},[a("code",[e._v("Treasury")])]),e._v(" module and computes the stability fee amount for each transaction.")],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TaxRate")]),e._v(" specifies the stability fee percentage rate for transactions. These fees become the "),a("code",[e._v("TaxProceeds")]),e._v(" in block rewards and then are distributed among validators in the active set. For more information about the distribution model, see "),a("RouterLink",{attrs:{to:"/How-to/Manage-a-Terra-validator/faq.html#how-are-block-provisions-distributed"}},[e._v("How are block provisions distributed")]),e._v(". Stability fees are capped for each transaction according to the "),a("code",[e._v("TaxCap")]),e._v(". Every epoch, the Tax Rate and Tax Caps are recalibrated automatically by the network. For more details on how these rates are set, visit "),a("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-treasury.html#monetary-policy-levers"}},[e._v("the treasury module")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[e._v("Example")]),e._v(":")]),e._v(" "),a("p",[e._v("For "),a("code",[e._v("MsgSend")]),e._v(" transactions of µSDR:")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("stability fee = min(1000 * tax_rate, tax_cap(usdr))\n")])])]),a("p",[e._v("For "),a("code",[e._v("MsgMultiSend")]),e._v(" transactions, stability fees are charged in every outbound transaction.")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("The subspace for the Auth module is "),a("code",[e._v("auth")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" Params "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tMaxMemoCharacters      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint64")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"max_memo_characters" yaml:"max_memo_characters"`')]),e._v("\n\tTxSigLimit             "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint64")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"tx_sig_limit" yaml:"tx_sig_limit"`')]),e._v("\n\tTxSizeCostPerByte      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint64")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"tx_size_cost_per_byte" yaml:"tx_size_cost_per_byte"`')]),e._v("\n\tSigVerifyCostED25519   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint64")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"sig_verify_cost_ed25519" yaml:"sig_verify_cost_ed25519"`')]),e._v("\n\tSigVerifyCostSecp256k1 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint64")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"sig_verify_cost_secp256k1" yaml:"sig_verify_cost_secp256k1"`')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"maxmemocharacters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxmemocharacters"}},[e._v("#")]),e._v(" MaxMemoCharacters")]),e._v(" "),a("p",[e._v("Maximum permitted number of characters in the memo of a transaction.")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("uint64")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("256")])])]),e._v(" "),a("h3",{attrs:{id:"txsiglimit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#txsiglimit"}},[e._v("#")]),e._v(" TxSigLimit")]),e._v(" "),a("p",[e._v("The maximum number of signers in a transaction. A single transaction can have multiple messages and multiple signers. The sig verification cost is much higher than other operations, so we limit this to 100.")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("uint64")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("100")])])]),e._v(" "),a("h3",{attrs:{id:"txsizecostperbyte"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#txsizecostperbyte"}},[e._v("#")]),e._v(" TxSizeCostPerByte")]),e._v(" "),a("p",[e._v("Used to compute gas consumption of the transaction, "),a("code",[e._v("TxSizeCostPerByte * txsize")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("uint64")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("10")])])]),e._v(" "),a("h3",{attrs:{id:"sigverifycosted25519"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sigverifycosted25519"}},[e._v("#")]),e._v(" SigVerifyCostED25519")]),e._v(" "),a("p",[e._v("The gas cost for verifying ED25519 signatures.")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("uint64")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("590")])])]),e._v(" "),a("h3",{attrs:{id:"sigverifycostsecp256k1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sigverifycostsecp256k1"}},[e._v("#")]),e._v(" SigVerifyCostSecp256k1")]),e._v(" "),a("p",[e._v("The gas cost for verifying Secp256k1 signatures.")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("uint64")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("1000")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);