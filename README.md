# Farcaster Composer Actions

built by [@samuellhuber](https://warpcast.com/samuellhuber)

Learn how to build Cast Composer Actions: [here in the dTech docs](https://dtech.vision/farcaster/miniapps/quickstart-farcaster-composer-actions/)

## Testing

To test your composer action host it on the internet and go to the [Warpcast Debugger](https://warpcast.com/~/developers/composer-actions)

There you now enter

- Some Title
- Your public URL

These should be the same (for consistency and testing) as you have set in your ```api/compose``` route [here](/src/pages/api/compose.ts).
**EDIT** compose.ts to set them there too!

![Composer Action Debugger](/docs/debugger.png)

Now when clicking Test action you can play around.

With the info filled in it should look something like the below

![Composer Action Debugger filled out](/docs/debugger-test.png)

Your composer action will now show up. This is the default test sample which you can edit in ```/src/pages/index.tsx``` [here](/src/pages//index.tsx)

![Composer Action Test](/docs/debugger-preview.png)