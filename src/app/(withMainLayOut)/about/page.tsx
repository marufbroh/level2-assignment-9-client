import React from "react";

const AboutPage = () => {
  return ( 
    <section className="min-h-screen bg-slate-50 px-5">
      <div className=" flex  flex-col-reverse md:flex-row  justify-between w-full bg-slate-50  my-5 border border-red-500 rounded-2xl  ">
        <div className=" basis-1/2 rounded-2xl rounded-t-none md:rounded-r-none md:rounded-s-2xl bg-blue-500 w-full flex justify-center items-center  ">
          <div className=" px-8 min-h-[300px] flex flex-col  justify-center my-5">
            <h1 className=" md:text-4xl text-3xl font-bold text-white mb-5 ">
              We are PetHarmony Charities For Pets. For People. For Good.
            </h1>

            <p className="text-white mb-3">
              Join us on our mission to make world a better place for pets and
              the people who love them.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className=" basis-1/2 m-2">
         
         <iframe
            className=" w-full  h-[25rem]"
            src="https://www.youtube.com/embed/YlL_hmuPRvc?si=XPb0FsC-Uk97uMid"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen={true}
          ></iframe>
       
        </div>
      </div>

      <div className="">
        <h1 className="text-5xl text-[rgb(60,0,64)] mt-16 font-bold my-5">Everything for pets & pet parents in one place.</h1>

        <p className="text-xl text-[rgb(60,0,64) my-5 ">Wherever you are in your pet parenting journey: from choosing and finding a pet to already loving & caring for pets, all the way through to saying goodbye… PetPlace is here to support you every step of the way.</p>
        <p className="text-xl text-[rgb(60,0,64) my-5 ">We know how happy, healthy, and busy your pets keep you, so with all the resources, videos, articles, services, products, advice, opinions, and ideas out there, we thought you could use a good place to start.</p>
        <p className="text-xl text-[rgb(60,0,64) my-5 ">You’ll find sound advice, trusted providers, and indispensable services here, all in one place.</p>
        <p className="text-xl text-[rgb(60,0,64) my-5 ">Because every pet deserves to be well cared for, by companions who return their love and dedication.</p>
      </div>

      <section className=" py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold underline text-center mb-8 rancho-regular text-[rgb(60,0,64)]">Contact Us</h2>
        
        <div className="flex flex-wrap -mx-6">
          <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0 flex flex-col justify-center ">
            <h3 className="text-2xl font-semibold mb-4 rancho-regular">Get in Touch</h3>
            <p className="mb-4 text-xl text-[rgb(60,0,64) my-5 mb-8">We&apos;d love to hear from you! Whether you have a question about our services, need assistance, or just want to talk about pets, feel free to reach out.</p>
            <ul className="mb-4">
              <li className="mb-2">
                <strong>Address:</strong> 123 Pet Street, Pet City, PC 12345
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </li>
              <li className="mb-2">
                <strong>Email:</strong> <a href="mailto:info@petplace.com" className="text-blue-600 hover:underline">info@petharmony.com</a>
              </li>
              <li className="mb-2">
                <strong>Hours:</strong> Mon - Fri, 9am - 5pm
              </li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 px-6">
            <h3 className="text-2xl font-semibold mb-4 rancho-regular text-[rgb(60,0,64)]">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="name" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" id="email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="subject" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" id="message" rows="4" required></textarea>
              </div>
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default AboutPage;
