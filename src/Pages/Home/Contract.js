import React from "react";

const Contract = () => {
  return (
    <div class="hero min-h-screen bg-base-200 ">
      <div class="hero-content flex-col  lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Contract me</h1>
          <p class="py-6">you can contract me.</p>
        </div>
        <div class="card flex-shrink-0 w-full lg:mr-28 max-w-sm shadow-2xl bg-base-100">
          <form class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
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
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control mt-6">
              <input type='submit' value='Send' class="btn btn-primary"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contract;
