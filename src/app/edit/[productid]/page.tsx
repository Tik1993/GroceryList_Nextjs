"use client";
import Link from "next/link";
import Form from "@/app/components/Form";
import Item from "@/app/types/Item";
import { sampleData } from "@/data/sampleData";

export default function EditProductPage({
  params,
}: {
  params: { productid: string };
}) {
  const item = sampleData.find(
    (item) => item.id === parseInt(params.productid)
  );

  const handleEdit = (item: Item) => {
    console.log("Edit");
    console.log(item);
  };
  return (
    <div>
      <h1>Edit Product {params.productid}</h1>
      <div className="mb-3">
        <Form onSubmit={handleEdit} initialItem={item} />
      </div>

      <Link href="/" className="btn btn-primary">
        Back to list
      </Link>
    </div>
  );
}
