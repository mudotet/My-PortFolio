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
    <section id="contact" className="relative z-10 bg-secondary/50 px-4 py-24">
      <div className="section-shell">
        <div data-reveal className="max-w-3xl text-left">
          <p className="eyebrow">
            <Mail className="h-3.5 w-3.5 text-primary" />
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-5 text-muted-foreground">
            I am always open to thoughtful conversations about software,
            product ideas, and opportunities to create useful technology.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div data-reveal className="space-y-8 border-t border-border pt-8 text-left">
            <h3 className="text-2xl font-bold">Contact information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="rounded-md bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:mudotet@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mudotet@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-md bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+840865812730"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +84 086-581-2730
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-md bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Ha Noi, Viet Nam</p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/mudotet"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border p-3 text-muted-foreground transition hover:border-primary hover:text-primary"
                  aria-label="GitHub profile"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/t%C3%BA-phan-203970327/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border p-3 text-muted-foreground transition hover:border-primary hover:text-primary"
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
            <h3 className="text-2xl font-bold mb-6">Send a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-36 w-full resize-none rounded-md border border-input bg-background px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Hello Tu, I would like to talk about..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full"
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
