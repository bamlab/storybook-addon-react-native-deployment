# Storybook Addon for RN Deployment

With this package, you can disable the channel between your app and the storybook server to only have the app UI of the storybook.

This allows you to deploy your Storybook on a real device for instance.

## Usage

Install it with `yarn add --dev storybook-addon-react-native-deployment`

Then add those lines when initializing your storybook, usually in `storybook/storybook.js`:

```javascript
import { mockChannel } from "storybook-addon-react-native-deployment";

mockChannel();
```

For instance:

```javascript
import { getStorybookUI, configure } from "@storybook/react-native";

import { mockChannel } from "storybook-addon-react-native-deployment";

mockChannel();

configure(() => {
  // import stories
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// ...
```
