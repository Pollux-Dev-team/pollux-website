import React from "react";

const Form = () => {
  return (
    <div className="flex flex-row justify-center items-center m-auto">
      <div className="flex flex-col py-24 px-12">
        <img
          src="https://s3-alpha-sig.figma.com/img/c3f4/b722/f9c80ccaec017e557fb064a3e312423c?Expires=1632700800&Signature=RnypUhXBguyepVHlwi7KSfOdwwY3e7a-RESIosdT03QxdlpT9i7-8S6vy0Z7AKllG7ad9v9AiefpEsRo0qTHTO9S-4yqtZ9LnKbJxByr~MdUrsdiy27qJ8bKRX1dLuvqaFdIdcVPZsT6Nk6bk8~Yby2hBJkb6QnI6zCMHcuB5tphM7F3szkzjsbQ-v6rtU4OM~r0KEtteRF3~42hBhPUdqJ~b3e3X1YT4GJNKrpwaRxpTxs-hvM4y0mNwaaU0EUN1b5zVblHhRnuY5I~8gTAKK3f6uB6KNISzBL1fEtF6gh4uyVdqqVeN6P0P7h~EF9aGYEUJonwDgIh4iW9BfSa6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          className="width-64 "
        />
      </div>
      <div className="flex flex-col py-24 px-12">
        <h2 className="text-xl my-12 italic font-bold">Or just hit us up!</h2>
        <input type="text" className="w-96 border-none bg-blue-400 placeholder-gray-200 rounded-lg p-3 my-2" placeholder="Name" />
        <input type="text" className="w-96 border-none bg-blue-400 placeholder-gray-200 rounded-lg p-3 my-2" placeholder="Email" />
        <input type="text" className="w-96 border-none bg-blue-400 placeholder-gray-200 rounded-lg p-3 my-2" placeholder="Mobile" />
        <input type="text" className="w-96 border-none bg-blue-400 placeholder-gray-200 rounded-lg px-3 pb-24 pt-3 my-4" placeholder="Comments" />
        <button className="w-24 text-center p-2 font-sm justify-center m-auto font-light rounded-3xl text-gray-200 bg-red-500">Submit</button>
      </div>
    </div>
  );
};

export default Form;
