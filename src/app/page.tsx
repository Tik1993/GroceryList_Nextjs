import Form from "./components/Form";
import DisplayTable from "./components/DisplayTable";
import { sampleData } from "../data/sampleData";

export default function Home() {
  return (
    <div className="m-3 flex flex-col gap-y-3">
      <h1>Grocery Itme Record list</h1>
      <Form />
      <DisplayTable data={sampleData} />
    </div>
  );
}
