import * as vscode from "vscode";

/// --------------------------
///
///
///
///
/// @author [ Mikagura12 ]
/// KARL JAN S. REGINALDO
///
///
///
/// --------------------------

export function activate(context: vscode.ExtensionContext) {
  let statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100
  );
  statusBarItem.text = "$(notebook-execute) Start Dev";
  statusBarItem.command = "react-run.openTerminal";
  statusBarItem.show();

  context.subscriptions.push(statusBarItem);

  let disposable = vscode.commands.registerCommand(
    "react-run.openTerminal",
    () => {
      vscode.window.showInformationMessage(
        "Running npm run dev and opening localhost:3000\n"
      );
      let terminal = vscode.window.createTerminal("React");

      terminal.show();
      terminal.sendText("npm run dev");

      let uri = vscode.Uri.parse("http://localhost:3000");
      vscode.env.openExternal(uri);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
