import {unsafeCSS} from "lit-element";

module.exports = function (parsedFileContents) {
  return `
        ${generateCSSImport()}   
        ${createCssExport(parsedFileContents)}
    `
}

function generateCSSImport(){
    return `import {unsafeCSS} from 'lit-element';`;
}
function createCssExport(parsedFileContents) {
    return `export default css\`${unsafeCSS(parsedFileContents)}\`;`;
}
