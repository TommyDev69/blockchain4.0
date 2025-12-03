"use client";

import { useEffect, useState, ChangeEvent  } from "react";
import ChatField from "./ChatField";
import Swal from "sweetalert2";
interface CountryType {
  country: string;
  cities: string[];
}
const API = "https://countriesnow.space/api/v0.1/countries";

const Chat = () => {
  const [error, setError] = useState("");
  const [countryApi, setCountryApi] = useState<CountryType[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const emailrRegX = /\S+@\S+\.\S+/;

  const [formData, setFormData] = useState({
    name: "",
    user: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    message: "",
  });

  const handleForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      } else if (! emailrRegX.test(value)) {
        setError("Email is not valid");
      } else {
        setError("");
      }
    }
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFields = [
      { key: "name", msg: "Name field cannot be empty" },
      { key: "email", msg: "email field cannot be empty" },
      { key: "user", msg: "Username field cannot be empty" },
      { key: "phone", msg: "Phone number is required" },
      { key: "country", msg: "Select your country" },
      { key: "city", msg: "City field cannot be empty" },
      { key: "message", msg: "Message field cannot be empty" },
    ];

    for (const field of requiredFields) {
      if (!formData[field.key as keyof typeof formData].trim()) {
        Swal.fire({ title: "Error", text: field.msg, icon: "error" });
        return;
      }
    }

    if (! emailrRegX.test(formData.email)) {
      Swal.fire({
        title: "Error",
        text: "Invalid email format",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Success",
      text: "Form submitted successfully!",
      icon: "success",
    });

    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(API);
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
