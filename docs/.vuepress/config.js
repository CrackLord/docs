module.exports = {
  title: "Terra Docs",
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"));
    },
  },
  description:
    "Terra is an open source, public blockchain protocol that provides fundamental infrastructure for a decentralized economy and enables open participation in the creation of new financial primitives to power the innovation of money.",
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: "theme/components",
      },
    ],
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
  ],
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cloud.typography.com/7420256/6416592/css/fonts.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://www.terra.money/static/fonts/jetbrainsMono.css?updated=190220"
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
      },
    ],

    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon.png",
      },
    ],
    [
      "script",
      {},
      `window.onload = function() {
        requestAnimationFrame(function() {
          if (location.hash) {
            const element = document.getElementById(location.hash.slice(1))

            if (element) {
              element.scrollIntoView()
            }
          }
        })
      }`,
    ],
  ],
  themeConfig: {
    sidebarDepth: 3,
    // overrideTheme: 'dark',
    // prefersTheme: 'dark',
    // overrideTheme: { light: [6, 18], dark: [18, 6] },
    // theme: 'default-prefers-color-scheme',
    logo: "/img/docs_logo.svg",
    lastUpdated: "Updated on",
    repo: "terra-money/docs",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    docsBranch: 'main',
    docsDir: "docs",
    algolia: {
      apiKey: "5957091e293f7b97f2994bde312aed99",
      indexName: "terra-project",
    },
    nav: [
      { text: "Overview", link: "/" },
      { text: "Tutorials", link: "/Tutorials/" },
      { text: "How to", link: "/How-to/" },
      { text: "Concepts", link: "/Concepts/" },
      { text: "Reference", link: "/Reference/" },
      { text: "SDKs", link: "/SDKs/" },
      {
        text: "GitHub",
        link: "https://github.com/terra-money/core",
        icon: "/img/github.svg",
      },
    ],
    sidebar: {

      "/Tutorials/": [
        "/Tutorials/",
        {
          title: "Get started",
          children: [
            "/Tutorials/Get-started/Terra-Station-desktop",
            "/Tutorials/Get-started/Terra-Station-extension",
            "/Tutorials/Get-started/Terra-Station-mobile",
          ],
          collapsable: true,
        },
        {
          title: "Developer's 5-minute guide",
          children: [
            "/Tutorials/Quick-start/Initial-setup",
            "/Tutorials/Quick-start/Using-Terrain-localterra",
            "/Tutorials/Quick-start/Using-Terrain-testnet",
          ],
          collapsable: true,
        },
        {
          title: "Build a simple Terra dApp",
          children: [
            "/Tutorials/Smart-contracts/Overview",
            "/Tutorials/Smart-contracts/Build-Terra-dApp",
            "/Tutorials/Smart-contracts/Set-up-local-environment",
            "/Tutorials/Smart-contracts/Write-smart-contract",
            "/Tutorials/Smart-contracts/Interact-with-smart-contract",
            "/Tutorials/Smart-contracts/Manage-CW20-tokens",
          ],
          collapsable: true,
        },
      ],
      "/How-to/": [
        "/How-to/",
        {
          title: "Use Terra Station",
          children: [
            "/How-to/Terra-Station/Wallet",
            "/How-to/Terra-Station/Testnet",
            "/How-to/Terra-Station/Staking",
            "/How-to/Terra-Station/Swap",
            "/How-to/Terra-Station/Governance",
            "/How-to/Terra-Station/Contracts",

          ],
          collapsable: true,
        },
        {
          title: "Run a full Terra node",
          children: [
            "/How-to/Run-a-full-Terra-node/Hardware-requirements",
            "/How-to/Run-a-full-Terra-node/Build-Terra-core",
            "/How-to/Run-a-full-Terra-node/Set-up-production-environment",
            "/How-to/Run-a-full-Terra-node/Configure-general-settings",
            "/How-to/Run-a-full-Terra-node/Set-up-private-network",
            "/How-to/Run-a-full-Terra-node/Join-public-network",

          ],
          collapsable: true,
        },
        {
          title: "Manage a Terra validator",
          children: [
            "/How-to/Manage-a-Terra-validator/Overview",
            "/How-to/Manage-a-Terra-validator/Set-up-validator",
            "/How-to/Manage-a-Terra-validator/Set-up-oracle-feeder",
            "/How-to/Manage-a-Terra-validator/Court-delegations",
            "/How-to/Manage-a-Terra-validator/Implement-security",
            "/How-to/Manage-a-Terra-validator/Troubleshoot-validator-problems",
            "/How-to/Manage-a-Terra-validator/faq",
          ],
          collapsable: true,
        },
        "/How-to/Sign-with-multisig",
        "/How-to/Start-LCD",
      ],
      "/Concepts/": [
        "/Concepts/",
        "/Concepts/Protocol",
        "/Concepts/Fees",
        "/Concepts/glossary",
      ],
      "/Reference/": [
        "/Reference/",
        {
          title: "Terra core",
          collapsable: true,
          children: [
            "/Reference/Terra-core/Overview",
            "/Reference/Terra-core/Module-specifications/spec-auth",
            "/Reference/Terra-core/Module-specifications/spec-authz",
            "/Reference/Terra-core/Module-specifications/spec-bank",
            "/Reference/Terra-core/Module-specifications/spec-capability",
            "/Reference/Terra-core/Module-specifications/spec-distribution",
            "/Reference/Terra-core/Module-specifications/spec-evidence",
            "/Reference/Terra-core/Module-specifications/spec-feegrant",
            "/Reference/Terra-core/Module-specifications/spec-governance",
            "/Reference/Terra-core/Module-specifications/spec-market",
            "/Reference/Terra-core/Module-specifications/spec-mint",
            "/Reference/Terra-core/Module-specifications/spec-oracle",
            "/Reference/Terra-core/Module-specifications/spec-slashing",
            "/Reference/Terra-core/Module-specifications/spec-staking",
            "/Reference/Terra-core/Module-specifications/spec-treasury",
            "/Reference/Terra-core/Module-specifications/spec-wasm",
        ],
        },
        {
          title: "terrad",
          collapsable: true,
          children: [
            "/Reference/terrad/",
            "/Reference/terrad/commands",
            "/Reference/terrad/subcommands",
        ],
        },
        "/Reference/integrations",
        {
          title: "Ecosystem",
          collapsable: true,
          children: [
            "/Reference/ecosystem",
            "/Reference/Terra-Delegation-Program/terra-delegation-program.md",
        ],
        },
        "/Reference/endpoints.md",
        {
          title: "Other resources",
          collapsable: true,
          children: [
            [
              "https://pkg.go.dev/github.com/terra-money/core?tab=subdirectories",
              "Terra Core GoDoc",
            ],
            ["https://lcd.terra.dev/swagger/", "Terra REST API"],

          ],
        },
      ],
      "/SDKs/": [
        "/SDKs/",
        {
          title: "terra.js",
          children: [
            "/SDKs/Terra-js/Overview",
            "/SDKs/Terra-js/Common-examples",
            "/SDKs/Terra-js/Add-modules",
            "/SDKs/Terra-js/Make-a-connection",
            "/SDKs/Terra-js/Query-data",
            "/SDKs/Terra-js/Coin-and-Coins",
            "/SDKs/Terra-js/Fees",
            "/SDKs/Terra-js/Keys",
            "/SDKs/Terra-js/MsgAuthorization",
            "/SDKs/Terra-js/Multisend",
            "/SDKs/Terra-js/Numeric",
            "/SDKs/Terra-js/Oracle-feeder",
            "/SDKs/Terra-js/Smart-contracts",
            "/SDKs/Terra-js/Station-extension",
            "/SDKs/Terra-js/Transactions",
            "/SDKs/Terra-js/Wallets",
            "/SDKs/Terra-js/Websockets",
          ],
          collapsable: true,
        },
      ],

      "/": [
          {
          title: "Overview",
          children: [
          "/history-and-changes",
          "/migration-guide",
          ],
          collapsable: false,
          },
        ],
      },
  },
};
