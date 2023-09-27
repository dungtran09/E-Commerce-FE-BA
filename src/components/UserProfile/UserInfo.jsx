import React from "react";

const UserInfo = ({ user }) => {
  return (
    <>
      <div className="flow-root">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {user?.firstName} {user?.lastName}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Email</dt>
            <dd className="text-gray-700 sm:col-span-2">{user?.email}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Phone</dt>
            <dd className="text-gray-700 sm:col-span-2">{user?.phoneNumber}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Address</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {user?.address?.[0]}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default UserInfo;
