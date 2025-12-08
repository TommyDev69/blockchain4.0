'use client'
import {  useState } from "react";
import Swal from "sweetalert2";
import SignIn from "./SignIn";
interface SignDetails {
  username: string;
  email: string;
  password: string;
}

interface ErrorMsg {
  username?: string;
  email?: string;
  password?: string;
}
const Page = () => {
const [error, setError] = useState<ErrorMsg>({});


    const [valid, setValid] = useState({
        length: false,
        upper: false,
        lower: false,
        number: false,
        special: false,
      });
    
      const emailRegX = /\S+@\S+\.\S+/;
    
      const passwordRegex = {
      length: /.{8,}/,
      upper: /[A-Z]/,
      lower: /[a-z]/,
      number: /\d/,
      special: /[@$!%*?&]/,
    };
    

    const [form, setForm] = useState< SignDetails>({
     
      username: "",
      email: "",
      password: "",
    });
      
 const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));

    if (name === 'email') {
      if (!value.trim()) {
        setError((prev) => ({ ...prev, email: 'Email field is empty' }));
      } else if (!emailRegX.test(value)) {
        setError((prev) => ({ ...prev, email: 'Email is not valid' }));
      }
    }

    if (name === 'username') {
      if (!value.trim()) {
        setError((prev) => ({ ...prev, username: 'Username field is empty' }));
      }
    }

    if (name === 'password') {
      const length = passwordRegex.length.test(value);
      const upper = passwordRegex.upper.test(value);
      const lower = passwordRegex.lower.test(value);
      const number = passwordRegex.number.test(value);
      const special = passwordRegex.special.test(value);

      setValid({ length, upper, lower, number, special });

      if (!value.trim()) {
        setError((prev) => ({ ...prev, password: 'Password field is empty' }));
      } else if (!length || !upper || !lower || !number || !special) {
        setError((prev) => ({
          ...prev,
          password:
            'Password must contain 8 characters, uppercase, lowercase, number, and special symbol.',
        }));
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.username.trim() && !form.email.trim()) {
      Swal.fire({
        title: 'Error',
        text: 'Either username or email field is empty',
        icon: 'error',
      });
      return;
    }

    if (form.email && !emailRegX.test(form.email)) {
      Swal.fire({
        title: 'Error',
        text: 'Invalid email format',
        icon: 'error',
      });
      return;
    }

    if (!form.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)) {
      Swal.fire({
        title: 'Error',
        text: 'Invalid password format',
        icon: 'error',
      });
      return;
    }

    Swal.fire({
      title: 'Success',
      text: 'Form submitted successfully!',
      icon: 'success',
    });

    console.log('Form submitted:', form);
  };
    return ( 
       <SignIn HandleSubmit={handleSubmit} Valid={valid}  HandleSignIn={handleInput} InputForm = {form} Error={error} />
     );
}
 
export default Page;