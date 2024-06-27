import React from 'react'

const Dashboard = () => {
  return (
    <div>

<>
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  :root {\n    font-family: 'Source Sans Pro';\n  }\n  main#dashboard-main::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n  }\n  main#dashboard-main::-webkit-scrollbar-thumb {\n    border-radius: 9999px;\n    background-color: rgb(156 163 175 / 0.75);\n  }\n  main#dashboard-main::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px rgb(156 163 175 / 0.75);\n    border-radius: 10px;\n  }\n"
    }}
  />
<div className="flex h-screen bg-slate-200">
  <div>
    <div className="flex flex-col h-screen my-4 bg-[#bab5d5]  w-72 rounded-tr-1xl rounded-br-1xl">
      <ul className="flex flex-col mt-12">
      <li className="relative transition">
        <input
          className="hidden peer"
          type="checkbox"
          id="menu-1"
          defaultChecked=""
        />
        <div className="relative flex items-center py-3 pl-5 m-2 text-sm text-gray-500 border-b-4 border-gray-400 rounded-xl bg-gray-50">
          <span className="flex w-5 mr-5 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path
                fill="currentColor"
                d="M13 19h6V9.978l-7-5.444-7 5.444V19h6v-6h2v6zm8 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20z"
              />
            </svg>
          </span>
          Dashboard
          <label
            htmlFor="menu-1"
            className="absolute inset-0 w-full h-full cursor-pointer"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 h-4 ml-auto mr-5 text-gray-500 transition peer-checked:rotate-180 top-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <ul className="flex flex-col m-2 overflow-hidden transition-all duration-300 bg-gray-100 duration-400 peer-checked:max-h-96 max-h-0 rounded-2xl">
          <li className="flex py-3 pl-5 m-2 text-sm text-gray-500 cursor-pointer rounded-xl hover:bg-white">
            <span className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </span>
            Carnival
          </li>
          <li className="flex py-3 pl-5 m-2 text-sm text-gray-500 cursor-pointer rounded-xl hover:bg-white">
            <span className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            Analytics
          </li>
          <li className="flex py-3 pl-5 m-2 text-sm text-gray-500 cursor-pointer rounded-xl hover:bg-white">
            <span className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            Revenue
          </li>
        </ul>
      </li>
      <li className="relative transition">
        <input className="hidden peer" type="checkbox" id="menu-2" />
        <div className="relative flex items-center py-3 pl-5 m-2 text-sm text-gray-500 border-b-4 border-gray-300 rounded-xl bg-gray-50">
          <span className="flex w-5 mr-5 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          Analytics
          <label
            htmlFor="menu-2"
            className="absolute inset-0 w-full h-full cursor-pointer"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 h-4 ml-auto mr-5 text-gray-500 transition peer-checked:rotate-180 top-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <ul className="flex flex-col m-2 overflow-hidden transition-all duration-300 bg-gray-100 duration-400 peer-checked:max-h-96 max-h-0 rounded-2xl">
          <li className="flex py-3 pl-5 m-2 text-sm text-gray-500 cursor-pointer rounded-xl hover:bg-white">
            <span className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </span>
            Carnival
          </li>
          <li className="flex py-3 pl-5 m-2 text-sm text-gray-500 cursor-pointer rounded-xl hover:bg-white">
            <span className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            Analytics
          </li>
          <li className="flex py-3 pl-5 m-2 text-sm text-gray-500 cursor-pointer rounded-xl hover:bg-white">
            <span className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            Revenue
          </li>
        </ul>
      </li>
      <li className="relative transition">
        <div className="relative flex items-center py-3 pl-5 m-2 text-sm text-gray-500 cursor-pointer rounded-xl hover:bg-gray-50">
          <span className="flex w-5 mr-5 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
          Support Tickets
        </div>
      </li>
      <li className="relative transition">
        <div className="relative flex items-center py-3 pl-5 m-2 text-sm text-gray-500 cursor-pointer rounded-xl hover:bg-gray-50">
          <span className="flex w-5 mr-5 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
          Settings
        </div>
      </li>
    </ul>
  </div>
</div>

    {/* /Sidebar */}
    <div className="flex flex-col w-full h-full">
      {/* Navbar */}
      <header className="relative flex flex-col items-center px-4 py-4 bg-[#bab5d5] shadow sm:flex-row md:h-20">
        <div className="flex flex-col justify-between w-full overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
          <div className="relative flex items-center justify-between ml-10 rounded-md sm:ml-auto">
            <svg
              className="absolute block w-5 h-5 text-gray-400 left-2"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={11} cy={11} r={8} className="" />
              <line x1={21} y1={21} x2="16.65" y2="16.65" className="" />
            </svg>
            <input
              type="name"
              name="search"
              className="w-full h-12 py-4 pl-12 pr-4 bg-gray-100 border border-gray-100 rounded-md shadow-sm outline-none focus:border-blue-500"
              placeholder="Search for anything"
            />
          </div>
          <ul className="flex mx-auto mt-4 space-x-6 sm:mx-5 sm:mt-0">
            <li className="">
              <button className="flex items-center justify-center w-8 h-8 text-gray-600 border rounded-xl hover:text-black hover:shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </li>
            <li className="">
              <button className="flex items-center justify-center w-8 h-8 text-gray-600 border rounded-xl hover:text-black hover:shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button>
            </li>
            <li className="">
              <button className="flex items-center justify-center w-8 h-8 text-gray-600 border rounded-xl hover:text-black hover:shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </header>
      {/* /Navbar */}
      {/* Main */}
      <div className="h-full pl-10 overflow-hidden">
        <main
          id="dashboard-main"
          className="h-[calc(100vh-10rem)] overflow-auto px-4 py-10"
        >
          {/* Put your content inside of the <main/> tag */}
          <h1 className="text-2xl font-black text-gray-800">Good Morning!</h1>
          <p className="mb-6 text-gray-600">
            Here's an overview of your monthly transactions.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-8">
            <div className="h-56 p-10 bg-white shadow-md w-72 rounded-xl" />
            <div className="h-56 p-10 bg-white shadow-md w-72 rounded-xl" />
            <div className="w-full h-56 p-10 bg-white shadow-md rounded-xl" />
            <div className="w-full h-56 p-10 bg-white shadow-md rounded-xl" />
            <div className="w-full h-56 p-10 bg-white shadow-md rounded-xl" />
          </div>
        </main>
      </div>
      {/* /Main */}
    </div>
  </div>
</>

    </div>
  )
}

export default Dashboard