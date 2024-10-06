"use client";

import { useState } from "react";
import Form from "./Form";
import DisplayTable from "./DisplayTable";
import Item from "../types/Item";
import { sampleData } from "../../data/sampleData";

export default function GroceryItemList() {
  const [data, setData] = useState<Item[]>(sampleData);

  const handleAddItem = (item: Item) => {
    setData([...data, item]);
  };

  return (
    <div className="m-3 flex flex-col gap-y-3">
      <h1>Grocery Itme Record list</h1>
      <Form onAddItem={handleAddItem} />
      <DisplayTable data={data} />
    </div>
  );
}
