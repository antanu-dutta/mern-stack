import React, { useState } from "react";

const Bookmarks = () => {
  const [bookmarkTitle, setBookmarkTitle] = useState("");
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = () => {
    if (bookmarkTitle.trim() && bookmarkUrl.trim()) {
      setBookmarks([
        ...bookmarks,
        {
          title: bookmarkTitle.trim(),
          url: bookmarkUrl.trim(),
        },
      ]);
      setBookmarkTitle("");
      setBookmarkUrl("");
    }
  };

  const handleDeleteBookmark = (index) => {
    setBookmarks(bookmarks.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-white  rounded-xl shadow p-5 mt-6">
      <h2 className="text-xl font-semibold text-gray-800  mb-4">Bookmarks</h2>

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Title (e.g. GitHub)"
          value={bookmarkTitle}
          onChange={(e) => setBookmarkTitle(e.target.value)}
          className="w-full p-2 border rounded-md   "
        />
        <input
          type="text"
          placeholder="https://example.com"
          value={bookmarkUrl}
          onChange={(e) => setBookmarkUrl(e.target.value)}
          className="w-full p-2 border rounded-md   "
        />
        <button
          onClick={handleAddBookmark}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Save
        </button>
      </div>

      <ul className="space-y-3">
        {bookmarks.map((bm, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100  p-3 rounded"
          >
            <div>
              <p className="font-medium text-gray-800 ">{bm.title}</p>
              <a
                href={bm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  text-sm underline"
              >
                {bm.url}
              </a>
            </div>
            <button
              onClick={() => handleDeleteBookmark(index)}
              className="text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Bookmarks;
