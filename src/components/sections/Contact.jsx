import emailjs from "emailjs-com";
import { useState } from "react";

const fieldClass =
  "w-full rounded-2xl bg-[var(--surface)] border border-[var(--line)] px-4 py-3 text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--navy)]";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-5 leading-relaxed">
            Hiring for a co-op, or want to build something together? Send me a message here, or find me on{" "}
            <a href="https://www.linkedin.com/in/ankitbh1" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--navy)] underline underline-offset-4">LinkedIn</a>
            {" "}and{" "}
            <a href="https://github.com/AnkitBhandari10" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--navy)] underline underline-offset-4">GitHub</a>.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-bold text-[var(--navy)]">Name</span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`${fieldClass} mt-1`}
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-[var(--navy)]">Email</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`${fieldClass} mt-1`}
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-[var(--navy)]">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${fieldClass} mt-1`}
            />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="pill-button rounded-full bg-[var(--navy)] text-[var(--page)] px-6 py-3 font-bold disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" className="text-sm">
              {status === "sent" && "Message sent. I'll reply by email soon."}
              {status === "error" && "The message didn't send. Try again, or reach me on LinkedIn."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
