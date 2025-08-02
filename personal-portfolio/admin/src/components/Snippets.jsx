import React, { useState } from "react";

const Snippets = () => {
  const [snippetTitle, setSnippetTitle] = useState("");
  const [snippetCode, setSnippetCode] = useState("");
  const [snippets, setSnippets] = useState([]);

  const handleAddSnippet = () => {
    if (snippetTitle.trim() && snippetCode.trim()) {
      setSnippets([
        ...snippets,
        { title: snippetTitle.trim(), code: snippetCode.trim() },
      ]);
      setSnippetTitle("");
      setSnippetCode("");
    }
  };

  const handleDeleteSnippet = (index) => {
    setSnippets(snippets.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-white rounded-xl shadow p-5 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Code Snippets
      </h2>

      <div className="flex flex-col gap-3 mb-4">
        <input
          type="text"
          placeholder="Snippet title (e.g. Fetch API)"
          value={snippetTitle}
          onChange={(e) => setSnippetTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <textarea
          placeholder="Paste your code here..."
          value={snippetCode}
          onChange={(e) => setSnippetCode(e.target.value)}
          rows="5"
          className="w-full p-2 border rounded-md font-mono"
        ></textarea>
        <button
          onClick={handleAddSnippet}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Save Snippet
        </button>
      </div>

      <ul className="space-y-3">
        {snippets.map((snip, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{snip.title}</p>
                <pre className="bg-white p-2 rounded mt-1 text-sm overflow-auto">
                  {snip.code}
                </pre>
              </div>
              <button
                onClick={() => handleDeleteSnippet(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Snippets;
