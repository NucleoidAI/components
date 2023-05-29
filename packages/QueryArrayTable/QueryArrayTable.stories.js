import React from "react";
import QueryArrayTable from "./QueryArrayTable";

export default {
  title: "Components/QueryArrayTable",
  component: QueryArrayTable,
  argTypes: {},
};

export const Default = {
  args: {
    json: [
      { name: "item1", type: "string", id: 0 },
      { name: "item2", type: "number", id: 1 },
      { name: "item3", type: "number", id: 2 },
      { name: "item4", type: "string", id: 3 },
      { name: "item5", type: "symbol", id: 4 },
    ],
    pageSize: 5,
  },
};
