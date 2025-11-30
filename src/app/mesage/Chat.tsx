"use client";

import { useEffect, useState } from "react";
import ChatField from "./ChatField";
import Swal from "sweetalert2";
interface CountryType {
  country: string;
  cities: string[];
}
const Url = "https://countriesnow.space/api/v0.1/countries";

const Chat = () => {
  const [error, setError] = useState("");
  const [countryApi, setCountryApi] = useState<CountryType[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const regX = /\S+@\S+\.\S+/;

  const [formData, setFormData] = useState({
    name: "",
    user: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    message: "",
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update country → load cities
    if (name === "country") {
         setSelectedCountry(value);

      const foundCountry = countryApi.find(
        (item) => item.country === value
      );

      setCities(foundCountry?.cities || []);
    }

    // Email validation
    if (name === "email") {
      if (value.trim() === "") {
        setError("Email field is empty");
      } else if (!regX.test(value)) {
        setError("Email is not valid");
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
 if (!formData.name.trim()) {
    Swal.fire({
      title: 'Error',
      text: 'Name field cannot be empty',
      icon: 'error',
    });
    return;
  }

   if (!formData.user.trim()) {
    Swal.fire({
      title: 'Error',
      text: 'user field cannot be empty',
      icon: 'error',
    });
    return;
  }
   if (!formData.phone.trim()) {
    Swal.fire({
      title: 'Error',
      text: 'Phone Number field cannot be empty',
      icon: 'error',
    });
    return;
  }
   if (!formData.country.trim()) {
    Swal.fire({
      title: 'Error',
      text: 'Select the Country you are from',
      icon: 'error',
    });
    return;
  }
  if (!formData.city.trim()) {
    Swal.fire({
      title: 'Error',
      text: 'Select the city field cannot be empty',
      icon: 'error',
    });
    return;
  }
  if (!formData.email.match(/\S+@\S+\.\S+/)) {
    Swal.fire({
      title: 'Error',
      text: 'Invalid email format',
      icon: 'error',
    });
    return;
  }

   if (!formData.message.trim()) {
    Swal.fire({
      title: 'Error',
      text: 'message field cannot be empty',
      icon: 'error',
    });
    return;
  }

  

  Swal.fire({
    title: 'Success',
    text: 'Form submitted successfully!',
    icon: 'success',
  });

  console.log("Form submitted:", formData);
};

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(Url);
        const data = await res.json();
        setCountryApi(data.data || []);
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchApi();
  }, []);

  return (
    <ChatField
      countryResult={countryApi}
      cityResult={cities}
      Error={error}
      handleForm={handleForm}
      handleSubmit={handleSubmit}
      selectCountry={selectedCountry}
      formData={formData}
    />
  );
};

export default Chat;
