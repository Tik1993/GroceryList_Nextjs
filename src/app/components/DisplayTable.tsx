"use client";
import Link from "next/link";
import Item from "../types/Item";

interface DisplayTableProps {
  data: Item[];
  onDelete: (id: number) => void;
}

export default function DisplayTable({ data, onDelete }: DisplayTableProps) {
  return (
    <>
      <h1 className="text-3xl">Table</h1>
      <div className="overflow-x-auto">
        <table className="table max-w-4xl">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Location</th>
              <th>Description</th>
              <th>Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.location}</td>
                <td>{item.description}</td>
                <td>
                  {item.Date instanceof Date
                    ? item.Date.toLocaleString()
                    : item.Date}
                </td>
                <td>
                  <Link href={`/edit/${item.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="btn btn-secondary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
