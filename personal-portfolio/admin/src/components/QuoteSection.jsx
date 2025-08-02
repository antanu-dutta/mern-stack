import React, { useEffect, useState } from "react";

const QuoteSection = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        setLoading(false);
      })
      .catch(() => {
        setQuote("Unable to fetch quote.");
        setAuthor("Try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-white  rounded-xl shadow p-5 mt-6">
      <h2 className="text-xl font-semibold text-gray-800  mb-3">
        Motivational Quote
      </h2>

      {loading ? (
        <div className="flex justify-center items-center py-10 text-indigo-600 ">
          <svg
            className="animate-spin h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <span className="ml-2">Loading quote...</span>
        </div>
      ) : (
        <blockquote className="italic text-gray-600  border-l-4 border-indigo-600 pl-4">
          "{quote}"
          <footer className="text-right mt-2 text-sm text-gray-500 ">
            — {author}
          </footer>
        </blockquote>
      )}
    </section>
  );
};

export default QuoteSection;
