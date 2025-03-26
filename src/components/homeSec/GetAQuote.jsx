import React, { useState, useEffect } from "react";
import Button from "../../common/Button";

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    setIsFormValid(
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.interest.trim() !== ""
    );
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="section bg-sky-100/30">
      <div className="container">
        <p>/ Get a Quote /</p>
        <h2>Request A Call Back</h2>
        <p>Contact us if you have questions about our solutions or anything else.</p>

        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="grid gap-5 mt-8">
            {["name", "email", "phone", "interest"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                value={formData[field]}
                onChange={handleChange}
                className="bg-white h-[50px] w-full rounded-3xl outline-none indent-5 focus:border border-black"
                aria-label={field}
                required
              />
            ))}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white outline-none h-[140px] indent-5 resize-none focus:border border-black py-5 rounded-3xl"
            ></textarea>
            <Button label="Send Request" className="btn-primary" disabled={!isFormValid} />
          </form>

          {/* Image Section */}
          <figure className="hidden md:block">
            <img src="/images/h1-callback.png" alt="Quote Banner" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default GetAQuote;
