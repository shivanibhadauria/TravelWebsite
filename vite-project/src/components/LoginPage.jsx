import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

 async function handleLoginSubmit(ev){
    ev.preventDefault();

    try{
      await axios.post('/login',{email,password});

      alert('Login Done, Now you can log in')


    } catch(e){
      alert('Login Failed, Please try again')


    }
  }




  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <form onSubmit={handleLoginSubmit} className="flex items-center justify-center flex-col gap-4 h-3/6 w-1/5 bg-slate-800 mb-64  rounded-xl  p-4 pt-0 mt-0">
          <h1 className="font-bold text-4xl">Login</h1>
          <input
            className="w-full border-2 hover:border-black  rounded-lg h-10 p-4"
            type="text"
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
