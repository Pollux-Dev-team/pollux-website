import React, { useState } from "react";

const FAQ = ({ question }) => {
  const [showBody, setShowBody] = useState(false);
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-between px-5 w-3/4 bg-blue-300 my-4 rounded-md h-11">
        <header>{question.header}</header>
        {showBody ? (
          <button
            class="fas fa-times"
            onClick={() => {
              setShowBody((old) => !old);
            }}
          />
        ) : (
          <button
            className="fas fa-plus"
            onClick={() => {
              setShowBody((old) => !old);
            }}
          />
        )}
      </div>
      {showBody ? <p>{question.body}</p> : null}
    </div>
  );
};

export default FAQ;
