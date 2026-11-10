import { ScrollReveal } from "../ScrollReveal"
import emailjs from 'emailjs-com'
import {useState} from 'react'
export const Contact = () => { 
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",

    });

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        .then(() => {
            alert("Message Successfully Sent to Ankit!");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Error! Please try again!"));
    };
  
  
  
    return (
    <section
      id="contact" 
      className="min-h-screen flex justify-center py-20 text-gray-400 bg-gray-900 body-font"
    >
      <ScrollReveal>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-green-300 bg-clip-text text-transparent text-center">
            Get in Touch with Me:
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Find me on{" "}
            <a href="https://github.com/AnkitBhandari10" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">GitHub</a>
            {" "}and{" "}
            <a href="https://www.linkedin.com/in/ankitbh1" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">LinkedIn</a>
            , or send me a message below.
          </p>
          <form className="space-y-6" onSubmit = {handleSubmit}>
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value = {formData.name} 
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange = {(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="relative">
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value = {formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@email.com"
                onChange = {(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="relative">
              {/* Changed the input to textarea for multi-line text */}
              <textarea 
                id="message" 
                name="message" 
                required 
                value = {formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message..."
                onChange = {(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type = "submit" className = "w-full bg-green-300 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover: shadow-[0,0_15px_rgba(59,130,246,0.4)]">
                Submit
            </button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
};
