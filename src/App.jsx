import { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue.trim()]);
    setInputValue("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Task Manager</h1>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={handleAddItem}
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition font-medium"
          >
            Add Item
          </button>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
          {items.length === 0 ? (
            <p className="text-gray-400 text-center">No items yet</p>
          ) : (
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800 shadow-sm hover:shadow-md transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}


