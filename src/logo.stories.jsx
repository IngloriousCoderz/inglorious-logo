import Logo from ".";

export default {
  title: "Inglorious Logo",
  component: Logo,
};

export const Default = {
  args: {},
};

export const Big = {
  args: { size: 320 },
};

export const Interactive = {
  args: { ...Big.args, isInteractive: true },
};

export const IngloriousEngine = {
  decorators: [
    (Story) => (
      <div
        style={{
          background: "black",
          width: 320,
          height: 240,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: { size: 128, faces: [{ image: "I", eye: true }, { image: "E" }] },
};
