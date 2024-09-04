import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Registerpage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    

   async function registerUser(e){
       e.preventDefault()
       axios.post('/register' ,{email, password})
       .then(result =>{console.log(result)
        alert("registration done")
        navigate('/login')
       })
       .catch(err=> console.log(err))
       alert("registration not done")



      
    }

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center flex-col">
 <form onSubmit={registerUser} className="flex items-center justify-center flex-col gap-4 p-8 pt-10 mt-8 h-3/6  bg-slate-800 mb-64 text-black rounded-xl   md:w-2/4 lg:w-1/5 lg:p-6 lg:h-3/5 md:mt-60 ">
 <h1 className="font-bold text-4xl">Register Here</h1>

          <input value={name} onChange={(e)=> setName(e.target.value)}
            className="w-full border-2 hover:border-black  rounded-lg h-10 p-4"
            type="text"
            placeholder="Full Name"
          /> 
          <input value={email} onChange={(e)=> setEmail(e.target.value)}
            className="w-full border-2 hover:border-black  rounded-lg h-10 p-4"
            type="email"
            placeholder="yours@gmail.com"
          />
          <input value={password} onChange={(e) =>setpassword(e.target.value)}
            className="w-full border-2 hover:border-black  rounded-lg h-10 p-4"
            type="password"
            placeholder="your password"
          />
          <button className="w-full bg-red-400 rounded-lg h-10 font-bold hover:bg-red-900">
            Register
          </button>
          <div className="font-semibold">
            alredy a member?
            <Link
              className="font-extrabold underline text-red-300"
              to={"/login"}
            >
              Login Here
            </Link>
          </div></form>
        </div>
      
    </>
  );
}
