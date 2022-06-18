'use strict';

// see https://stackoverflow.com/questions/37711603/javascript-es6-class-definition-not-accessible-in-window-global
window.Cs142TemplateProcessor = class Cs142TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        let ans = this.template;
        // It is very convenient to replace string with regex
        for (const key of Object.keys(dictionary)) {
            // To pass the JSLint
            const regex = new RegExp("{{" + key + "}}");
            ans = ans.replace(regex, dictionary[key]);
        }

        // Some {{str}} may still remain in the template
        ans = ans.replace(/{{\w+}}/g, "");
        return ans;
    }
};