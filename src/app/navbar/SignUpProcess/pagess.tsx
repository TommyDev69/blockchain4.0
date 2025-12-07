'use client'

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SignUp from "./SignUp";
// import SignUp from "./SignUp";

interface CountryType {
  country: string;
  cities: string[];
}
interface FormDetails {
  name: string;
  username: string;
  email: string;
  gender: string;
  country: string;
  city: string;
  password: string;
}


interface ErrorType {
  name?: string;
  username?: string;
  email?: string;
  gender?: string;
  country?: string;
  city?: string;
  password?: string;
}



const Url = "https://countriesnow.space/api/v0.1/countries";

const Page = () => {
  const [error, setError] = useState<ErrorType>({});
  const [countryApi, setCountryApi] = useState<CountryType[]>([]);
  const [city, setCity] = useState<string[]>([]);
  
  //password
  const [valid, setValid] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const regX = /\S+@\S+\.\S+/;

  const passwordRegex = {
  length: /.{8,}/,
  upper: /[A-Z]/,
  lower: /[a-z]/,
  number: /\d/,
  special: /[@$!%*?&]/,
};

  


  // Fetch API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Url);
        const details = await response.json();
        setCountryApi(details.data); // correct API response
      } catch (err) {
        console.log("API Error:", err);
      }
    };

    fetchData();
  }, []);

  const [form, setForm] = useState<FormDetails>({
  name: "",
  username: "",
  email: "",
  gender: "",
  country: "",
  city: "",
  password: "",
});
  
  // Handle Inputs
  const handleForm = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
    ...prev,
    [name]: value,
  }));

  // Reset specific field error when typing
  setError((prev) => ({ ...prev, [name]: "" }));

   if (name === "name") {
    if (!value.trim()) {
      setError((prev) => ({ ...prev, name: "Name field is empty" }));
    }
  }

  if (name === "username") {
    if (!value.trim()) {
      setError((prev) => ({ ...prev, username: "Username field is empty" }));
    }
  }

  if (name === "email") {
    if (!value.trim()) {
      setError((prev) => ({ ...prev, email: "Email field is empty" }));
    } else if (!regX.test(value)) {
      setError((prev) => ({ ...prev, email: "Email is not valid" }));
    }
  }

  if (name === "gender") {
    if (!value.trim()) {
      setError((prev) => ({ ...prev, gender: "Select your gender" }));
    }
  }

  if (name === "country") {
    const selected = countryApi.find((item) => item.country === value);
    setCity(selected?.cities || []);

    if (!value.trim()) {
      setError((prev) => ({ ...prev, country: "Select your country" }));
    }
  }

  if (name === "city") {
    if (!value.trim()) {
      setError((prev) => ({ ...prev, city: "Select your city" }));
    }
  }


    //password Validation
   if (name === "password") {
    const length = passwordRegex.length.test(value);
    const upper = passwordRegex.upper.test(value);
    const lower = passwordRegex.lower.test(value);
    const number = passwordRegex.number.test(value);
    const special = passwordRegex.special.test(value);

    setValid({ length, upper, lower, number, special });

    if (!value.trim()) {
      setError(prev => ({ ...prev, password: "Password field is empty" }));
    } else if (!length || !upper || !lower || !number || !special) {
    setError(prev => ({...prev, password: "Password must contain 8 characters, uppercase, lowercase, number and special symbol.",}));
    } else {
    setError(prev => ({ ...prev, password: "" }));
  }
}


  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (!form.name.trim()) {
        Swal.fire({
          title: 'Error',
          text: 'Name field cannot be empty',
          icon: 'error',
        });
        return;
      }

      if (!form.username.trim()) {
      Swal.fire({
        title: 'Error',
        text: 'Userame field cannot be empty',
        icon: 'error',
      });
      return;
    }
        
             
           
        if (!form.country.trim()) {
        Swal.fire({
          title: 'Error',
          text: 'Select the Country you are from',
          icon: 'error',
        });
        return;
      }
      if (!form.city.trim()) {
        Swal.fire({
          title: 'Error',
          text: 'Select the city field cannot be empty',
          icon: 'error',
        });
        return;
      }
      if (!form.gender.trim()) {
        Swal.fire({
          title: 'Error',
          text: 'Select the gender field cannot be empty',
          icon: 'error',
        });
        return;
      }
      if (!form.email.match(/\S+@\S+\.\S+/)) {
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
    
      console.log("Form submitted:", form);
  }


     // Close modal
  // const closeModal = () => setIsOpen(false);
    //  closeModal();

//  if (!isOpen) return null; // Don't render if modal is closed
// Don't render if modal is closed
  // if (!isOpen) return null;
  return (  
  <div
    className=""
    // clicking the backdrop closes modal
  >
    <div  className="w-full ">
      <SignUp
        HandleForm={handleForm}
        HandleSubmit={handleSubmit}
        FormData={form}
        Error={error}
        Country={countryApi}
        City={city}
        Valid={valid}
        
      />
      
    </div>
  </div>


  


  );
};

export default Page;
