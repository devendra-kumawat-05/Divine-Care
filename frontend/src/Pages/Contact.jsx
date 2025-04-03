import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "14320e54-9607-4433-a0c3-a85a30ceb09a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Feedback sent successfully");
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm bg-blue-50">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            54709 Anthoni station <br /> Section 350, California, USA
          </p>
          <p className="text-gray-500">
            Tel: (449) 1800-4455-0123 <br /> devendra94kumawat@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600 ">
            Careers at Divine Care
          </p>
          <p className="text-gray-600">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-evenly text-center text-sm py-5 text-gray-500 bg-blue-50">
          <form
            className="w-1/3 flex justify-center flex-col gap-4"
            onSubmit={onSubmit}
          >
            <p className="text-lg ">Reach out to us</p>
            <input
              className="border border-gray-200 rounded py-2 px-4"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="border border-gray-200 rounded py-2 px-4"
              type="email"
              name="email"
              placeholder="Email"
            />
            <textarea
              className="border border-gray-200 rounded py-2 px-4"
              name="message"
              placeholder="Message/Feedback"
              rows={3}
            ></textarea>
            <button
              className="border rounded border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500"
              type="submit"
              onClick={() => navigate("/")}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
