import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

const idPass =
    {
        name: "Rohan",
        password: "rohan"
    }


const Login = ({setLogin}) => {
    const [form, setForm] = useState({
        name: "",
        password: ""
      });
      const [loading, setLoading] = useState(false);
      

  return (
    <div className="w-full text-black h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#B7B7B7] via-[#B9E9FC] to-[#F6F1F1] ">
    <h1 className="text-2xl font-bold">Login</h1>
    <div className="m-2 w-full md:w-1/3">
      <div className="relative">
        <label for="message" className="leading-7 text-sm text-bold">
          Mobile No.
        </label>
        <input
          type={"text"}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
    <div className="p-2 w-full md:w-1/3">
      <div className="relative">
        <label for="message" className="leading-7 text-sm text">
          Password
        </label>
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
    <div className="p-2 w-full">
      <button
      onClick={() => form.name == idPass.name && form.password == idPass.password ?
        setLogin(true) : alert(`Wrong PassWord the coreect password is ${idPass.password}`)}
        className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
      >
        {loading ? <TailSpin height={25} color="white" /> : "Login"}
      </button>
    </div>
    <div>
      {/* <p>Do not have account? <Link to={'/signup'}><span classNameName="text-blue-500">Sign Up</span></Link></p> */}
    </div>
  </div>
  )
}

export default Login