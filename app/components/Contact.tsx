import { ContactLottie } from "./LottieHero";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center md:ml-[50px] lg:ml-[10px] pt-28">
        <div className="flex justify-between items-center ">
          <div className="w-[350px] md:w-[750px] lg:w-[500px] mx-4 md:mx-0 lg:mx-8 mt-10 rounded-xl shadow-2xl">
            <div className="flex justify-center items-center">
              <h1 className="text-xl text-teal-700 font-bold">Contact Us</h1>
            </div>

            <form className="w-full md:px-14 lg:px-4 py-2 lg:py-5 flex flex-col gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-[1.5px] bg-slate-800 text-white border-black text-xs rounded-md px-2 py-3"
                required
              />
              <input
                type="text"
                name="name"
                className=" rounded-md border-[1.5px] bg-slate-800 text-white border-black text-xs  px-2 py-3"
                placeholder="Your Name"
                required
              />
              <input
                type="number"
                name="text"
                className=" rounded-md  text-xs border-[1.5px] bg-slate-800 text-white border-black px-2 py-3"
                placeholder="Phone Number (Optional)"
              />
              <textarea
                name="message"
                className="h-32 rounded-md border-[1.5px] bg-slate-800 text-white border-black border-input py-2 text-xs px-2"
                placeholder="Your Message"
                required
              />
              <button
                type="submit"
                className="bg-slate-800 text-teal-700 font-bold rounded-md py-2 mx-20 hover:bg-white hover:text-black transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="hidden md:hidden lg:block">
            <ContactLottie />
          </div>
        </div>
      </div>
    </>
  );
}
