import React, { useState, useEffect } from "react";

const Live = () => {
  const initialSeconds = 5;
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          return initialSeconds; // Reset timer to initial value when it reaches 0
        }
        return prevSeconds - 1;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once


  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css?family=Amatic+SC');

          body {
            background-color: #fde994;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
          }

          h1 {
            position: relative;
            margin: 0 auto;
            top: 25vh;
            width: 100vw;
            text-align: center;
            font-family: 'Amatic SC';
            font-size: 6vh;
            color: #333;
            opacity: .75;
            animation: pulse 2.5s linear infinite;
          }

          #cooking {
            position: relative;
            margin: 0 auto;
            top: 0;
            width: 75vh;
            height: 75vh;
            overflow: hidden;
          }

          .bubble {
            position: absolute;
            border-radius: 100%;
            box-shadow: 0 0 .25vh lighten($color, 10%);
            opacity: 0;
          }

          .bubble-1 {
            margin-top: 2.5vh;
            left: 58%;
            width: 2.5vh;
            height: 2.5vh;
            background-color: lighten(#333, 7%);
            animation: bubble 2s cubic-bezier(.53, .16, .39, .96) infinite;
          }

          .bubble-2 {
            margin-top: 3vh;
            left: 52%;
            width: 2vh;
            height: 2vh;
            background-color: lighten(#333, 4%);
            animation: bubble 2s ease-in-out .35s infinite;
          }

          .bubble-3 {
            margin-top: 1.8vh;
            left: 50%;
            width: 1.5vh;
            height: 1.5vh;
            background-color: #333;
            animation: bubble 1.5s cubic-bezier(.53, .16, .39, .96) .55s infinite;
          }

          .bubble-4 {
            margin-top: 2.7vh;
            left: 56%;
            width: 1.2vh;
            height: 1.2vh;
            background-color: darken(#333, 3%);
            animation: bubble 1.8s cubic-bezier(.53, .16, .39, .96) .9s infinite;
          }

          .bubble-5 {
            margin-top: 2.7vh;
            left: 63%;
            width: 1.1vh;
            height: 1.1vh;
            background-color: darken(#333, 6%);
            animation: bubble 1.6s ease-in-out 1s infinite;
          }

          #area {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 50%;
            height: 50%;
            background-color: transparent;
            transform-origin: 15% 60%;
            animation: flip 2.1s ease-in-out infinite;
          }

          #sides {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-origin: 15% 60%;
            animation: switchSide 2.1s ease-in-out infinite;
          }

          #handle {
            position: absolute;
            bottom: 18%;
            right: 80%;
            width: 35%;
            height: 20%;
            background-color: transparent;
            border-top: 1vh solid #333;
            border-left: 1vh solid transparent;
            border-radius: 100%;
            transform: rotate(20deg) rotateX(0deg) scale(1.3, .9);
          }

          #pan {
            position: absolute;
            bottom: 20%;
            right: 30%;
            width: 50%;
            height: 8%;
            background-color: #333;
            border-radius: 0 0 1.4em 1.4em;
            transform-origin: -15% 0;
          }

          #pancake {
            position: absolute;
            top: 24%;
            width: 100%;
            height: 100%;
            transform: rotateX(85deg);
            animation: jump 2.1s ease-in-out infinite;
          }

          #pastry {
            position: absolute;
            bottom: 26%;
            right: 37%;
            width: 40%;
            height: 45%;
            background-color: #333;
            box-shadow: 0 0 3px 0 #333;
            border-radius: 100%;
            transform-origin: -20% 0;
            animation: fly 2.1s ease-in-out infinite;
          }

          @keyframes jump {
            0% {
              top: 24%;
              transform: rotateX(85deg);
            }
            25% {
              top: 10%;
              transform: rotateX(0deg);
            }
            50% {
              top: 30%;
              transform: rotateX(85deg);
            }
            75% {
              transform: rotateX(0deg);
            }
            100% {
              transform: rotateX(85deg);
            }
          }

          @keyframes flip {
            0% {
              transform: rotate(0deg);
            }
            5% {
              transform: rotate(-27deg);
            }
            30%, 50% {
              transform: rotate(0deg);
            }
            55% {
              transform: rotate(27deg);
            }
            83.3% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          @keyframes switchSide {
            0% {
              transform: rotateY(0deg);
            }
            50% {
              transform: rotateY(180deg);
            }
            100% {
              transform: rotateY(0deg);
            }
          }

          @keyframes fly {
            0% {
              bottom: 26%;
              transform: rotate(0deg);
            }
            10% {
              bottom: 40%;
            }
            50% {
              bottom: 26%;
              transform: rotate(-190deg);
            }
            80% {
              bottom: 40%;
            }
            100% {
              bottom: 26%;
              transform: rotate(0deg);
            }
          }

          @keyframes bubble {
            0% {
              transform: scale(.15, .15);
              top: 80%;
              opacity: 0;
            }
            50% {
              transform: scale(1.1, 1.1);
              opacity: 1;
            }
            100% {
              transform: scale(.33, .33);
              top: 60%;
              opacity: 0;
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1, 1);
              opacity: .25;
            }
            50% {
              transform: scale(1.2, 1);
              opacity: 1;
            }
            100% {
              transform: scale(1, 1);
              opacity: .25;
            }
          }
        `}
      </style>

      <h1 className="absolute top-1/4 w-full text-center font-amatic text-6xl text-cooking-animation opacity-75">
        Bid in progress.. <span>{seconds}</span>{" "}
      </h1>
      <h2 className="relative top-56 flex justify-center font-semibold text-lg ">12 PM - 13 PM</h2>
      <div
        id="cooking"
        className="absolute top-0 left-0 w-3/4 h-3/4 mx-auto overflow-hidden"
      >
        <div className="bubble-1 absolute mt-10 left-5/6 w-10 h-10 bg-gray-300 rounded-full animate-bubble"></div>
        <div className="bubble-2 absolute mt-12 left-1/2 w-8 h-8 bg-gray-400 rounded-full animate-bubble"></div>
        <div className="bubble-3 absolute mt-7 left-1/2 w-6 h-6 bg-gray-700 rounded-full animate-bubble"></div>
        <div className="bubble-4 absolute mt-11 left-4/6 w-5 h-5 bg-gray-500 rounded-full animate-bubble"></div>
        <div className="bubble-5 absolute mt-11 left-2/3 w-4 h-4 bg-gray-800 rounded-full animate-bubble"></div>
        <div
          id="area"
          className="absolute bottom-0 right-0 w-1/2 h-1/2 transform origin-right animate-flip"
        >
          <div
            id="sides"
            className="absolute w-full h-full transform origin-right animate-switchSide"
          >
            <div
              id="handle"
              className="absolute bottom-18% right-80% w-1/3 h-20% border-t-10 border-white border-transparent transform rotate-20 rotate-x-0 scale-130"
            ></div>
            <div
              id="pan"
              className="absolute bottom-20% right-30% w-1/2 h-8 bg-white rounded-b-4xl transform origin-left-0"
            ></div>
          </div>
          <div
            id="pancake"
            className="absolute top-24% w-full h-full transform rotate-x-85 animate-jump"
          >
            <div
              id="pastry"
              className="absolute bottom-26% right-37% w-2/5 h-45% bg-white shadow-md rounded-full transform origin-left-0 animate-fly"
            ></div>
          </div>
        </div>
      </div>

      <div className="space-y-4 absolute left-4 top-6">
        <div
          id="toast-notification"
          class="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
          role="alert"
        >
          <div class="flex items-center mb-3">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              New notification
            </span>
            <button
              type="button"
              class="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-notification"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center">
            <div class="relative inline-block shrink-0">
              <img
                class="w-12 h-12 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinJi3cjJG8GZ7qGrj9hOf2YamiYtScEtmSOQabLkAEEVz3CxPC6l0xkLXV2SMQhvrH7I&usqp=CAU"
                alt="Jese Leos image"
              />
              <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                <svg
                  class="w-3 h-3 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 18"
                  fill="currentColor"
                >
                  <path
                    d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z"
                    fill="currentColor"
                  />
                </svg>
                <span class="sr-only">Message icon</span>
              </span>
            </div>
            <div class="ms-3 text-sm font-normal">
              <div class="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </div>
              <div class="text-sm font-normal">commented on your photo</div>
              <span class="text-xs font-medium text-blue-600 dark:text-blue-500">
                a few seconds ago
              </span>
            </div>
          </div>
        </div>

        <div
          id="toast-notification"
          class="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
          role="alert"
        >
          <div class="flex items-center mb-3">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              New notification
            </span>
            <button
              type="button"
              class="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-notification"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center">
            <div class="relative inline-block shrink-0">
              <img
                class="w-12 h-12 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinJi3cjJG8GZ7qGrj9hOf2YamiYtScEtmSOQabLkAEEVz3CxPC6l0xkLXV2SMQhvrH7I&usqp=CAU"
                alt="Jese Leos image"
              />
              <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                <svg
                  class="w-3 h-3 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 18"
                  fill="currentColor"
                >
                  <path
                    d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z"
                    fill="currentColor"
                  />
                </svg>
                <span class="sr-only">Message icon</span>
              </span>
            </div>
            <div class="ms-3 text-sm font-normal">
              <div class="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </div>
              <div class="text-sm font-normal">commented on your photo</div>
              <span class="text-xs font-medium text-blue-600 dark:text-blue-500">
                a few seconds ago
              </span>
            </div>
          </div>
        </div>

        <div
          id="toast-notification"
          class="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
          role="alert"
        >
          <div class="flex items-center mb-3">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              New notification
            </span>
            <button
              type="button"
              class="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-notification"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center">
            <div class="relative inline-block shrink-0">
              <img
                class="w-12 h-12 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinJi3cjJG8GZ7qGrj9hOf2YamiYtScEtmSOQabLkAEEVz3CxPC6l0xkLXV2SMQhvrH7I&usqp=CAU"
                alt="Jese Leos image"
              />
              <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                <svg
                  class="w-3 h-3 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 18"
                  fill="currentColor"
                >
                  <path
                    d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z"
                    fill="currentColor"
                  />
                </svg>
                <span class="sr-only">Message icon</span>
              </span>
            </div>
            <div class="ms-3 text-sm font-normal">
              <div class="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </div>
              <div class="text-sm font-normal">commented on your photo</div>
              <span class="text-xs font-medium text-blue-600 dark:text-blue-500">
                a few seconds ago
              </span>
            </div>
          </div>
        </div>

        <div
          id="toast-notification"
          class="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
          role="alert"
        >
          <div class="flex items-center mb-3">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              New notification
            </span>
            <button
              type="button"
              class="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-notification"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center">
            <div class="relative inline-block shrink-0">
              <img
                class="w-12 h-12 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinJi3cjJG8GZ7qGrj9hOf2YamiYtScEtmSOQabLkAEEVz3CxPC6l0xkLXV2SMQhvrH7I&usqp=CAU"
                alt="Jese Leos image"
              />
              <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                <svg
                  class="w-3 h-3 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 18"
                  fill="currentColor"
                >
                  <path
                    d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z"
                    fill="currentColor"
                  />
                </svg>
                <span class="sr-only">Message icon</span>
              </span>
            </div>
            <div class="ms-3 text-sm font-normal">
              <div class="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </div>
              <div class="text-sm font-normal">commented on your photo</div>
              <span class="text-xs font-medium text-blue-600 dark:text-blue-500">
                a few seconds ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-12 top-6 w-72  shadow-xl rounded-lg bg-white">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span class="sr-only">Open dropdown</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>

            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <div className="flex gap-4">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="data:image/jpeg;base64,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"
                alt="Bonnie image"
              />
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinJi3cjJG8GZ7qGrj9hOf2YamiYtScEtmSOQabLkAEEVz3CxPC6l0xkLXV2SMQhvrH7I&usqp=CAU"
                alt="Bonnie image"
              />
            </div>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Is About To Buy The Car ...
            </span>
            <span class="text-xl font-bold">5000 $</span>
            <div></div>
          </div>
        </div>
      </div>

      <div className="absolute right-12 top-80 w-72  shadow-xl rounded-lg bg-white">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center pb-10">
            <label
              htmlFor="bid"
              className="font-semibold text-xl relative top-4 mb-4"
            >
              Enter your price:
            </label>
            <input
              type="text"
              name="bid"
              id=""
              className="bg-gray-200 rounded-lg h-8 w-56 my-4 px-2"
              placeholder="price $"
            />
            <button className="bg-yellow-200 py-2 px-4 rounded-xl font-semibold">
              Join the Bid
            </button>
          </div>
          
        </div>
        
      </div>
      
    </>
  );
};

export default Live;
