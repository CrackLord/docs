(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{399:function(e,t,o){"use strict";o.r(t);var s=o(5),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"supply"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supply"}},[e._v("#")]),e._v(" Supply")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("Terra's Supply module inherits from Cosmos SDK's "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.37.4/docs/spec/supply",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("supply")]),o("OutboundLink")],1),e._v(" module. This document is a stub, and covers mainly important Terra-specific notes about how it is used.")])]),e._v(" "),o("p",[e._v("The Supply module passively tracks the total supply of all coins Terra and Luna within the blockchain, provides a way for modules to hold and interact with a balance of Coins, and introduces an invariant check to verify the Terra protocol's total supply.")]),e._v(" "),o("blockquote",[o("p",[e._v("This was taken from the official Cosmos SDK docs, and placed here for your convenience to understand the Supply module and module accounts.")])]),e._v(" "),o("h2",{attrs:{id:"total-supply"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#total-supply"}},[e._v("#")]),e._v(" Total Supply")]),e._v(" "),o("p",[e._v("The total "),o("code",[e._v("Supply")]),e._v(" of the network is equal to the sum of all coins from the\naccount. The total supply is updated every time a "),o("code",[e._v("Coin")]),e._v(" is minted (eg: as part\nof the inflation mechanism) or burned (eg: due to slashing or if a governance\nproposal is vetoed).")]),e._v(" "),o("h2",{attrs:{id:"module-accounts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-accounts"}},[e._v("#")]),e._v(" Module Accounts")]),e._v(" "),o("p",[e._v("The supply module introduces a new type of "),o("code",[e._v("auth.Account")]),e._v(" which can be used by\nmodules to allocate tokens and in special cases mint or burn tokens. At a base\nlevel these module accounts are capable of sending/receiving tokens to and from\n"),o("code",[e._v("auth.Account")]),e._v("s and other module accounts. This design replaces previous\nalternative designs where, to hold tokens, modules would burn the incoming\ntokens from the sender account, and then track those tokens internally. Later,\nin order to send tokens, the module would need to effectively mint tokens\nwithin a destination account. The new design removes duplicate logic between\nmodules to perform this accounting.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("ModuleAccount")]),e._v(" interface is defined as follows:")]),e._v(" "),o("div",{staticClass:"language-go extra-class"},[o("pre",{pre:!0,attrs:{class:"language-go"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" ModuleAccount "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  auth"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Account               "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// same methods as the Account interface")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("GetName")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v("           "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// name of the module; used to obtain the address")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("GetPermissions")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v("  "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// permissions of module account")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("HasPermission")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bool")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("blockquote",[o("p",[e._v("Any module or message handler that allows either direct or indirect sending of funds must explicitly guarantee those funds cannot be sent to module accounts (unless allowed).\n{warning}")])]),e._v(" "),o("p",[e._v("The supply "),o("code",[e._v("Keeper")]),e._v(" also introduces new wrapper functions for the auth "),o("code",[e._v("Keeper")]),e._v("\nand the bank "),o("code",[e._v("Keeper")]),e._v(" that are related to "),o("code",[e._v("ModuleAccount")]),e._v("s in order to be able\nto:")]),e._v(" "),o("ul",[o("li",[e._v("Get and set "),o("code",[e._v("ModuleAccount")]),e._v("s by providing the "),o("code",[e._v("Name")]),e._v(".")]),e._v(" "),o("li",[e._v("Send coins from and to other "),o("code",[e._v("ModuleAccount")]),e._v("s or standard "),o("code",[e._v("Account")]),e._v("s\n("),o("code",[e._v("BaseAccount")]),e._v(" or "),o("code",[e._v("VestingAccount")]),e._v(") by passing only the "),o("code",[e._v("Name")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("Mint")]),e._v(" or "),o("code",[e._v("Burn")]),e._v(" coins for a "),o("code",[e._v("ModuleAccount")]),e._v(" (restricted to its permissions).")])]),e._v(" "),o("h2",{attrs:{id:"permissions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),o("p",[e._v("Each "),o("code",[e._v("ModuleAccount")]),e._v(" has a different set of permissions that provide different\nobject capabilities to perform certain actions. Permissions need to be\nregistered upon the creation of the supply "),o("code",[e._v("Keeper")]),e._v(" so that every time a\n"),o("code",[e._v("ModuleAccount")]),e._v(" calls the allowed functions, the "),o("code",[e._v("Keeper")]),e._v(" can lookup the\npermissions to that specific account and perform or not the action.")]),e._v(" "),o("p",[e._v("The available permissions are:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Minter")]),e._v(": allows for a module to mint a specific amount of coins.")]),e._v(" "),o("li",[o("code",[e._v("Burner")]),e._v(": allows for a module to burn a specific amount of coins.")]),e._v(" "),o("li",[o("code",[e._v("Staking")]),e._v(": allows for a module to delegate and undelegate a specific amount of coins.")])]),e._v(" "),o("h2",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),o("p",[e._v("The Supply module has no parameters.")])])}),[],!1,null,null,null);t.default=n.exports}}]);