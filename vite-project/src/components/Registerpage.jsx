import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registerpage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    

   async function registerUser(e){
        e.preventDefault();

        try{
          await axios.post('/register',{
            name,
            email,
            password,
          });
  
          alert('Registration Done, Now you can log in')


        } catch(e){
          alert('Registration Failed, Please try again')


        }


      
    }

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center flex-col">
 <form onSubmit={registerUser} className="flex items-center justify-center flex-col gap-4 h-3/6 w-1/5 bg-slate-800 mb-64 text-black rounded-xl  p-4 pt-0 mt-0">
 <h1 className="font-bold text-4xl">Register Here</h1>

          <input value={name} onChange={(e)=> setName(e.target.value)}
            className="w-full border-2 hover:border-black  rounded-lg h-10 p-4"
            type="text"
            placeholder="Full Name"
          /> 
          <input value={email} onChange={(e)=> setEmail(e.target.value)}
            className="w-full border-2 hover:border-black  rounded-lg h-10 p-4"
            type="text"
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
