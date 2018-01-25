# Storybook Addon for RN Deployment

With this package, you can disable the channel between your app and the storybook server to only have the app UI of the storybook.

This allows you to deploy your Storybook on a real device for instance.

## Usage

Install it with `yarn add --dev storybook-addon-react-native-deployment`

Then add those lines when initializing your storybook, usually in `storybook/storybook.js`:

```javascript
import { disableStorybookServer } from "storybook-addon-react-native-deployment";

disableStorybookServer();
```

For instance:

```javascript
import { getStorybookUI, configure } from "@storybook/react-native";

import { disableStorybookServer } from "storybook-addon-react-native-deployment";

disableStorybookServer();

configure(() => {
  // import stories
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// ...
```
