import React from "react";
import "./style.css";

export default function NewPost() {
  return (
    <div className="flex justify-center items-center">
      <form className="w-1/2 mt-6">
        <input
          type="text"
          className="input-field"
          placeholder="Article Title"
        />
        <input
          type="text"
          placeholder="What's this  article about?"
          className="input-field"
        />
        <textarea
          rows="5"
          type="text"
          placeholder="Write your article (in markdown) "
          className="input-field"
        />
        <input type="text" placeholder="Enter tags" className="input-field" />

        <div className="text-right">
          <button
            type="submit"
            className="rounded-md border text-white border-secondary bg-secondary hover:bg-secondary-hover hover:border-secondary-hover text-lg py-2 px-5"
          >
            Publish Article
          </button>
        </div>
      </form>
    </div>
  );
}
