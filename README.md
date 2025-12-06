# TOTP plugin for Elgato Stream Deck

This plugin works with sensitive information. **Never use it in a place where you would't leave an unlocked phone lying around.**

Functionally similar to https://github.com/gri-gus/otp-streamdeck-plugin, this version is TS/JS-based, not requiring Python. (It has some weird external dependencies due to https://github.com/sindresorhus/clipboardy/, but this is about as far as you can go in Node.js.)

The plugin generates a TOTP value, but only **copies it into the Clipboard.** It is up to you to paste it into an input you trust.

## Credits

Icon &copy; [www.onlinewebfonts.com](https://www.onlinewebfonts.com/icon/539682), licensed by CC BY 4.0
