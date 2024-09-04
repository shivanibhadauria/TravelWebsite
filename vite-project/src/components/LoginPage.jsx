import { Link } from "react-router-dom";
import { useState } from "react";
import axios from'axios'

import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

 async function handleLoginSubmit(ev){
    ev.preventDefault();
    axios.post('/login' ,{email, password})
    .then(result =>{console.log(result)
      if(result.data ==='success'){
        alert("login done")

      navigate('/')}
    })
    .catch(err => console.log(err)
    
  
  )


  }




  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <form onSubmit={handleLoginSubmit} className="flex items-center justify-center flex-col gap-4 w-3/4 h-2/4 md:h-3/6  bg-slate-800 mb-64  rounded-xl md:mt-60 md:w-2/6 lg:w-1/5  p-4 pt-0 mt-0">
          <h1 className="font-bold text-4xl">Login</h1>
          <input
            className="w-full border-2 hover:border-black  rounded-lg h-10 p-4"
            type="email"
            placeholder="yours@gmail.com" value={email} onChange={e=> setEmail(e.target.value)}
          />
          <input
            className="w-full border-2 hover:border-black  rounded-lg h-10 p-4"
            type="text"
            placeholder="your password" value={password} onChange={e => setpassword(e.target.value)}
          />
          <button className="w-full bg-red-400 rounded-lg h-10 font-bold hover:bg-red-900">
            Login
          </button>
          <div className="font-semibold">
            Dont Have A Account? <Link className="font-extrabold underline text-red-300" to={'/register'}>Register Here</Link>
          </div>
        </form>
      </div>
    </>
  );
}
