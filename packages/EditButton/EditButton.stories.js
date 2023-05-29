import EditButton from "./EditButton";

export default {
  title: "Nucleoid/EditButton",
  component: EditButton,
  argTypes: {
    openEditDialog: { action: "clicked" },
  },
};

export const Default = {
  args: {
    openEditDialog: () => console.log("Opened edit dialog"),
  },
};
