# Shopify React/TailwindCSS Template

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Some of the scripts are influenced by friends at the Stable, I do not take credit for this extremely well-documented readme, although I have modified it.

here is some info about this project: 

## Background 

### Base Theme

> This theme uses [Dawn - 12.0.0](https://themes.shopify.com/themes/dawn/styles/default) as its base theme.

### Tech Stack

- [Liquid](https://shopify.dev/api/liquid) / HTML
- [Tailwind](https://tailwindcss.com/docs) + [SCSS](https://sass-lang.com/documentation)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [React (3.x)](https://react.dev)
- [Webpack](https://webpack.js.org/)
- [Yarn](https://yarnpkg.com/)

### Project Structure

**./**

- [.browserslistrc](./.browserslistrc): Config file for [Browserlist](https://github.com/browserslist/browserslist)
- [.editorconfig](./.editorconfig): Config file for [EditorConfig](https://editorconfig.org/)
- [.eslintrc.js](./.eslintrc.js): Config file for [ESLint](https://eslint.org/docs/user-guide/configuring/configuration-files)
- [.gitignore](./.gitignore): Config file for [gitignore](https://git-scm.com/docs/gitignore)
- [.nvmrc](./.nvmrc): Used to set the NPM version using [NVM](https://github.com/nvm-sh/nvm#nvmrc)
- [.shopifyignore](./.shopifyignore): Config for [Shopify CLI Ignores](https://shopify.dev/themes/tools/cli#excluding-files-from-shopify-cli)
- [.stylelintrc.js](./.stylelintrc.js): Config for [StyleLint](https://stylelint.io/user-guide/configure/)
- [package.json](./package.json): Project metadata & scripts and NPM package dependencies ([ref](https://docs.npmjs.com/cli/v7/configuring-npm/package-json))
- [webpack.common.js](./webpack.common.js): Shared config for [Webpack](https://webpack.js.org/configuration/)
- [webpack.dev.js](./webpack.dev.js): Local development config for [Webpack](https://webpack.js.org/configuration/)
- [webpack.prod.js](./webpack.prod.js): Production config for [Webpack](https://webpack.js.org/configuration/)

**.github/**

GitHub utilities like pull-request templates and actions ([ref](https://stackoverflow.com/a/61301254))

**shopify/**

Shopify theme files get's pushed to Shopify, uses [Shopify Theme Architecture](https://shopify.dev/themes/architecture)

**src/**

All un-compiled static assets like SCSS (not currently set up) & JS, gets compiled by Webpack which outputs to [shopify/assets](./shopify/assets)

<!-- - [scss/](./src/scss): Project SCSS files -->
- [react/](./src/react): Project React files

### Project Ignores

**Theme Assets**

[shopify/assets/](./shopify/assets) is managed by Webpack and can be set to be ignored by [.gitignore](./.gitignore)

It is possible to whitelist files in this directory, see the `# [Unignore] Theme and Other Asset Files` section of the [.gitignore](./.gitignore)

**Theme Merchandising Files**

The following files are ignored in [.gitignore](./.gitignore) to decouple merchandising data from the theme repository and can be pulled in via commands in [package.json](./package.json):

- [config/settings_data.json](./shopify/config/settings_data.json)
- [templates/\*.json](./shopify/templates)

Optionally, you can also ignore:

- [config/settings_schema.json](./shopify/config/settings_schema.json)
- [locales/\*.json](./shopify/locales)

> See also, [How to Remove a File from Version Control](#how-to-remove-a-file-from-version-control)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Appendix](#appendix-project-setup)
- [License](#license)

## Install

### System Dependencies

Ensure the following is installed on your machine (click the links to find install instructions).

- [NVM](https://github.com/nvm-sh/nvm) (recommended)
  - [Node](https://nodejs.org/en/download/package-manager/)
  - [Yarn](https://yarnpkg.com/)
- [Shopify CLI (latest)](https://shopify.dev/apps/tools/cli/installation)

## Usage

### Local Development Setup

Run these commands to set the repository up locally.

```bash
# Set correct node version.
#   - If not installed try: `nvm install $(cat .nvmrc)`
#     otherwise install manually using nvm install [VERSION].
#   - See nvm --help
#   - See .nvmrc
nvm use

# Install deps from the package.json 
yarn

# Log into the storefront.
# yarn run login:[dev|prod]
# ex.
yarn run login:prod

# Clean
# - Optional
# - Only needed if you previously had this project cloned
#   before this README was updated.
yarn run clean-merch

# Pull down latest merchandising into the repo:
#   - See: Appendix: Pulling Theme Merchandising Files
yarn run pull-merch
```

### Local Development

```bash
# Start the Webpack watch and create a Shopify development theme.
yarn run start
```

### Local Deploy to Shopify

```bash
# Deploy to an existing preview (or live) theme.
#   - Select the theme from the list displayed after running this command.
yarn run deploy
```

```bash
# Deploy to a new Shopify preview theme.
# Name the theme something clear & useful, ex.
#   - [PROJ-123] Fix Header on Mobile (Bob)
#   - [DEV] Testing (Bob)
yarn run deploy:new
```

> See: [package.json](./package.json) for all available commands.

## Contributing

This project uses several tools to ensure code consistency & quality:

- [EditorConfig](https://editorconfig.org/) - Editor formatting rules
- [Prettier](https://prettier.io/docs/en/) – Javascript, CSS, SCSS formatting
- [Prettier VSCode Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Editor on demand formatting
- [ESLint](https://eslint.org/docs/user-guide/getting-started) – Javascript linting (integrated with Prettier)
- [StyleLint](https://stylelint.io/user-guide/get-started) – CSS, SCSS linting (integrated with Prettier)
- [Theme Check](https://shopify.dev/themes/tools/theme-check) – Shopify theme Liquid and JSON linting

### VSCode Setup

Install the following extensions to setup formatting & linting in real time (when applicable, these extensions will autoload local config):

- [EditorConfig for VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Appendix: Project Setup

Setting this project up for the first time? Need to add a theme? Review the following information.

```bash
# NOTE: Assumes you've already created the repo in GitHub or Bitbucket.
cd path/to/project/folder
git init
git add .
git commit -m "Initial commit"
git remote add origin [REPO_URL]
git push -u
```

### 2.0 Project Find & Replace

- Find & replace `{client_name}` in the project with the actual client name
- Find & replace `client_name` in [package.json](./package.json) with the actual client name
- Find & replace `{base_theme_name_and_version}` in the [README.md](./README.md) with the Base theme name and version: Ex. Dawn 5.0.0
- Find & replace `{base_theme_link}` in the [README.md](./README.md) with a link to the base theme

> Commit changes to the repo

```bash
git add .
git commit -m "Update repo info"
```

### 3.0 Add Theme Files to Project

**3.1 Prep**

- Add the theme to the storefront(s) using Shopify admin (if it hasn't been added already)
- Replace the value of `login:prod` in package.json with the **prod** storefront URL (exclude `https://`)
  - For example `"login:prod": "shopify login --store [STOREFRONT_URL]"`
  - **If there is no prod store, do not update it**
- Replace the value of `login:dev` in package.json with the **dev** storefront URL (exclude `https://`)
  - For example `"login:dev": "shopify login --store [STOREFRONT_URL]"`
  - **If there is no dev store, do not update it**

> Commit changes to the repo

```bash
git add .
git commit -m "Update login scripts"
```

**3.2 Pull the theme files from Shopify**

> Pull theme files using Shopify CLI

```bash
nvm use
# NOTE: If using the dev store, run login:dev.
yarn run login:prod
yarn run pull-theme
```

> Commit changes to the repo

```bash
git add .
git commit -m "Add theme to repo"
```

**3.3 Add files in shopify/assets to .gitignore**

- Add any files in shopify/assets to the "Asset Unignores" section of **.gitignore**.

> Get list of theme files

```bash
# NOTE: The `find` command will give us relative paths.
find shopify/assets/*
```

- Copy and paste the list into **.gitignore**
- Add a literal `!` character in front of every path

> Commit the changes to the repo

```bash
git add .
git commit -m "Add theme assets to the repo"
```

**3.4 Update shopify/config/schema_settings.json**

- Change the "theme_name" value to `{client_name} Shopify Theme` (max 25 chars)
- Change the "theme_version" value to `0.0.1`
- Change the "theme_author" value to `The Stable`
- Change the "theme_documentation_url" value to the repo URL
- Change the "theme_support_url" value to the repo URL

> Commit the changes to the repo

```bash
git add .
git commit -m "Update theme schema settings"
```

### 4.0 Create yarn.lock

> Install yarn dependencies

```bash
yarn
```

> Commit changes to the repo

```bash
git add .
git commit -m "Add yarn.lock"
```

### 5.0 Add Compiled Assets to Theme.liquid

Depending on your setup, you will need to include compiled assets into the theme. The simplest version of this is adding files like main.js and main.css to `theme.liquid`, like so:

```bash
	<script src="{{ 'script.js' | asset_url }}" defer="defer"></script>
```

### 6.0 Test Project

> Test webpack:build command

```bash
yarn run webpack:build
```

- Ensure command runs without error
- Ensure theme files in `shopify/assets` are still there
- Ensure webpack bundles (main.js|css, checkout.js|css) are in `shopify/assets`

> Test shopify:serve & webpack:watch

```bash
yarn run start
```

- Ensure theme appears as expected

> Test deploy:new command

```bash
yarn run deploy:new
```

- Ensure theme deploys and appears as expected

## Appendix: Misc

### Troubleshooting Shopify CLI

When the Shopify CLI errors, it can be a bit cryptic:

```bash
✗ An unexpected error occurred.
```

You can get more useful error output from the CLI if you set this env. setting in your terminal and running the failing command again:

```bash
export SHOPIFY_CLI_STACKTRACE=1
```

### Pulling Theme Merchandising Files

You can pull the files above into your local project using one or more of the following commands:

**Macro Commands**

```bash
# Pull all merch (templates/*.json, config/settings_data.json, & locales/*.json)
yarn run pull-merch

# Pull all merch from your dev theme (templates/*.json, config/settings_data.json, & locales/*.json)
yarn run pull-dev-merch

# Clean all merch (templates/*.json, config/settings_data.json, & locales/*.json)
yarn run clean-merch
```

**Granular Commands**

```bash
# Pull templates from the selected theme
yarn run pull:templates

# Pull templates from your development theme.
#   - This is useful if you've setup some merchandising on your dev theme
yarn run pull-dev:templates

# Pull config/settings_data.json
# from the selected theme
yarn run pull:config

# Pull config/settings_data.json
# from the your development theme.
#   - This is useful if you've setup some merchandising on your dev theme
yarn run pull-dev:config

# Pull locales/*.json from the selected theme.
yarn run pull:locales

# Pull locales/*.json from your development theme.
#   - This is useful if you've setup some merchandising on your dev theme
yarn run pull-dev:locales

# Remove these files with the following
yarn run clean:templates
yarn run clean:config
```

### Pulling Other Theme Files

Pulling down other theme files is useful when trying to pull in changes made in Shopify into the repository (for example when an app injects snippets and changes).

> It's best to pull the files down into a clean working directory and then use **git** to inspect changes.

```bash
# Check for a clean working directory
#   - This should output: nothing to commit, working tree clean.
#   - If not, then commit your changes.
git status

# Pull down all theme files from Shopify.
yarn run pull-theme

# Check for changes, additions, and deletions.
git status

# Inspect changes to all files.
git diff

# Inspect changes to one file.
git diff path/to/file.json
```

### Troubleshooting Missing Files from Pull Commands

Certain conditions may cause the CLI to miss some files in the remote Shopify theme. So far this has been observed when two template/_.json files shared the same _.json name with an additional \*.liquid extension.

For example, the CLI may not pull down the \*.json version in the following case:

- cart.json
- cart.json.liquid

There isn't an obvious way to get the CLI to pull down the `*.json` file.

**Workarounds**

- Avoid naming files this way (if possible)
- Add the `*.json` file to version control (by adding an explicit unignore to .gitignore) and manually update it regularly (i.e. pulling file contents directly from Shopify and making a commit)
- When deploying to a new theme, go to the storefront and manually duplicate a theme and then deploy to it(as opposed to using `deploy:new`)

### Linting Commands

> See: [package.json](./package.json) for all available commands.

```bash
# Linting
yarn run lint:js
yarn run lint:css
yarn run lint:shopify

# Auto-fix
yarn run fix:js
yarn run fix:css
yarn run fix:shopify
```

### How to Remove a File From Version Control

```bash
git rm --cached [FILE_PATH]

# This will result in an "untracked" file until you update the .gitignore
git commit -m "Removing [FILE_NAME] from repo"
```

Then, add the path in [.gitignore](./.gitignore) file and commit your changes.

## License

UNLICENSED

<!-- test -->
