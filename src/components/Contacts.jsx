import React from "react";

function Contacts() {
  return (
    <>
      <div name="Contacts" className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-5xl font-extrabold mt-6 text-center">
          Contact <span className="text-red-700">Me </span>
        </h1>
        <div className="flex flex-col items-center justify-center mt-7">
          <form action="https://getform.io/f/akkgplda" method="POST" className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h1 className="text-xl font-semibold text-center mt-4">
              Send Your Message
            </h1>
            <div className=" flex flex-col mb-4">
              <label className="block bg-grey-100 mt-7 font-bold">
                Fullname
              </label>
              <input
                type="text"
                className=" py-3 px-4 mt-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
                placeholder="Enter Your Full Name"
                name="name"
              />
              <label className="block bg-grey-100 mt-7 font-bold">Email Address</label>
              <input
                type="text"
                className=" py-3 px-4 mt-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
                placeholder="Enter Your Email Address"
                name="email"
              />
              <label className="block bg-grey-100 mt-7 font-bold">Message</label>
              <textarea
                type="text"
                className=" py-3 px-4 mt-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
                placeholder="Enter Your Query"
                name="message">
                </textarea>
              <button className="btn btn-primary mt-4 " type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <hr />

    </>
  );
}

export default Contacts;
