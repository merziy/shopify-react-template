// See: https://eslint.org/docs/user-guide/configuring/configuration-files

const isDevelopment = process.env.NODE_ENV === "development";
const OFF = "off";

module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  plugins: ["prettier", "react"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  // settings: {
  //   react: {
  //     createClass: createReactClass, // Regex for Component Factory to use,
  //                                    // default to "createReactClass"
  //     pragma: React,  // Pragma to use, default to "React"
  //     fragment: Fragment,  // Fragment to use (may be a property of <pragma>), default to "Fragment"
  //     version: detect, // React version. "detect" automatically picks the version you have installed.
  //                          // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
  //                          // It will default to "latest" and warn if missing, and to "detect" in the future
  //     flowVersion: 0.53 // Flow version
  //   },
  //   propWrapperFunctions: [
  //       // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
  //       forbidExtraProps,
  //       {property: freeze, object: Object},
  //       {property: myFavoriteWrapper},
  //       // for rules that check exact prop wrappers
  //       {property: forbidExtraProps, exact: true}
  //   ],
  //   componentWrapperFunctions: [
  //       // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
  //       observer, // `property`
  //       {property: styled}, // `object` is optional
  //       {property: observer, object: Mobx},
  //       {property: observer, object: "<pragma>"} // sets `object` to whatever value `settings.react.pragma` is set to
  //   ],
  //   formComponents: [
  //     // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
  //     CustomForm,
  //     {name: Form, formAttribute: endpoint}
  //   ],
  //   linkComponents: [
  //     // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
  //     Hyperlink,
  //     {name: Link, linkAttribute: to}
  //   ]
  // },
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true,
  },
  /**
   * Define globals to solve '[GLOBAL]' is not define – no undef
   */
  globals: {
    Shopify: "readonly",
  },
  /**
   * add custom rules
   * docs: https://eslint.org/docs/rules
   */
  rules: {
    "prettier/prettier": "error",
    
  },
  overrides: [],

  /**
   * ignore certain files
   * docs: https://eslint.org/docs/user-guide/configuring#ignorepatterns-in-config-files
   */
  ignorePatterns: [
    // "shopify/assets/vendor-scripts-v11.js",
    "shopify/assets/bundle.js",
    "shopify/assets/checkout.js",
    // Allows a simpler glob in eslintrc.js
    "shopify/assets/*.jsx",
  ],
};
