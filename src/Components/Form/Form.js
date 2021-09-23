import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [update, setupdate] = useState(0);
  const [valid, setValid] = useState(false);

  const sendEmail = (e) => {
    setSubmitted(true);
    e.preventDefault();
    const fullName = form.current.full_name.value;
    const email = form.current.email.value;
    const mobile = form.current.mobile.value;
    const message = form.current.message.value;

    console.log(fullName, email, mobile, message);
    if (fullName && email && mobile) {
      setValid(true);
      emailjs
        .sendForm(
          "service_iq5nhuz",
          "template_wr1fymn",
          form.current,
          "user_TvonjRvDCWvR1qvNa5pcp"
        )
        .then(
          (result) => {
            setSubmitted(true);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setupdate(update + 1);
  };

  return (

    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-row justify-center items-center m-auto"
    >
      <div className="flex flex-col md:block hidden py-24 px-12">
        <img
          src="https://s3-alpha-sig.figma.com/img/c3f4/b722/f9c80ccaec017e557fb064a3e312423c?Expires=1632700800&Signature=RnypUhXBguyepVHlwi7KSfOdwwY3e7a-RESIosdT03QxdlpT9i7-8S6vy0Z7AKllG7ad9v9AiefpEsRo0qTHTO9S-4yqtZ9LnKbJxByr~MdUrsdiy27qJ8bKRX1dLuvqaFdIdcVPZsT6Nk6bk8~Yby2hBJkb6QnI6zCMHcuB5tphM7F3szkzjsbQ-v6rtU4OM~r0KEtteRF3~42hBhPUdqJ~b3e3X1YT4GJNKrpwaRxpTxs-hvM4y0mNwaaU0EUN1b5zVblHhRnuY5I~8gTAKK3f6uB6KNISzBL1fEtF6gh4uyVdqqVeN6P0P7h~EF9aGYEUJonwDgIh4iW9BfSa6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          className="w-64 "
          alt="form"
        />
      </div>
      <div className="flex flex-col py-24 px-12">
        <h2 className="text-xl my-12 italic font-bold">Or just hit us up!</h2>
        {submitted && valid ? (
          <div className="text-green-600">
            Success! Thank you for contacting us!
          </div>
        ) : null}
        <input
          type="text"
          name="full_name"
          className="w-96 border-none bg-blue-400 placeholder-gray-200 rounded-lg p-3 my-2"
          placeholder="Name"
        />
        {submitted && form.current.full_name.value === "" ? (
          <span className="text-red-500	">Please enter your full name</span>
        ) : null}
        <input
          type="text"
          name="email"
          className="w-96 border-none bg-blue-400 placeholder-gray-200 rounded-lg p-3 my-2"
          placeholder="Email"
        />
        {submitted && form.current.email.value === "" ? (
          <span className="text-red-500	">Please enter your email address</span>
        ) : null}
        <input
          type="text"
          name="mobile"
          className="w-96 border-none bg-blue-400 placeholder-gray-200 rounded-lg p-3 my-2"
          placeholder="Mobile"
        />
        {submitted && form.current.mobile.value === "" ? (
          <span className="text-red-500	">Please enter your phone number</span>
        ) : null}
        <input
          type="text"
          name="message"
          className="w-96 border-none bg-blue-400 placeholder-gray-200 rounded-lg px-3 pb-24 pt-3 my-4"
          placeholder="Message"
        />
        {submitted && valid ? null : (
          <input
            value="Submit"
            type="submit"
            className="w-24 text-center p-2 font-sm justify-center m-auto font-light rounded-3xl text-gray-200 bg-red-500 cursor-pointer"
          />
        )}
      </div>
    </form>
  );
};

export default Form;
