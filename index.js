import addons from "@storybook/addons";
import Channel from "@storybook/channels";

const createChannel = () => {
  const transport = {
    setHandler: () => {},
    send: () => {}
  };

  return new Channel({ transport });
};

export const mockChannel = () => addons.setChannel(createChannel());
