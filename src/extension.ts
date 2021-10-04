import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-dialog.dialog', () => {
        const message = 'The following is an example modal dialog.';
        vscode.window.showInformationMessage(message, { modal: true, detail: 'detail content' });
    });
    context.subscriptions.push(disposable);
}

export function deactivate() { }
