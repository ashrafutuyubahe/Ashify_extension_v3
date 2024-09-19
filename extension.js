const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	
	console.log('welcome  to ashify , relax by listening music and streaming without leaving vscode!');

	const disposable = vscode.commands.registerCommand('ashify.greetingsFromAshify', function () {
		
		vscode.window.showInformationMessage('welcome  to ashify , relax by listening music and streaming without leaving vscode!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
