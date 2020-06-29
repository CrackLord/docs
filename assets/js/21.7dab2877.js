(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{397:function(t,s,n){"use strict";n.r(s);var a=n(5),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"slashing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[t._v("#")]),t._v(" Slashing")]),t._v(" "),n("p",[t._v('The Slashing module enables Terra to disincentivize any attributable action by a protocol-recognized actor with value at stake by penalizing them ("slashing"). Terra mainly uses the '),n("RouterLink",{attrs:{to:"/dev/spec-staking.html"}},[n("code",[t._v("Staking")])]),t._v(" module to slash when violating validator responsibilities (such as missing too many "),n("code",[t._v("VotePeriod")]),t._v("s in the exchange rate oracle). This module deals with lower-level penalties at the Tendermint consensus level, such as double-signing.")],1),t._v(" "),n("h2",{attrs:{id:"transitions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transitions"}},[t._v("#")]),t._v(" Transitions")]),t._v(" "),n("h3",{attrs:{id:"begin-block"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#begin-block"}},[t._v("#")]),t._v(" Begin-Block")]),t._v(" "),n("blockquote",[n("p",[t._v("This section was taken from the official Cosmos SDK docs, and placed here for your convenience to understand the Slashing module's parameters.")])]),t._v(" "),n("p",[t._v("At the beginning of each block, the Slashing module checks for evidence of infractions or downtime of validators, as well as double-signing and other low-level consensus penalties.")]),t._v(" "),n("h4",{attrs:{id:"evidence-handling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#evidence-handling"}},[t._v("#")]),t._v(" Evidence Handling")]),t._v(" "),n("p",[t._v("Tendermint blocks can include\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/spec/blockchain/blockchain.md#evidence",target:"_blank",rel:"noopener noreferrer"}},[t._v("Evidence"),n("OutboundLink")],1),t._v(", which indicates that a validator committed malicious\nbehavior. The relevant information is forwarded to the application as ABCI Evidence\nin "),n("code",[t._v("abci.RequestBeginBlock")]),t._v(" so that the validator an be accordingly punished.")]),t._v(" "),n("p",[t._v("For some "),n("code",[t._v("Evidence")]),t._v(" submitted in "),n("code",[t._v("block")]),t._v(" to be valid, it must satisfy:")]),t._v(" "),n("p",[n("code",[t._v("Evidence.Timestamp >= block.Timestamp - MaxEvidenceAge")])]),t._v(" "),n("p",[t._v("Where "),n("code",[t._v("Evidence.Timestamp")]),t._v(" is the timestamp in the block at height\n"),n("code",[t._v("Evidence.Height")]),t._v(" and "),n("code",[t._v("block.Timestamp")]),t._v(" is the current block timestamp.")]),t._v(" "),n("p",[t._v("If valid evidence is included in a block, the validator's stake is reduced by\nsome penalty ("),n("code",[t._v("SlashFractionDoubleSign")]),t._v(' for equivocation) of what their stake was\nwhen the infraction occurred (rather than when the evidence was discovered). We\nwant to "follow the stake", i.e. the stake which contributed to the infraction\nshould be slashed, even if it has since been redelegated or started unbonding.')]),t._v(" "),n("p",[t._v("We first need to loop through the unbondings and redelegations from the slashed\nvalidator and track how much stake has since moved:")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("slashAmountUnbondings "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nslashAmountRedelegations "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\nunbondings "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUnbondings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" unbond in unbondings "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" was not bonded before evidence"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height or started unbonding before unbonding period ago "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    burn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" unbond"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InitialTokens "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" SLASH_PROPORTION\n    slashAmountUnbondings "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" burn\n\n    unbond"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tokens "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unbond"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tokens "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" burn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// only care if source gets slashed because we're already bonded to destination")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// so if destination validator gets slashed our delegation just has same shares")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// of smaller pool.")]),t._v("\nredels "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRedelegationsBySource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" redel in redels "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" was not bonded before evidence"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height or started redelegating before unbonding period ago "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    burn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" redel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InitialTokens "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" SLASH_PROPORTION\n    slashAmountRedelegations "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" burn\n\n    amount "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unbondFromValidator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("redel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" burn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("We then slash the validator and tombstone them:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("curVal := validator\noldVal := loadValidator(evidence.Height, evidence.Address)\n\nslashAmount := SLASH_PROPORTION * oldVal.Shares\nslashAmount -= slashAmountUnbondings\nslashAmount -= slashAmountRedelegations\n\ncurVal.Shares = max(0, curVal.Shares - slashAmount)\n\nsignInfo = SigningInfo.Get(val.Address)\nsignInfo.JailedUntil = MAX_TIME\nsignInfo.Tombstoned = true\nSigningInfo.Set(val.Address, signInfo)\n")])])]),n("p",[t._v("This ensures that offending validators are punished the same amount whether they\nact as a single validator with X stake or as N validators with collectively X\nstake. The amount slashed for all double signature infractions committed within a\nsingle slashing period is capped as described "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.37.4/docs/spec/slashing/01_concepts.md#tombstone-caps",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h4",{attrs:{id:"liveness-tracking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#liveness-tracking"}},[t._v("#")]),t._v(" Liveness Tracking")]),t._v(" "),n("p",[t._v("At the beginning of each block, we update the "),n("code",[t._v("ValidatorSigningInfo")]),t._v(" for each\nvalidator and check if they've crossed below the liveness threshold over a\nsliding window. This sliding window is defined by "),n("code",[t._v("SignedBlocksWindow")]),t._v(" and the\nindex in this window is determined by "),n("code",[t._v("IndexOffset")]),t._v(" found in the validator's\n"),n("code",[t._v("ValidatorSigningInfo")]),t._v(". For each block processed, the "),n("code",[t._v("IndexOffset")]),t._v(" is incrimented\nregardless if the validator signed or not. Once the index is determined, the\n"),n("code",[t._v("MissedBlocksBitArray")]),t._v(" and "),n("code",[t._v("MissedBlocksCounter")]),t._v(" are updated accordingly.")]),t._v(" "),n("p",[t._v("Finally, in order to determine if a validator crosses below the liveness threshold,\nwe fetch the maximum number of blocks missed, "),n("code",[t._v("maxMissed")]),t._v(", which is\n"),n("code",[t._v("SignedBlocksWindow - (MinSignedPerWindow * SignedBlocksWindow)")]),t._v(" and the minimum\nheight at which we can determine liveness, "),n("code",[t._v("minHeight")]),t._v(". If the current block is\ngreater than "),n("code",[t._v("minHeight")]),t._v(" and the validator's "),n("code",[t._v("MissedBlocksCounter")]),t._v(" is greater than\n"),n("code",[t._v("maxMissed")]),t._v(", they will be slashed by "),n("code",[t._v("SlashFractionDowntime")]),t._v(", will be jailed\nfor "),n("code",[t._v("DowntimeJailDuration")]),t._v(", and have the following values reset:\n"),n("code",[t._v("MissedBlocksBitArray")]),t._v(", "),n("code",[t._v("MissedBlocksCounter")]),t._v(", and "),n("code",[t._v("IndexOffset")]),t._v(".")]),t._v(" "),n("p",[n("strong",[t._v("Note")]),t._v(": Liveness slashes do "),n("strong",[t._v("NOT")]),t._v(" lead to a tombstombing.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" vote in block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LastCommitInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Votes "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  signInfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetValidatorSigningInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is a relative index, so we counts blocks the validator SHOULD have")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// signed. We use the 0-value default signing info if not present, except for")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// start height.")]),t._v("\n  index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" signInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IndexOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignedBlocksWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  signInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IndexOffset"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update MissedBlocksBitArray and MissedBlocksCounter. The MissedBlocksCounter")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// just tracks the sum of MissedBlocksBitArray. That way we avoid needing to")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// read/write the whole array each time.")]),t._v("\n  missedPrevious "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetValidatorMissedBlockBitArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  missed "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("signed\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("missedPrevious "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" missed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// array index has changed from not missed to missed, increment counter")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetValidatorMissedBlockBitArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    signInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MissedBlocksCounter"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" missedPrevious "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("missed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// array index has changed from missed to not missed, decrement counter")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetValidatorMissedBlockBitArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    signInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MissedBlocksCounter"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// array index at this index has not changed; no need to update counter")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" missed "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// emit events...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  minHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" signInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StartHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignedBlocksWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  maxMissed "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignedBlocksWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MinSignedPerWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If we are past the minimum height and the validator has missed too many")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// jail and slash them.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" minHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" signInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MissedBlocksCounter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" maxMissed "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    validator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidatorByConsAddr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// emit events...")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We need to retrieve the stake distribution which signed the block, so we")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// subtract ValidatorUpdateDelay from the block height, and subtract an")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional 1 since this is the LastCommit.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Note, that this CAN result in a negative "distributionHeight" up to')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -ValidatorUpdateDelay-1, i.e. at the end of the pre-genesis block (none) = at the beginning of the genesis block.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// That's fine since this is just used to filter unbonding delegations & redelegations.")]),t._v("\n    distributionHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValidatorUpdateDelay "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Slash")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" distributionHeight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Power"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SlashFractionDowntime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Jail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    signInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JailedUntil "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DowntimeJailDuration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We need to reset the counter & array so that the validator won't be")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// immediately slashed for downtime upon rebonding.")]),t._v("\n    signInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MissedBlocksCounter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    signInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IndexOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ClearValidatorMissedBlockBitArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetValidatorSigningInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),n("p",[t._v("The subspace for the Slashing module is "),n("code",[t._v("slashing")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Params "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMaxEvidenceAge          time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"max_evidence_age" yaml:"max_evidence_age"`')]),t._v("\n\tSignedBlocksWindow      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"signed_blocks_window" yaml:"signed_blocks_window"`')]),t._v("\n\tMinSignedPerWindow      sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec       "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"min_signed_per_window" yaml:"min_signed_per_window"`')]),t._v("\n\tDowntimeJailDuration    time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"downtime_jail_duration" yaml:"downtime_jail_duration"`')]),t._v("\n\tSlashFractionDoubleSign sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec       "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"slash_fraction_double_sign" yaml:"slash_fraction_double_sign"`')]),t._v("\n\tSlashFractionDowntime   sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec       "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"slash_fraction_downtime" yaml:"slash_fraction_downtime"`')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"maxevidenceage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maxevidenceage"}},[t._v("#")]),t._v(" MaxEvidenceAge")]),t._v(" "),n("ul",[n("li",[t._v("type: "),n("code",[t._v("time.Duration")])]),t._v(" "),n("li",[t._v("default value: "),n("code",[t._v("60 * 2 * time.Second")]),t._v(" (2 minutes)")])]),t._v(" "),n("h3",{attrs:{id:"signedblockswindow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signedblockswindow"}},[t._v("#")]),t._v(" SignedBlocksWindow")]),t._v(" "),n("ul",[n("li",[t._v("type: "),n("code",[t._v("int64")])]),t._v(" "),n("li",[t._v("default value: "),n("code",[t._v("100")])])]),t._v(" "),n("h3",{attrs:{id:"minsignedperwindow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#minsignedperwindow"}},[t._v("#")]),t._v(" MinSignedPerWindow")]),t._v(" "),n("ul",[n("li",[t._v("type: "),n("code",[t._v("sdk.Dec")])]),t._v(" "),n("li",[t._v("default value: "),n("code",[t._v("sdk.NewDecWithPrec(5, 1)")]),t._v(" (5)")])]),t._v(" "),n("h3",{attrs:{id:"downtimejailduration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#downtimejailduration"}},[t._v("#")]),t._v(" DowntimeJailDuration")]),t._v(" "),n("ul",[n("li",[t._v("type: "),n("code",[t._v("time.Duration")])]),t._v(" "),n("li",[t._v("default value: "),n("code",[t._v("60 * 10 * time.Second")]),t._v(" (10 minutes)")])]),t._v(" "),n("h3",{attrs:{id:"slashfractiondoublesign"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slashfractiondoublesign"}},[t._v("#")]),t._v(" SlashFractionDoubleSign")]),t._v(" "),n("ul",[n("li",[t._v("type: "),n("code",[t._v("sdk.Dec")])]),t._v(" "),n("li",[t._v("default value: "),n("code",[t._v("sdk.NewDec(1).Quo(sdk.NewDec(20))")]),t._v(" (1/20)")])]),t._v(" "),n("h3",{attrs:{id:"slashfractiondowntime"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slashfractiondowntime"}},[t._v("#")]),t._v(" SlashFractionDowntime")]),t._v(" "),n("ul",[n("li",[t._v("type: "),n("code",[t._v("sdk.Dec")])]),t._v(" "),n("li",[t._v("default value: "),n("code",[t._v("sdk.NewDec(1).Quo(sdk.NewDec(10000))")]),t._v(" (1/10000)")])])])}),[],!1,null,null,null);s.default=e.exports}}]);