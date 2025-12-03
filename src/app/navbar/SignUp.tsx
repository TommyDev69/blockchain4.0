import Image from 'next/image';
import close from '../../../public/images/closed.svg'
import Brand from "../../../public/images/logo/logo.svg"
import google from "../../../public/google (2).png"

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
  city?: string;
  password?: string;
}

interface ResultShow {
    HandleForm: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    HandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    FormData: FormDetails;
    Error: ErrorType;
    Country: CountryType[];
    City: string[];
    Valid: {
        length: boolean;
        upper: boolean;
        lower: boolean;
        number: boolean;
        special: boolean;
    }

    Close: () => void
    isOpen: boolean
}


const SignUp = ({HandleForm, HandleSubmit, FormData, Error, Country, City, Valid,  Close, isOpen}:ResultShow) => {
    return (  
        <div className="relative ">

        <form onSubmit={HandleSubmit} className=' flex flex-col justify-center absolute  right-[50px] top-[-330px]  md:top-[-310px]   '>

        <div className="bg-purple-950  mx-aduto  md:w-full   flex py-4 rounded-xl px-4 flex-col items-center ">
            <div className="flex w-full bg-blend-color-dodge justify-end pr-2 pt-4">
                {isOpen && (
                    <div onClick={Close} className="flex border p-2 border-white rounded-lg cursor-pointer">
                    <Image src={close} alt="Close modal" width={12} height={12} />
                    </div>
                )}
            </div>

            <div className="flex w-full justify-center items-center">
                <Image src={Brand} alt="close" width={100} height={100} />
            </div>

            <div className="flex space-x-1.5 w-full justify-center items-center">
                <div className='w-[50%] py-8'>
                    <button type="button" className='flex w-full space-x-0.5 justify-center items-center px-2  py-4 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(15deg,rgba(189,36,223,0.7),rgba(45,106,222,0.7)_107.15%)] rounded-lg'>
                        <div className='text-[12px] text-[#ffffff]'>
                            <p className="capitalize">sign in</p>
                        </div>

                        <div>
                            <Image src={google} alt="close" width={40} height={40} />
                        </div>
                    </button>
                </div>

                <div className='w-[50%]'>
                    <button type="button" className='flex space-x-0.5 w-full justify-center px-2 items-center py-4 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(15deg,rgba(189,36,223,0.7),rgba(45,106,222,0.7)_107.15%)] rounded-lg'>
                        <div className='text-[12px] text-[#ffffff]'>
                            <p className="capitalize">sign in</p>
                        </div>

                        <div>
                            <Image src={google} alt="close" width={40} height={40} />
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex">
                {/* <div className="w-40 border-2 border[#ffff]"></div> */}
              <p className=" uppercase text-white my-2 ">
            ________________________or________________________

          </p>

                {/* <div className="w-40 border-2 border[#ffff]"></div> */}
            </div>

            <div className='w-full'>
                 <div className='w-full py-4'>
                    <input type="text" name="name" placeholder='name'  value={FormData.name } onChange={HandleForm} className="placeholder:font-bold placeholder:text-[#cccccc] pl-2 text-[#000000] bg-purple-950 border-2 w-full rounded-lg py-2 text-[10px]" style={{ borderColor: '#ffffff' }}/>

                    {Error.name &&(
                        <div>
                            <p className="text-red-500">{Error.name}</p>
                        </div>
                    )}
                </div>
                 <div className='w-full py-2'>
                    <input type="text" name="username" placeholder='Username'value={FormData.username } onChange={HandleForm} className="placeholder:text-gray-400 text-{#ffffff} pl-2 border-2 w-full rounded-lg py-2 text-[10px] border-white" />
                    {Error.username &&(
                            <div>
                                <p className="text-red-500">{Error.username}</p>
                            </div>
                        )}
                </div>

                  <div className='w-full py-2'>
                    <input type="email" name="email" placeholder='Email' value={FormData.email } onChange={HandleForm} className="placeholder:text-gray-400 text-black bg-purple-950 pl-2 border-2 w-full rounded-lg py-2 text-[10px] border-white" />
                        {Error.email &&(
                    <div>
                        <p className="text-red-500">{Error.email}</p>
                    </div>
                    )}
                </div>

                <div className='w-full py-2'>
                    <select name='gender'  value={FormData.gender } onChange={HandleForm}  className='font-bold  bg-fuchsia-950  text-[#ffffff] pl-2 tedxt-[#000000] border-2 w-full rounded-lg py-2 text-[10px] border-[#ffff]'>
                        <option value="">Choose your Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>

                    </select>
                     {Error.gender &&(
                        <div>
                            <p className="text-red-500">{Error.gender}</p>
                        </div>
                    )}
                </div>

                <div className='flex gap-2 w-full py-2'>
                    <div className='w-full'>
                        <select name="country" value={FormData.country } onChange={HandleForm}  className='font-bold  bg-fduchsia-950  text-[#ffffff] pl-2 tedxt-[#000000] border-2 w-full rounded-lg py-2 text-[10px] border-[#ffff]'>
                            <option value="">Choose your Country</option>
                            {
                                Country.map((item, index) => (
                                <option className='text-black' value={item.country} key={index}>
                                    {item.country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='w-full'>
                     <select name="city" value={FormData.city } onChange={HandleForm}  disabled={City.length === 0}  className='font-bold   text-[#ffffff] pl-2  border-2 w-full rounded-lg py-2 text-[10px] border-[#ffff]'>
                            <option value="">Choose your City</option>
                            
                            {City.map((list, index) => (
                                <option className='text-black' value={list} key={index}>
                                {list}
                                </option>
                            ))}
                        </select>
                        {Error.city &&(
                            <div>
                                <p className="text-red-500">{Error.city}</p>
                            </div>
                        )}
                    </div>
                </div>
                
                 <div className='w-full py-2'>
                    <input type="password" name='password' value={FormData.password } onChange={HandleForm} placeholder='Password' className="placeholder:text-gray-400 text-black bg-purple-950 pl-2 border-2 w-full rounded-lg py-2 text-[10px] border-white" />

                    <div className="text-white text-[10px] space-y-1 mt-2">
                        <p className={`${Valid?.length ? "text-green-400" : "text-red-400"}`}>
                            {Valid?.length ? "✓" : "✗"} At least 8 characters
                        </p>
                        <p className={`${Valid?.upper ? "text-green-400" : "text-red-400"}`}>
                            {Valid?.upper ? "✓" : "✗"} Uppercase letter
                        </p>
                        <p className={`${Valid?.lower ? "text-green-400" : "text-red-400"}`}>
                            {Valid?.lower ? "✓" : "✗"} Lowercase letter
                        </p>
                        <p className={`${Valid?.number ? "text-green-400" : "text-red-400"}`}>
                            {Valid?.number ? "✓" : "✗"} Number
                        </p>
                        <p className={`${Valid?.special ? "text-green-400" : "text-red-400"}`}>
                            {Valid?.special ? "✓" : "✗"} Special character
                        </p>

                    </div>

                </div>

                <div className='w-full py-2'>
                    {/* <input type="buttom" valuce='sign uph' className=' capitalize border-2 w-full rounded-lg py-2 text-[10px] text-[#ffffff] bg-fuchsia-500 border-[#ffff]' /> */}
                    
                    <button type='submit'  className=' capitalize border-2 w-full rounded-lg py-2 text-[10px] text-[#ffffff] bg-fuchsia-500 border-[#ffff]'>sign up</button>
                
                </div>
            </div>
        </div>
        </form>
        </div>
    );
}
 
export default SignUp;