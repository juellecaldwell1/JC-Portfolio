// src/App.jsx
export default function App() {
  const goku = 1;
  const vegeta = 2;
  const final = goku + vegeta;
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS! goku is next {final}</h1>
    </div>
  );
}
