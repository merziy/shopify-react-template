// See: https://stylelint.io/user-guide/configure

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-config-prettier"],
  /**
   * add plugins
   * docs: https://stylelint.io/user-guide/configure#plugins
   */
  plugins: [
    // 'stylelint-scss' // stylelint by itself supports SCSS syntax very well
  ],
  /**
   * ignore certain files
   * docs: https://stylelint.io/user-guide/configure#ignorefiles
   */
  ignoreFiles: ["shopify/assets/bundle.css"],
  /**
   * add custom rules
   * docs: https://stylelint.io/user-guide/rules/list
   */
  rules: {
    "no-descending-specificity": null,
    "declaration-block-trailing-semicolon": null,

    "declaration-no-important": null,
    "no-missing-end-of-source-newline": null,
    "selector-class-pattern": null,

    "selector-no-qualifying-type": null,
    "font-weight-notation": null,
    "font-family-no-missing-generic-family-keyword": null,
    "number-leading-zero": null,
    "selector-pseudo-element-colon-notation": null,
    "color-hex-case": null,
    "string-quotes": null,
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,

    "declaration-block-no-duplicate-custom-properties": null,
    "no-duplicate-selectors": true,
    "selector-max-compound-selectors": 3,
    "selector-max-id": 0,
    "block-no-empty": true,
    "declaration-colon-space-before": null,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-colon-space-after": "always",
    "declaration-block-single-line-max-declarations": 1,
    "selector-list-comma-newline-after": "always",
    "no-descending-specificity": null,
    "declaration-block-trailing-semicolon": null,

    "declaration-no-important": null,
    "no-missing-end-of-source-newline": null,
    "selector-class-pattern": null,

    "selector-no-qualifying-type": null,
    "font-weight-notation": null,
    "font-family-no-missing-generic-family-keyword": null,
    "number-leading-zero": null,
    "selector-pseudo-element-colon-notation": null,
    "color-hex-case": null,
    "string-quotes": null,
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,

    "declaration-block-no-duplicate-custom-properties": null,
    "no-duplicate-selectors": true,
    "selector-max-compound-selectors": 3,
    "selector-max-id": 0,
    "block-no-empty": true,
    "declaration-colon-space-before": null,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-colon-space-after": "always",
    "declaration-block-single-line-max-declarations": 1,
    "selector-list-comma-newline-after": "always",
  },
  overrides: [],
  customSyntax: "postcss-html",
  settings: {
    react: {
      version: "detect"
    }
  }
};
