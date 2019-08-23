import * as generateTemplate from '../src/templateGenerator';
import compiler from "./compiler";

/**
 * Tests the template generator
 */

describe('Template Generator', () => {

    let template;
    let fileTemplate;
    let parsedContents;

    beforeAll(async () => {
        let fileContent = await compiler('test.css');

        parsedContents = `
            div {
                /* Testing out CSS */
                background-color: magenta;
                content: "\\030FB"
                /* Because we assume that our SCSS has been already parsed */
            }
        `;

        fileTemplate = fileContent.toJson().modules[0].modules[0].source.trim().replace(/\`/g, "\\`");
        template = generateTemplate(parsedContents);
        console.dir(template)
    });

    it('Should generate the fileTemplate', () => {
        expect(fileTemplate).not.toBeUndefined();
        expect(fileTemplate).not.toBeNull();
    });

    it('Should generate the template', () => {
        expect(template).not.toBeUndefined();
        expect(template).not.toBeNull();
    });

    it('Should have injected the parsedContents', () => {
        expect(template.indexOf(parsedContents)).not.toBe(-1);
    });
});

