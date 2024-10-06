"use client";
import { FormEvent, useRef } from "react";
import Item from "../types/Item";

interface FormProps {
  onAddItem: (item: Item) => void;
}

export default function Form({ onAddItem }: FormProps) {
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const item = {
    id: 0,
    name: "",
    price: 0,
    category: "",
    location: "",
    description: "",
    Date: new Date(),
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (itemNameRef.current !== null) {
      item.name = itemNameRef.current.value;
    }
    if (itemPriceRef.current !== null) {
      const print = parseFloat(itemPriceRef.current.value);
      if (isNaN(print)) {
        alert("Please enter a valid number");
        return;
      } else {
        item.price = print;
      }
    }
    if (
      categoryRef.current !== null &&
      categoryRef.current.value !== "Category"
    ) {
      item.category = categoryRef.current.value;
    }
    if (locationRef.current !== null) {
      item.location = locationRef.current.value;
    }
    if (descriptionRef.current !== null) {
      item.description = descriptionRef.current.value;
    }
    onAddItem(item);
  };
  return (
    <>
      <div className="max-w-2xl">
        <h1 className="text-3xl">Add Item</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="item-name"
              className="input input-bordered flex items-center gap-2"
            >
              Item Name{" "}
              <input
                ref={itemNameRef}
                id="item-name"
                type="text"
                className="grow"
              />
            </label>
          </div>
          <div className="mb-3">
            <label
              htmlFor="item-price"
              className="input input-bordered flex items-center gap-2"
            >
              Item Price{" "}
              <input
                ref={itemPriceRef}
                id="item-price"
                type="string"
                className="grow"
              />
            </label>
          </div>
          <div className="mb-3">
            <select
              ref={categoryRef}
              defaultValue={"Category"}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled>Category</option>
              <option>Food</option>
              <option>Drink</option>
              <option>Household</option>
              <option>Others</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="item-location"
              className="input input-bordered flex items-center gap-2"
            >
              Location
              <input
                ref={locationRef}
                id="item-location"
                type="type"
                className="grow"
              />
            </label>
          </div>
          <div className="mb-3">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Note"
              ref={descriptionRef}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
