import React from "react";
import icons from "../../utils/icons";

const UserMenuBar = ({ idEl, setIdEl, user }) => {
  const { MdKeyboardArrowDown } = icons;

  const onClickHandler = (e) => {
    setIdEl(e.target.id);
  };
  return (
    <>
      <div className="border-x bg-white">
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-1">
            <li>
              <div
                id="user-info"
                onClick={(e) => onClickHandler(e)}
                className={`block rounded-lg ${
                  idEl === "user-info" ? "bg-gray-100 " : ""
                } px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer`}
              >
                General
              </div>
            </li>

            <li>
              <div
                id="billding"
                onClick={(e) => onClickHandler(e)}
                className={`cursor-pointer block rounded-lg px-4 py-2 text-sm ${
                  idEl === "billding" ? "bg-gray-100 " : ""
                } font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
              >
                Billing
              </div>
            </li>

            <li>
              <div
                id="invoices"
                onClick={(e) => onClickHandler(e)}
                className={`cursor-pointer block rounded-lg px-4 py-2 text-sm ${
                  idEl === "invoices" ? "bg-gray-100 " : ""
                }font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
              >
                Invoices
              </div>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm text-gray-700 font-medium">
                    Account settings
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <MdKeyboardArrowDown size={22} />
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <span
                      id="change-profile"
                      onClick={(e) => onClickHandler(e)}
                      className={`cursor-pointer block rounded-lg px-4 py-2 text-sm ${
                        idEl === "change-profile" ? "bg-gray-100 " : ""
                      }font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                    >
                      Change Profile
                    </span>
                  </li>

                  <li>
                    <span
                      id="change-password"
                      onClick={(e) => onClickHandler(e)}
                      className={`cursor-pointer block rounded-lg px-4 py-2 ${
                        idEl === "change-password" ? "bg-gray-100" : ""
                      } text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                    >
                      Change Password
                    </span>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <img
              alt="user image"
              src={user?.photo}
              className="h-10 w-10 rounded-full border p-2 object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">
                  {user?.firstName} {user?.lastName}
                </strong>

                <span> {user?.email} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMenuBar;
