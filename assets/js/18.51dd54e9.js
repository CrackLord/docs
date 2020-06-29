(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{394:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"governance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#governance"}},[t._v("#")]),t._v(" Governance")]),t._v(" "),a("blockquote",[a("p",[t._v("Terra's Governance module inherits from Cosmos SDK's "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.37.4/docs/spec/governance",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("gov")]),a("OutboundLink")],1),t._v(" module. This document is a stub, and covers mainly important Terra-specific notes about how it is used.")])]),t._v(" "),a("p",[t._v('Governance is the process through which participants within the Terra network can effect change on the protocol by submitting petitions known as "proposals," arriving at a popular consensus when a threshold amount of support has been reached for it. The proposal structure is versatile and allows for holders of Luna (those who have an interest in the long-term viability of the network) to voice their opinion on both blockchain parameter updates as well as future development of the Terra protocol.')]),t._v(" "),a("p",[t._v("Check the "),a("RouterLink",{attrs:{to:"/terracli/governance.html"}},[t._v("Governance section of the "),a("code",[t._v("terracli")]),t._v(" Reference")]),t._v(" to see examples of how to participate in the Governance process.")],1),t._v(" "),a("h2",{attrs:{id:"proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}},[t._v("#")]),t._v(" Proposals")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Proposal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tContent "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"content" yaml:"content"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Proposal content interface")]),t._v("\n\n\tProposalID       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"id" yaml:"id"`')]),t._v("                                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  ID of the proposal")]),t._v("\n\tStatus           ProposalStatus "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"proposal_status" yaml:"proposal_status"`')]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Status of the Proposal {Pending, Active, Passed, Rejected}")]),t._v("\n\tFinalTallyResult TallyResult    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"final_tally_result" yaml:"final_tally_result"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Result of Tallys")]),t._v("\n\n\tSubmitTime     time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"submit_time" yaml:"submit_time"`')]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Time of the block where TxGovSubmitProposal was included")]),t._v("\n\tDepositEndTime time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"deposit_end_time" yaml:"deposit_end_time"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Time that the Proposal would expire if deposit amount isn't met")]),t._v("\n\tTotalDeposit   sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"total_deposit" yaml:"total_deposit"`')]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Current deposit on this proposal. Initial value is set at InitialDeposit")]),t._v("\n\n\tVotingStartTime time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"voting_start_time" yaml:"voting_start_time"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Time of the block where MinDeposit was reached. -1 if MinDeposit is not reached")]),t._v("\n\tVotingEndTime   time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"voting_end_time" yaml:"voting_end_time"`')]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Time that the VotingPeriod for this proposal will end and votes will be tallied")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Content "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetDescription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ProposalRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ProposalType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidateBasic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Error\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("A "),a("code",[t._v("Proposal")]),t._v(" is a data structure representing a petition for a change that is submitted by to the blockchain alongside a deposit. Once its deposit reaches a certain value ("),a("a",{attrs:{href:"#mindeposit"}},[a("code",[t._v("MinDeposit")])]),t._v("), the proposal is confirmed and voting opens. Bonded Luna hoolders can then send "),a("a",{attrs:{href:""}},[a("code",[t._v("TxGovVote")])]),t._v(" transactions to vote on the proposal. Terra currently follows a simple voting scheme of 1 Bonded Luna = 1 Vote.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Content")]),t._v(" on a proposal is an interface which contains the information about the "),a("code",[t._v("Proposal")]),t._v(" such as the "),a("code",[t._v("title")]),t._v(", "),a("code",[t._v("description")]),t._v(", and any notable changes. Also, this "),a("code",[t._v("Content")]),t._v(" type can by implemented by any module. The "),a("code",[t._v("Content")]),t._v("'s "),a("code",[t._v("ProposalRoute")]),t._v(" returns a string which must be used to route the "),a("code",[t._v("Content")]),t._v("'s Handler in the Governance keeper. This allows the governance keeper to execute proposal logic implemented by any module. If a proposal passes, the handler is executed. Only if the handler is successful does the state get persisted and the proposal finally passes. Otherwise, the proposal is rejected.")]),t._v(" "),a("h3",{attrs:{id:"text-proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-proposals"}},[t._v("#")]),t._v(" Text Proposals")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TextProposal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tTitle       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"title" yaml:"title"`')]),t._v("\n\tDescription "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"description" yaml:"description"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Text Proposals are used for creating general-purpose petitions, such as asking the Core team to implement a specific feature. The community can reference a passed Text Proposal to the core developers to indicate that a feature (requiring potentially a soft or hard fork) is in significant demand.")]),t._v(" "),a("h3",{attrs:{id:"parameter-change-proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-change-proposals"}},[t._v("#")]),t._v(" Parameter Change Proposals")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ParameterChangeProposal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tTitle       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"title" yaml:"title"`')]),t._v("\n\tDescription "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"description" yaml:"description"`')]),t._v("\n\tChanges     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("ParamChange "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"changes" yaml:"changes"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ParamChange "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tSubspace "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"subspace" yaml:"subspace"`')]),t._v("\n\tKey      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"key" yaml:"key"`')]),t._v("\n\tSubkey   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"subkey,omitempty" yaml:"subkey,omitempty"`')]),t._v("\n\tValue    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"value" yaml:"value"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Parameter Change Proposals are actually located in the Params module, an internal module. It is shown here for your convenience.\n{note}")])]),t._v(" "),a("p",[t._v("Parameter Change Proposals are a special type of proposal which, once passed, will automaticaly go in effect by directly altering the network's parameter specified. For each module, you can find the parameters associated with it by browsing to the "),a("strong",[t._v("Parameters")]),t._v(" section of the module specification.")]),t._v(" "),a("h3",{attrs:{id:"community-pool-spend-proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community-pool-spend-proposals"}},[t._v("#")]),t._v(" Community Pool Spend Proposals")]),t._v(" "),a("p",[t._v("Defined and handled in the "),a("RouterLink",{attrs:{to:"/dev/spec-distribution.html#governance-proposals"}},[a("code",[t._v("Distribution")]),t._v(" module")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"tax-rate-reward-weight-update-proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tax-rate-reward-weight-update-proposals"}},[t._v("#")]),t._v(" Tax Rate / Reward Weight Update Proposals")]),t._v(" "),a("p",[t._v("Defined and handled in the "),a("RouterLink",{attrs:{to:"/dev/spec-treasury.html#governance-proposals"}},[a("code",[t._v("Treasury")]),t._v(" module")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"software-upgrade-proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-upgrade-proposals"}},[t._v("#")]),t._v(" Software Upgrade Proposals")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Software Upgrade Proposals also exist due to inheritance from Cosmos SDK but are for the moment considered unavailable, as they have not yet been implemented. They thus share the same semantics as a simple Text Proposal. It is strongly advised to not submit these types of proposals at the risk of losing your Luna deposit.")])]),t._v(" "),a("h2",{attrs:{id:"transitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transitions"}},[t._v("#")]),t._v(" Transitions")]),t._v(" "),a("h3",{attrs:{id:"end-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-block"}},[t._v("#")]),t._v(" End-Block")]),t._v(" "),a("blockquote",[a("p",[t._v("This section was taken from the official Cosmos SDK docs, and placed here for your convenience to understand the Governance process.")])]),t._v(" "),a("p",[a("code",[t._v("ProposalProcessingQueue")]),t._v(" is a queue "),a("code",[t._v("queue[proposalID]")]),t._v(" containing all the "),a("code",[t._v("ProposalID")]),t._v("s of proposals that reached "),a("code",[t._v("MinDeposit")]),t._v(". At the end of each block, all the proposals that have reached the end of their voting period are processed. To process a finished proposal, the application tallies the votes, computes the votes of each validator and checks if every validator in the validator set has voted. If the proposal is accepted, deposits are refunded. Finally, the proposal content "),a("code",[t._v("Handler")]),t._v(" is executed.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" finishedProposalID in "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetAllFinishedProposalIDs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tproposal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Governance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("proposalID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'proposal'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proposal is a const key")]),t._v("\n\n\tvalidators "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Keeper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllValidators")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ttmpValMap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("ValidatorGovInfo\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initiate mapping at 0. This is the amount of shares of the validator's vote that will be overridden by their delegator's votes")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each validator in validators\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tmpValMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OperatorAddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tally")]),t._v("\n\tvoterIterator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Governance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("proposalID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'addresses'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//return all the addresses that voted on the proposal")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("voterAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" in voterIterator\n\tdelegations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stakingKeeper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDelegations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("voterAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get all delegations for current voter")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each delegation in delegations\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make sure delegation.Shares does NOT include shares being unbonded")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tmpValMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delegation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValidatorAddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" delegation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Shares\n\t\tproposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateTally")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delegation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Shares"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stakingKeeper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValidator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("voterAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tmpValMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("voterAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vote\n\n\ttallyingParam "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GlobalParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TallyingParam'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update tally if validator voted they voted")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each validator in validators\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tmpValMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HasVoted\n\t\tproposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateTally")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tmpValMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TotalShares "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tmpValMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check if proposal is accepted or rejected")]),t._v("\n\ttotalNonAbstain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" proposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("YesVotes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" proposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NoVotes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" proposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NoWithVetoVotes\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Votes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("YesVotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("totalNonAbstain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" tallyingParam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Threshold AND proposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Votes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NoWithVetoVotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("totalNonAbstain  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" tallyingParam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Veto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  proposal was accepted at the end of the voting period")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  refund deposits (non-voters already punished)")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depositor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" in proposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Deposits\n\t\tdepositor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AtomBalance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" amount\n\n\tstateWriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" proposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proposal passed but failed during state execution")]),t._v("\n\t\tproposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CurrentStatus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ProposalStatusFailed\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proposal pass and state is persisted")]),t._v("\n\t\tproposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CurrentStatus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ProposalStatusAccepted\n\t\tstateWriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proposal was rejected")]),t._v("\n\tproposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CurrentStatus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ProposalStatusRejected\n\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Governance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("proposalID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'proposal'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("The subspace for the Governance module is "),a("code",[t._v("gov")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" DepositParams "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMinDeposit       sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"min_deposit,omitempty" yaml:"min_deposit,omitempty"`')]),t._v("\n\tMaxDepositPeriod time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"max_deposit_period,omitempty" yaml:"max_deposit_period,omitempty"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  Maximum period for Atom holders to deposit on a proposal. Initial value: 2 months")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TallyParams "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tQuorum    sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"quorum,omitempty" yaml:"quorum,omitempty"`')]),t._v("\n\tThreshold sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"threshold,omitempty" yaml:"threshold,omitempty"`')]),t._v("\n\tVeto      sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"veto,omitempty" yaml:"veto,omitempty"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" VotingParams "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tVotingPeriod time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"voting_period,omitempty" yaml:"voting_period,omitempty"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"mindeposit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mindeposit"}},[t._v("#")]),t._v(" MinDeposit")]),t._v(" "),a("p",[t._v("Minimum deposit for a proposal to enter voting period.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("sdk.Coins")])]),t._v(" "),a("li",[t._v("default value: "),a("code",[t._v("uluna")])])]),t._v(" "),a("h3",{attrs:{id:"maxdepositperiod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxdepositperiod"}},[t._v("#")]),t._v(" MaxDepositPeriod")]),t._v(" "),a("p",[t._v("Maximum period for Luna holders to deposit on a proposal.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("time.Duration")])]),t._v(" "),a("li",[t._v("default value: "),a("code",[t._v("2 months")])])]),t._v(" "),a("h3",{attrs:{id:"quorum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quorum"}},[t._v("#")]),t._v(" Quorum")]),t._v(" "),a("p",[t._v("Minimum percentage of total stake needed to vote for a result to be considered valid.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("sdk.Dec")])]),t._v(" "),a("li",[t._v("default value: N/A")])]),t._v(" "),a("h3",{attrs:{id:"threshold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#threshold"}},[t._v("#")]),t._v(" Threshold")]),t._v(" "),a("p",[t._v("Minimum proportion of Yes votes for proposal to pass.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("sdk.Dec")])]),t._v(" "),a("li",[t._v("default value: "),a("code",[t._v("0.5")]),t._v(" (50%)")])]),t._v(" "),a("h3",{attrs:{id:"veto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#veto"}},[t._v("#")]),t._v(" Veto")]),t._v(" "),a("p",[t._v("Minimum value of Veto votes to Total votes ratio for proposal to be vetoed.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("sdk.Dec")])]),t._v(" "),a("li",[t._v("default value: "),a("code",[t._v("0.33")]),t._v(" (1/3rd)")])]),t._v(" "),a("h3",{attrs:{id:"votingperiod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#votingperiod"}},[t._v("#")]),t._v(" VotingPeriod")]),t._v(" "),a("p",[t._v("Length of the voting period.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("time.Duration")])]),t._v(" "),a("li",[t._v("default value: N/A")])])])}),[],!1,null,null,null);s.default=n.exports}}]);