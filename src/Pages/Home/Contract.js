import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contract = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cboyjso",
        "template_rpl32ac",
        form.current,
        "3dNDG41BDGNfuhAM8"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div class="hero min-h-screen bg-base-200 ">
      <div class="hero-content flex-col  lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Contract me</h1>
          <p class="py-6">you can contact me.</p>
        </div>
        <div class="card flex-shrink-0 w-full lg:mr-28 max-w-sm shadow-2xl bg-base-100">
          <form class="card-body" ref={form} onSubmit={sendEmail}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
                name="user_name"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Message"
                name="message"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control mt-6">
              <input type="submit" value="Send" class="btn btn-primary" />
            </div>
            {done && (
              <div class="alert alert-success shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Send message successfully</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contract;
