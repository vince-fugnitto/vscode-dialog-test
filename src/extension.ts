import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposables: vscode.Disposable[] = [];

    // Information modal dialog.
    disposables.push(vscode.commands.registerCommand('vscode-dialog.info-dialog', () => openModalDialog('info')));

    // Warning modal dialog.
    disposables.push(vscode.commands.registerCommand('vscode-dialog.warning-dialog', () => openModalDialog('warning')));

    // Error modal dialog.
    disposables.push(vscode.commands.registerCommand('vscode-dialog.error-dialog', () => openModalDialog('error')));

    context.subscriptions.push(...disposables);
}

export function deactivate() { }

function openModalDialog(type: 'info' | 'warning' | 'error'): void {
    const message = `Example ${type} modal dialog.`;
    const items = ['Test'];
    const options: vscode.MessageOptions = { modal: true, detail: 'Details Example' };
    switch (type) {
        case 'warning': {
            vscode.window.showWarningMessage(message, options, ...items);
            break;
        }
        case 'error': {
            vscode.window.showErrorMessage(message, options, ...items);
            break;
        }
        default: {
            vscode.window.showInformationMessage(message, options, ...items);
            break;
        }
    }
}