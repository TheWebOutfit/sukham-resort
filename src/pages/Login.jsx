import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

// const idPass =
//     {
//         name: "Rohan",
//         password: "rohan"
//     }


const Login = ({setLogin}) => {
    // const [form, setForm] = useState({
    //     name: "",
    //     password: ""
    //   });
    //   const [loading, setLoading] = useState(false);
      

  return (
  //   <div className="w-full text-black h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#B7B7B7] via-[#B9E9FC] to-[#F6F1F1] ">
  //   <h1 className="text-2xl font-bold">Login</h1>
  //   <div className="m-2 w-full md:w-1/3">
  //     <div className="relative">
  //       <label for="message" className="leading-7 text-sm text-bold">
  //         Mobile No.
  //       </label>
  //       <input
  //         type={"text"}
  //         value={form.name}
  //         onChange={(e) => setForm({ ...form, name: e.target.value })}
  //         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  //       />
  //     </div>
  //   </div>
  //   <div className="p-2 w-full md:w-1/3">
  //     <div className="relative">
  //       <label for="message" className="leading-7 text-sm text">
  //         Password
  //       </label>
  //       <input
  //         value={form.password}
  //         onChange={(e) => setForm({ ...form, password: e.target.value })}
  //         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  //       />
  //     </div>
  //   </div>
  //   <div className="p-2 w-full">
  //     <button
  //     onClick={() => form.name == idPass.name && form.password == idPass.password ?
  //       setLogin(true) : alert(`Wrong PassWord the coreect password is ${idPass.password}`)}
  //       className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
  //     >
  //       {loading ? <TailSpin height={25} color="white" /> : "Login"}
  //     </button>
  //   </div>
  //   <div>
  //     {/* <p>Do not have account? <Link to={'/signup'}><span classNameName="text-blue-500">Sign Up</span></Link></p> */}
  //   </div>
  // </div>
  <>
  <div className='bg-gray-100'>

  
  <div class="container  flex  mx-auto items-center justify-center ">
        <div class="left w-1/3 mx-14">
            
            <p class="text-3xl mx-5 font-paraFont mb-3">Welcome to </p>
            <p class="text-6xl mx-5 font-paraFont "><span className='text-gold'>Sukham </span>Resort</p>
        </div>
        <div class="right flex flex-col bg-white p-8 rounded-lg w-1/4 relative mt-8 mb-8">
          <h1 className='flex text-3xl items-center justify-center font-bold mb-6'>Login </h1>
            <input class="px-4 h-12 my-2 border border-1  outline-blue-200 border-gray-200 rounded-lg" type="text" placeholder="Enter Your Email address here" />
            <input class="px-4 h-12 my-2 border border-1 outline-blue-200 border-gray-200 rounded-lg" type="password" placeholder="Enter Your password" />
            <button class="bg-blue-600 hover:bg-blue-700 text-white py-3 my-2 rounded-md font-bold cursor-pointer ">Log In</button>
            <span class="text-blue-600 text-center text-sm my-2 py-3 cursor-pointer hover:underline">Forgot password</span>
            <hr class="my-2" />
            
            <button class="bg-gray-600 hover:bg-green-700 text-white py-3 my-2 rounded-md font-bold cursor-pointer w-fit px-4 mx-auto"><Link to='/Sign'>Create New Account</Link></button>
        </div>
    </div>
    </div>
    </>
  

  
  
  
  )
}

export default Login