import React from "react";
import Button from "../Button/Button";

const ChangePassword = ({ user }) => {
  return (
    <>
      <form className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user?.email}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6">
          <label
            htmlFor="password_old"
            className="block text-sm font-medium text-gray-700"
          >
            Old password
          </label>

          <input
            type="password"
            id="password_old"
            name="password_old"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            New password
          </label>

          <input
            type="password"
            id="password_new"
            name="password_new"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="confirm_password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm password
          </label>

          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <Button name="Changed"></Button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
