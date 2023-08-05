import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="sm:grid sm:items-center sm:mx-auto  sm:grid-cols-2 md:grid-cols-3  max-w-6xl  space-y-7 space-x-6 ">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}