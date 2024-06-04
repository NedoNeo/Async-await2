import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  {ignores: ["js/__tests__", "dist","webpack.config.js"]},
  pluginJs.configs.recommended,
];