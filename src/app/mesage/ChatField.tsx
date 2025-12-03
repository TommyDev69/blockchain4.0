import React from 'react';

interface CountryType {
  country: string;
  cities: string[];
}

interface FormData {
  name: string;
  user: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  message: string;
}

interface Processing {
  handleForm: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  Error: string;
  countryResult: CountryType[];
  cityResult: string[];
  selectCountry: string;
  formData: FormData;
}

export default function ChatField({ cityResult,countryResult,Error,handleForm,handleSubmit,formData}: Processing) {
  return (
    <form onSubmit={handleSubmit}  className="" >
        <div className="w-full text-center py-6">
            <div className="capitalize text-[18px] font-extrabold text-[#ffffff]">get in touch</div>
        </div>
        <div className='container bg-amdber-400 border-[#ccc] border-2 p-6 rounded-2xl mx-auto'>
            <div className="flex gap-6 w-full px-4 md:px-2  py-4">
                <div className=" w-full  block text-[#ccc] ">
                <div>
                    <label className='uppercase text-[14px]'>name</label>
                </div>
                    <input type='text'  name="name"  placeholder='Enter name' className='border-[#ccc] border-2  px-4 w-full rounded-lg md:text-16 py-4' value={formData.name} onChange={handleForm} />
                </div>

                <div className="text-[#ccc] w-full">
                    <div>
                    <label className='uppercase text-[14px]'>username</label>

                    </div>
                    <input type='text' name="user" placeholder='Enter username' className=' w-full border-[#ccc] border-2 px-4  rounded-lg md:text-16 py-4' value={formData.user} onChange={handleForm} />
                </div>
            </div>

            <div className="flex  gap-6 w-full px-4 md:px-2  py-4">
                    <div className="text-[#ccc] w-full  block ">
                    <div>
                        <label className='uppercase text-[14px]'>email</label>
                    </div>
                        <input type='text' placeholder='Enter email'   name="email" className="w-full border-[#ccc] border-2 px-4  rounded-lg md:text-16 py-4" value={formData.email} onChange={handleForm} />
                        {Error && ( <p className="text-red-400 text-sm mt-1">{Error}</p>
                )}
                    </div>

                    <div className="text-[#ccc]  w-full">
                        <label className='uppercase text-[14px]'>phone number</label>
                        <input type='text'   name="phone" placeholder='Enter phone number' className="w-full border-[#ccc] border-2 px-4  rounded-lg md:text-16 py-4" value={formData.phone} onChange={handleForm} />
                    </div>
            </div>

            <div className="flex gap-6 w-full px-4 md:px-2  py-4">
                <div className='text-[#ccc]  w-full'>

                    <div>
                        <label className='uppercase text-[14px] text-[#ccc]'>county</label>
                    </div>
                    <select  name="country" value={formData.country} onChange={handleForm}  className="w-full bg-[#0000]  border-[#ccc] border-2 px-4  rounded-lg md:text-16 py-4">
                        <option  className='text-black'>choose your country</option>
                            {countryResult.map((data, index) =>(

                                <option className='text-black' value={data.country} key={index}>{data.country}</option>
                            ))}
                    </select>
                </div>
                
                <div className='text-[#ccc]  w-full'>

                    <div>
                        <label className='uppercase text-[14px] text-[#ccc]'>city</label>
                    </div>
                    <select name='city' value={formData.city} onChange={handleForm}  className="w-full border-[#ccc] border-2 px-4  rounded-lg md:text-16 py-4"  disabled={cityResult.length === 0}>
                        <option className='text-black' >choose your city</option>
                            {cityResult.map((city, index) =>(

                            <option className='text-black' value={city} key={index}>{city}</option>
                            ))}
                    </select>
                </div>
            </div>
            
            <div className="w-full  px-2 py-4">
                <textarea name="message" value={formData.message} onChange={handleForm}  placeholder="Enter your message"  cols={4} rows={5} className="w-full border-[#ccc] border-2  text-[#ccc] px-4 rounded-lg md:text-16 py-4" id=""></textarea>
            </div>
            <div className='px-6'>
            <button type='submit' className="bg-[#ccc] font-bold text-[14px] rounded-2xl px-4 py-2 hover:bg-[linear-gradient(90deg,rgba(189,36,223,0.5),rgba(45,106,222,0.5)_97.15%)] hover:text-[#ccc] hover:font-bold">Submit</button>
            </div>
        </div>
    </form>
    
  )
}
