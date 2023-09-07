# digiron-navigation

## Summary

Simple Alerts solution which uses a single list for configuration and current alerts

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.17.4-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> node.js, gulp-cli

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| SPO-SPFx-Alerts-Component | Ronnie (digi-ron): [Github](www.github.com/digi-ron) |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Installation

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm i**
  - **gulp serve**
- in your intended SharePoint environment, do the following:
  - make a site (Teams site was the tested site type, but this should not matter)
  - apply the included ```Template\AlertsList.xml``` file to the site
  - add items as appropriate  

## Features

- very simple alerts system which can be added to without any technical knowledge

## Limitations
- created within a week as a PoC, no updates planned
- very minimal usage of Fluent UI, mostly as a result of poor AA/AAA contrast rating when using the Yellow/Green/Red combinations with MS Theme Colors

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
