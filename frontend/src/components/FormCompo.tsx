import { signUpType } from '@nischal108/common';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const FormCompo = ({ type }: { type: "signup" | "signin" }) => {
  const [formData, setFormData] = useState <signUpType>({
    email: "",
    password: "",
    fullName:  ""
  });
  const[error,setError]= useState(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/${type=="signup"?"signup":"signin"}`,formData);
      if(response.data.message){
        setError(response.data.message);
        return;
      }
      const token = response.data.token;
      console.log(error);
      localStorage.setItem("token",token);
      navigate("/home")  
    } catch (error:any) {
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
      
    }
  };

  return (
    <div className="bg-white w-full h-full flex items-center justify-center">
      <div className="p-8 bg-white max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-black mb-6">
          {type === "signup" ? "Create an Account" : "Login"}
        </h1>
        <form onSubmit={handleSubmit}>
          {type === "signup" && (
            <LabelledInput
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
              name="fullName"
              value={formData.fullName || ""}
              onChange={handleChange}
            />
          )}
          <LabelledInput
            label="Email"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <LabelledInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 mt-4 w-full"
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </form>
        {error && <p>{error}</p>}
        <p className="text-black mt-4">
          {type === "signup" ? (
            <>
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500">
                Sign in
              </Link>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <Link to="/" className="text-blue-500">
                Register
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

const LabelledInput = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange
}: {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mb-4">
      <label className="text-black font-semibold block mb-2">{label}</label>
      <input
        className="w-full border-2 border-black p-2"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
