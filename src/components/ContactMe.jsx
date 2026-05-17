import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 lg:px-[100px] py-16 bg-[#0b1224] text-white">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact <span className="text-[#6c5ce7]">Me</span>
      </h2>

      <form
        action="https://formsubmit.co/arslanhanif269@gmail.com"
        method="POST"
        className="max-w-xl mx-auto space-y-4"
      >

        {/* 👇 Spam protection + settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourwebsite.com/thanks" />

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-[#111b34] border border-gray-600 outline-none"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-[#111b34] border border-gray-600 outline-none"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 rounded-lg bg-[#111b34] border border-gray-600 outline-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#6c5ce7] py-3 rounded-lg hover:bg-[#5a4bd1] transition"
        >
          Send Message
        </button>

      </form>
    </section>
  );
};

export default Contact;