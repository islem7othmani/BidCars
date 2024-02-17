import React from "react";

function Details() {
  return (
    <>
      <section class="py-10 font-poppins dark:bg-gray-800">
        <div class="max-w-6xl px-4 mx-auto">
          <div class="flex flex-wrap mb-24 -mx-4">
            <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div class="sticky top-0 overflow-hidden ">
                <div class="relative mb-6 lg:mb-10 lg:h-96">
                  <img
                    class="object-contain w-full lg:h-full"
                    src="https://i.pinimg.com/564x/29/04/ee/2904ee8f406baf62c6d4bff476905ab2.jpg"
                    alt=""
                  />
                  <a
                    class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="flex-wrap hidden -mx-2 md:flex">
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <a
                      class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                      href="#"
                    >
                      <img
                        class="object-contain w-full lg:h-28"
                        src="https://i.pinimg.com/736x/58/9b/1a/589b1af94d63a6772f0ea7985b223b5a.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <a
                      class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                      href="#"
                    >
                      <img
                        class="object-contain w-full lg:h-28"
                        src="https://i.pinimg.com/564x/64/62/64/646264a9444855c8f8238c775d8924dc.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <a
                      class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                      href="#"
                    >
                      <img
                        class="object-contain w-full lg:h-28"
                        src="https://i.pinimg.com/564x/4a/a1/a0/4aa1a02fa4bd864f7cd1f028e35ac140.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <a
                      class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                      href="#"
                    >
                      <img
                        class="object-contain w-full lg:h-28"
                        src="https://i.pinimg.com/564x/94/18/aa/9418aa4bfc3ca75b57b7f38c13490bcc.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2">
              <div class="lg:pl-20">
                <div class="mb-6 ">
                  <div>
                    <div className="font-bold text-xl">Vehicle Details</div>
                    <div className="grid grid-rows-2">
                      <span>latest price: <span className="bg-green-200 rounded-lg  py-1 px-2">500.000 DT</span> </span>
                      <span className="pb-4">time rest: <span className="bg-red-400 rounded-lg  py-1 px-2">4 days...</span></span>
                    </div>
                    <div className="border border-black w-12 "></div>
                    <div className="font-semibold">
                      Lot Number: <span>8282167</span>
                    </div>
                    <div className="font-semibold">
                      VIN: <span>info</span>
                    </div>
                    <div className="font-semibold">
                      Title Code: <span>5UXKR0C5XF0******</span>
                    </div>
                    <div className="font-semibold">
                      Odometer: <span>NY - CERTIFICATE OF TITLE</span>
                    </div>
                    <div className="font-semibold">
                      Primary Damage: <span>118,498 mi (ACTUAL)</span>
                    </div>
                    <div className="font-semibold">
                      Cylinders: <span>MINOR DENT/SCRATCHES</span>
                    </div>
                    <div className="font-semibold">
                      Body Style: <span>6</span>
                    </div>
                    <div className="font-semibold">
                      Color: <span>4DR SPOR</span>
                    </div>
                    <div className="font-semibold">
                      Engine Type: <span>BLACK</span>
                    </div >
                    <div className="font-semibold">
                      Transmission: <span>AUTOMATIC</span>
                    </div>
                    <div className="font-semibold">
                      Vehicle Type: <span>AUTOMOBILE</span>
                    </div>
                    <div className="font-semibold">
                      Notes: <span>There are no Notes for this Lot</span>
                    </div>
                  </div>
                  <div>
                    <button class="bg-yellow-200 py-2 px-4 rounded-lg w-56 relative top-6 font-bold shadow-lg">give price</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
