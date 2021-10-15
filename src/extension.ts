import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposables: vscode.Disposable[] = [];

    // Information modal dialog.
    disposables.push(vscode.commands.registerCommand('vscode-dialog.info-dialog', () => openModalDialog('info')));

    // Information modal dialog with a lot of content.
    disposables.push(vscode.commands.registerCommand('vscode-dialog.info-dialog-content', () => {
        const message = `The following is an example of a modal dialog with a significant amount of content\nThe dialog should properly display.`;
        const detail = `The following is a detail example with a significant amount of content\nThe dialog should properly display.`;
        const items = ['Test'];
        const options: vscode.MessageOptions = { modal: true, detail };
        vscode.window.showInformationMessage(message, options, ...items);
    }));

    // Information modal dialog with no items (buttons).
    disposables.push(vscode.commands.registerCommand('vscode-dialog.info-dialog-noItems', () => {
        vscode.window.showInformationMessage('Test No Items', { modal: true });
    }));

    // Warning modal dialog.
    disposables.push(vscode.commands.registerCommand('vscode-dialog.warning-dialog', () => openModalDialog('warning')));

    // Error modal dialog.
    disposables.push(vscode.commands.registerCommand('vscode-dialog.error-dialog', () => openModalDialog('error')));

    // Error modal dialog with no items (buttons).
    disposables.push(vscode.commands.registerCommand('vscode-dialog.error-dialog-noItems', () => {
        vscode.window.showErrorMessage('Test No Items', { modal: true });
    }));

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