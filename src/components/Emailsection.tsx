"use client";
import { useState } from 'react';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';


const EmailSection = () => {
  const [result, setResult] = useState("Send Message");
  const sendMessage = async (event:any ) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
   formData.append("access_key", "1a1b8e27-93b1-48f2-acd7-227f5546fc00");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
return (
    <section id="contact"className='grid md:grid-cols-2 my-12 py-24 px-8 md:px-24 gap-8 relative container pt-32'>
    <div>
        <h5  data-aos="zoom-in-up" className='text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black my-2'>Let's Connect</h5>
        <p  data-aos="zoom-in-up" className='text-lg lg:text-xl mb-4 max-w-md'>
          We are  currently looking for new opportunities, our inbox is always open.
          Whether you have a question or just want to say hi, we will try our best to get back to you.
        </p>
    <div>
      <div  data-aos="zoom-in-up" className='mt-3'>
        <AiOutlineMail className="text-green-700" size={30}/>designersartify@gmail.com
      <div  data-aos="zoom-in-up" className='mt-3'>
        <BsTelephone className='text-green-700' size={30}/> 0314-4272209
      </div>
      </div>
</div>
</div>
   <div>
        <form onSubmit={sendMessage} className='text-xl max-w-4xl p-6'>
          <div className='mb-6'> 
          <label data-aos="zoom-in-up"className='block mb-2 text-sm font-medium'>
            Name
          </label>
          <input
          name="name"
            type="text"
            id="name"
            required
            className='bg-white border border-gray-900 placeholder-gray-600 text-black rounded-lg block w-full p-2.5'
            placeholder='Enter your name..'
          />
          </div>
          {/*subject of email*/ }
          <div className='mb-6'> 
          <label  data-aos="zoom-in-up" htmlFor="subject" className='text-myindigo block mb-2 text-sm font-medium'>
            Email
          </label>
          <input
          name="email"
            type="text"
            id="email"
            required
            className='bg-white border  border-gray-900 placeholder-gray-600 text-black rounded-lg block w-full p-2.5'
            placeholder='Enter your email...'
          />
          </div>
          {/*text area*/ }
          <div className='mb-6'> 
          <label data-aos="zoom-in-up" className='text-myindigo block mb-2 text-sm font-medium'>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className='bg-white border  border-gray-900 placeholder-gray-600 text-black rounded-lg block w-full p-2.5'
            placeholder="Enter your message..."
          />
          </div>
         <button 
         type="submit"  data-aos="zoom-in-up"
       className="px-6 py-3 w-full rounded-full ml-0 mb-4 
           bg-gradient-to-br from-gray-500 to-black text-white 
           transition duration-300 ease-in-out hover:opacity-90"
           >{result}</button>
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
