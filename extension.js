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
    
      
        const htmlFilePath = path.join(context.extensionPath, 'ashify_frontend', 'ashify_front', 'dist', 'index.html');
        let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

       
        const assetUri = panel.webview.asWebviewUri(vscode.Uri.file(path.join(context.extensionPath, 'ashify_frontend', 'ashify_front', 'dist', 'assets')));
        htmlContent = htmlContent.replace(/(src|href)="(\/?assets\/[^"]*)"/g, (match, p1, p2) => {
            return `${p1}="${assetUri}/${path.basename(p2)}"`;
        });

        
        panel.webview.html = htmlContent;
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
