import React from 'react'

const Faq = () => {
  return (
    <div>
      <div className="relative w-full px-5 py-16 mx-auto font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
  <h2 className="mb-5 font-sans text-4xl font-bold text-center sm:text-5xl">
    Frequently asked Questions
  </h2>
  <p className="mb-12 text-lg text-center text-gray-600">
    We have written down answers to some of the frequently asked questions. But,
    if you still have any queries, feel free to ping us on chat.
  </p>
  <ul className="space-y-4">
    <li className="text-left">
      <label
        htmlFor="accordion-1"
        className="relative flex flex-col border border-gray-100 rounded-md shadow-md"
      >
        <input
          className="hidden peer"
          type="checkbox"
          id="accordion-1"
          defaultChecked=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 h-4 ml-auto mr-5 text-gray-500 transition top-4 peer-checked:rotate-180"
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
        <div className="relative items-center py-4 pr-12 ml-4 cursor-pointer select-none">
          <h3 className="text-sm text-gray-600 lg:text-base">
            Is there a free trial with Appsy?
          </h3>
        </div>
        <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-96">
          <div className="p-5">
            <p className="text-sm">
              Lorem ipsum, consectetur adipisicing elit. Adipisci eligendi,
              recusandae voluptatum distinctio facilis necessitatibus aperiam
              ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi
              dignissimos quo unde asperiores officiis quos laboriosam similique
              nihil.
            </p>
          </div>
        </div>
      </label>
    </li>
    <li className="text-left">
      <label
        htmlFor="accordion-2"
        className="relative flex flex-col border border-gray-100 rounded-md shadow-md"
      >
        <input className="hidden peer" type="checkbox" id="accordion-2" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 h-4 ml-auto mr-5 text-gray-500 transition top-4 peer-checked:rotate-180"
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
        <div className="relative items-center py-4 pr-12 ml-4 cursor-pointer select-none">
          <h3 className="text-sm text-gray-600 lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
          </h3>
        </div>
        <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-96">
          <div className="p-5">
            <p className="text-sm">
              Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit.
              Adipisci eligendi, recusandae voluptatum distinctio facilis
              necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint
              at reprehenderit commodi dignissimos quo unde asperiores officiis
              quos laboriosam similique nihil.
            </p>
          </div>
        </div>
      </label>
    </li>
    <li className="text-left">
      <label
        htmlFor="accordion-3"
        className="relative flex flex-col border border-gray-100 rounded-md shadow-md"
      >
        <input className="hidden peer" type="checkbox" id="accordion-3" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 h-4 ml-auto mr-5 text-gray-500 transition top-4 peer-checked:rotate-180"
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
        <div className="relative items-center py-4 pr-12 ml-4 cursor-pointer select-none">
          <h3 className="text-sm text-gray-600 lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio.?
          </h3>
        </div>
        <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-96">
          <div className="p-5">
            <p className="text-sm">
              Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit.
              Adipisci eligendi, recusandae voluptatum distinctio facilis
              necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint
              at reprehenderit commodi dignissimos quo unde asperiores officiis
              quos laboriosam similique nihil.
            </p>
          </div>
        </div>
      </label>
    </li>
    <li className="text-left">
      <label
        htmlFor="accordion-4"
        className="relative flex flex-col border border-gray-100 rounded-md shadow-md"
      >
        <input className="hidden peer" type="checkbox" id="accordion-4" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 h-4 ml-auto mr-5 text-gray-500 transition top-4 peer-checked:rotate-180"
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
        <div className="relative items-center py-4 pr-12 ml-4 cursor-pointer select-none">
          <h3 className="text-sm text-gray-600 lg:text-base">
            Lorem ipsum dolor sit amet.?
          </h3>
        </div>
        <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-96">
          <div className="p-5">
            <p className="text-sm">
              Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit.
              Adipisci eligendi, recusandae voluptatum distinctio facilis
              necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint
              at reprehenderit commodi dignissimos quo unde asperiores officiis
              quos laboriosam similique nihil.
            </p>
          </div>
        </div>
      </label>
    </li>
  </ul>
  <div className="flex justify-center mt-20">
    <a
      className="inline-flex px-5 py-3 text-lg text-white bg-blue-500 rounded-lg cursor-pointer"
      href="#"
    >
      Still have questions?
    </a>
  </div>
</div>

    </div>
  )
}

export default Faq