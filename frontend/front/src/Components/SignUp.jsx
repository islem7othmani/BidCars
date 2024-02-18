import React , {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {
 
 const [postData, setPostData] = useState({
    username: "",
    email: "",
    password: "",
    profilepic: "",
  });

  const handleInputChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorMessage = await response.text(); 
        throw new Error(`Network response was not ok: ${errorMessage}`);
      }
      navigate("/Profile");
      const result = await response.json();
      console.log("Registration successful:", result);
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

const jsonString = JSON.stringify(postData);

localStorage.setItem("user", jsonString);

console.log("Data stored in local storage.");

const NotComf = () => {
  if (postData.password == ""){
    toast("Enter Password")
  }
};

const prenomCheck = () => {
  if (postData.username == ""){
    toast("Enter Name")
  }
};
const emailch = () => {
  if (postData.email == ""){
    toast("Enter email")
  }
};


  return (
    
        <>
        
        <div className="h-full bg-gray-400 dark:bg-gray-900">
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{ backgroundImage: "url('https://i.pinimg.com/564x/63/77/36/63773689c5405621be6336d5e91b5b61.jpg')" }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleFormSubmit}>
                <div className="mb-4 ">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">
                       Name
                    </label>
                    <input
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Name"
                      name="username"
                    />
                  </div>
                  
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                      Password
                    </label>
                    <input
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                      name="password"
                    />
                    <p className="text-xs italic text-red-500">Please choose a password.</p>
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="c_password">
                     Profil picture url
                    </label>
                    <input onChange={handleInputChange}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="profilepic"
                      type="text"
                      placeholder="profil picture"
                      name="profilepic"
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                
  <button
    onClick={() => {
      NotComf();
      emailch();
      prenomCheck();
    }}
    onSubmit={handleFormSubmit}
    className="w-full px-4 py-2 font-bold text-black bg-yellow-500 rounded-full hover:bg-yellow-700  focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Register Account
  </button>

                  
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer   toastClassName="toastify-container" />

    <style>
  {`
    .toastify-container {
      background-color: #f7b32d;
      color:white; 

    }
  `}
</style>

    </>
  )
}

export default SignUp