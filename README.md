# gridsome-plugin-partytown

Optimize third-party scripts on your Gridsome site with [Partytown](https://partytown.builder.io/).

[![npm](https://img.shields.io/npm/v/gridsome-plugin-partytown)](https://www.npmjs.com/package/gridsome-plugin-partytown) [![npm peer dependency version](https://img.shields.io/npm/dependency-version/gridsome-plugin-partytown/peer/gridsome)](https://www.npmjs.com/package/gridsome) [![NPM](https://img.shields.io/npm/l/gridsome-plugin-partytown)](https://github.com/michaelhthomas/gridsome-plugin-partytown/blob/master/LICENSE)

## Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Changelog](CHANGELOG.md)

## About

Partytown is a lazy-loaded library by [Builder.io](builder.io) to help relocate resource intensive scripts into a web worker, and off of the main thread. Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker.

This plugin adds the necessary Partytown scripts and libraries to your Gridsome site, and makes it possible to configure Partytown from `gridsome.config.js`.

## Features

- Adds Partytown setup scripts to your site's `<head>`
- Copies Partytown library files to your site's `dist` folder at build time
- Supports using all of Partytown's configuration options in `gridsome.config.js`

## Installation

With NPM:

```bash
npm install gridsome-plugin-partytown
```

With Yarn:

```bash
yarn add gridsome-plugin-partytown
```

## Usage

In your file `gridsome.config.js`, add the following to the `plugins` array:

```javascript
{
  use: "gridsome-plugin-partytown",
  options: {
    debug: true, // default: false
    lib: "partytown-files", // default: "~partytown"
    forward: [ "dataLayer.push" ] // default: []
    /* any partytown-specific configuration */
  },
}
```

### Partytown Scripts

After installing and configuring the plugin, Partytown is ready to use! Add the `type: 'text/partytown'` attribute to any scripts you want to be automatically handled by Partytown.

Many of the services most commonly used with Partytown have specific configuration requirements to ensure they function properly. [Check out the common services documentation](https://partytown.builder.io/common-services) to ensure Partytown is properly configured for these services.

## Options

`gridsome-plugin-partytown` supports all configuration options supported by Partytown. [Visit the Partytown docs](https://partytown.builder.io/configuration) to see all available options.
