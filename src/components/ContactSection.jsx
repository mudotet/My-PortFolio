import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useToast } from "./hooks/use-toase.js";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 3000,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Message not sent",
        description: "The connection failed. Please try again later.",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 border-b-8 border-black bg-primary px-4 py-24 md:py-28">
      <div className="section-shell">
        <div data-reveal className="max-w-3xl text-left">
          <p className="eyebrow">
            <Mail className="h-4 w-4 stroke-[3]" />
            Contact
          </p>
          <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-6 max-w-[62ch] border-l-4 border-black pl-5 text-lg leading-8 text-black">
            I am always open to thoughtful conversations about software,
            product ideas, and opportunities to create useful technology.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div data-reveal className="surface-panel space-y-8 p-6 text-left sm:p-8">
            <h3 className="text-3xl font-black uppercase">Contact information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="border-3 border-black bg-secondary p-3 shadow-neo-xs">
                  <Mail className="h-6 w-6 stroke-[3] text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">Email</h4>
                  <a
                    href="mailto:mudotet@gmail.com"
                    className="inline-flex min-h-11 items-center font-black text-black underline decoration-2 underline-offset-4"
                  >
                    mudotet@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="border-3 border-black bg-muted p-3 shadow-neo-xs">
                  <Phone className="h-6 w-6 stroke-[3] text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">Phone</h4>
                  <a
                    href="tel:+840865812730"
                    className="inline-flex min-h-11 items-center font-black text-black underline decoration-2 underline-offset-4"
                  >
                    +84 086-581-2730
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="border-3 border-black bg-primary p-3 shadow-neo-xs">
                  <MapPin className="h-6 w-6 stroke-[3] text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">Location</h4>
                  <p className="font-black text-black">Ha Noi, Viet Nam</p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wide">Connect with me</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/mudotet"
                  target="_blank"
                  rel="noreferrer"
                  className="neo-icon-button bg-secondary"
                  aria-label="GitHub profile"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/t%C3%BA-phan-203970327/"
                  target="_blank"
                  rel="noreferrer"
                  className="neo-icon-button bg-muted"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div
            data-reveal
            style={{ "--reveal-delay": "100ms" }}
            className="surface-panel p-6 text-left sm:p-8"
          >
            <h3 className="mb-7 text-3xl font-black uppercase">Send a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="neo-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="neo-input"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="neo-input min-h-36 resize-none"
                  placeholder="Hello Tu, I would like to talk about..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="neo-button w-full"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
