import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-dialog.dialog', () => {
        const message = 'The following is an example modal dialog.';
        const items = ['Test'];
        vscode.window.showInformationMessage(message, {
            modal: true,
            detail: 'detail content'
        }, ...items);
    });
    context.subscriptions.push(disposable);
}

export function deactivate() { }
