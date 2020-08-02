const { parse } = require('amdx');
const { getOptions } = require('loader-utils');

const imports = ['Amazon', 'ArticleCard'];

module.exports = function (source) {
  const options = getOptions(this) || {};
  const intro = `import React from "react"`;
  const jsxFactory = `React.createElement`;
  const Fragment = `React.Fragment`;
  const { ast, frontmatter, toc } = parse(source, {
    amp: !!options.amp,
  });

  const stringifiedAst = JSON.stringify(ast);

  let importsCode = "";
  for (name of imports) {
    importsCode += `import ${name} from "../src/components/molecules/article/${name}";\n`;
  }
  const componentsCode = "{ " + imports.join(",") + " }";
  const output = `
    ${intro};
    ${importsCode};
    import { compile } from "amdx-runner";
    export const frontmatter = ${JSON.stringify(frontmatter)};
    export const toc = ${JSON.stringify(toc)};

    export default (props) => {
      const options = {
        props,
        h: ${jsxFactory},
        Fragment: ${Fragment},
        components: ${componentsCode}
      };
      return compile(${stringifiedAst}, options);
    }
    `;
  return output;
};
