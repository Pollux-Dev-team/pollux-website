import React, { useState } from "react";

const FAQ = ({ question }) => {
  const [showBody, setShowBody] = useState(false);
  return (
    <div className="flex items-center justify-center flex-col my-4">
      <div className="flex justify-center px-5 w-1/2 bg-blue-300 flex-col rounded-md h-auto">
        <div className="flex items-center justify-between m-3">
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

        {showBody ? (
          <div>
            <div className="flex items-center justify-center mb-3">
              <hr className="w-3/4" />
            </div>

            <div className=" mb-3 pl-3 pr-10 bg-blue-300">
              <p>{question.body}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FAQ;
