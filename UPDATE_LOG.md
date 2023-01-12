# UPDATE LOG

## v0.8.1

fix:
- export button keeps blinking
- export button in the old chat does not work
- disable export sharing links because it is a security risk

## v0.8.0

feat:
- theme enhancement (Light, Dark, System)
- automatic updates support `silent` settings
- pop-up search: select the ChatGPT content with the mouse, the `DALL·E 2` button appears, and click to jump (note: because the search content filled by the script cannot trigger the event directly, you need to enter a space in the input box to make the button clickable).

fix:
- close the main window and hide it in the tray (windows systems)

## v0.7.4

fix:
- trying to resolve linux errors: `error while loading shared libraries`
- customize global shortcuts (`Menu -> Preferences -> Control Center -> General -> Global Shortcut`)

## v0.7.3

chore:
- optimize slash command style
- optimize tray menu icon and button icons
- global shortcuts to the chatgpt app (mac: `Command + Shift + O`, windows: `Ctrl + Shift + O`)

## v0.7.2

fix: some windows systems cannot start the application

## v0.7.1

fix:
- some windows systems cannot start the application
- windows and linux add about menu (show version information)
- the tray icon is indistinguishable from the background in dark mode on window and linux

## v0.7.0

fix:
- mac m1 copy/paste does not work on some system versions
- optimize the save chat log button to a small icon, the tray window no longer provides a save chat log button (the buttons causes the input area to become larger and the content area to become smaller)

feat:
- use the keyboard `⇧` (arrow up) and `⇩` (arrow down) keys to select the slash command
<!-- - global shortcuts to the chatgpt app (mac: command+shift+o, windows: ctrl+shift+o) -->

## v0.6.10

fix: sync failure on windows

## v0.6.4

fix: path not allowed on the configured scope

feat:
- optimize the generated pdf file size
- menu added `Sync Prompts`
- `Control Center` added `Sync Custom`
- the slash command is triggered by the enter key
- under the slash command, use the tab key to modify the contents of the `{q}` tag (only single changes are supported (https://github.com/lencx/ChatGPT/issues/54)

## v0.6.0

fix:
- windows show Chinese when upgrading

## v0.5.1

some optimization

## v0.5.0

feat: `Control Center` added `chatgpt-prompts` synchronization

## v0.4.2

add chatgpt log (path: `~/.chatgpt/chatgpt.log`)

## v0.4.1

fix:
- tray window style optimization

## v0.4.0

feat:
- customize the ChatGPT prompts command (https://github.com/lencx/ChatGPT#-announcement)
- menu enhancement: hide application icons from the Dock (support macOS only)

## v0.3.0

fix: can't open ChatGPT

feat: menu enhancement
- the control center of ChatGPT application
- open the configuration file directory

## v0.2.2

feat:
- menu: go to config

## v0.2.1

feat: menu optimization

## v0.2.0

feat: menu enhancement
- customize user-agent to prevent security detection interception
- clear all chatgpt configuration files

## v0.1.8

feat:
- menu enhancement: theme, titlebar
- modify website address

## v0.1.7

feat: tray window

## v0.1.6

feat:
- stay on top
- export ChatGPT history

## v0.1.5

fix: mac can't use shortcut keys

## v0.1.4

feat:
- beautify icons
- add system tray menu

## v0.1.3

fix: only mac supports `TitleBarStyle`

## v0.1.2

initialization

## v0.1.1

initialization

## v0.1.0

initialization
