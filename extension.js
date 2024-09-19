const vscode = require('vscode');

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

      
        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ashify Welcome</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { color: #007acc; }
                p { color: #333; }
                button { padding: 10px 20px; font-size: 16px; }
            </style>
        </head>
        <body>
            <h1>Welcome to Ashify!</h1>
            <p>Relax by listening to music and streaming without leaving VS Code.</p>
            <button onclick="alert('Enjoy your stay!')">Enjoy your stay</button>
        </body>
        </html>`;
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
