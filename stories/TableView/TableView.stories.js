import TableView from "../../TableView/TableView";

export default {
  title: "Nucleoid/TableView",
  component: TableView,
  argTypes: {},
};

export const Default = {
  args: {
    data: [
      { name: "param1", type: "string" },
      { name: "param2", type: "number" },
      { name: "param3", type: "string" },
    ],
  },
};
export const LongTable = {
  args: {
    size: "medium",
    data: [
      {
        name: "param1",
        type: "string",
        path: "/",
        params: ["email"],
        description: "Example1",
        children: "none",
        long: "true",
        modular: "indeed",
      },
      {
        name: "param2",
        type: "string",
        path: "/ide",
        params: ["email, password"],
        description: "Example2",
        children: "none",
        long: "true",
        modular: "very",
      },
      {
        name: "param3",
        type: "class",
        path: "/dev",
        params: ["user"],
        description: "Example3",
        children: "none",
        long: "true",
        modular: "modular",
      },
    ],
  },
};
