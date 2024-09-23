const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const disposable = vscode.commands.registerCommand('ashify.greetingsFromAshify', function () {
        const panel = vscode.window.createWebviewPanel(
            'ashifyWebview',
            'Ashify Welcome', 
            vscode.ViewColumn.One, 
            {
                enableScripts: true 
            }
        );

        
        const htmlFilePath = path.join(context.extensionPath, './ashify_frontend', 'index.html');
        const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

        panel.webview.html = htmlContent;
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
