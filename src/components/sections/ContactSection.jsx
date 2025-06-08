import { useState, useRef } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "elfriantrianas028@gmail.com",
      link: "mailto:elfriantrianas028@gmail.com",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      label: "Instagram",
      value: "@elfrian028_",
      link: "https://instagram.com/elfrian028_",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Bogor, Indonesia",
      link: "#",
      color: "from-blue-600 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ets028",
      icon: <FaGithub className="text-xl" />,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/",
      icon: <FaLinkedin className="text-xl" />,
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/elfrian028_",
      icon: <FaInstagram className="text-xl" />,
      color: "hover:text-pink-600",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const FloatingShape = ({ className, delay = 0 }) => (
    <div
      className={`absolute opacity-20 animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl"></div>
    </div>
  );

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with floating shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <FloatingShape className="top-10 left-10" delay={0} />
        <FloatingShape className="top-40 right-20" delay={1} />
        <FloatingShape className="bottom-20 left-1/4" delay={2} />
        <FloatingShape className="bottom-40 right-10" delay={3} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Let's Work Together
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
            Siap mewujudkan ide Anda? Mari diskusikan proyek dan ciptakan
            sesuatu yang luar biasa bersama.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center group p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {item.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Message
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                    placeholder="Your name"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                  placeholder="Project discussion"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Submit Status */}
            {submitStatus && (
              <div
                className={`mt-4 p-4 rounded-xl ${
                  submitStatus === "success"
                    ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                    : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                } animate-fade-in`}
              >
                {submitStatus === "success"
                  ? "✅ Message sent successfully! I'll get back to you soon."
                  : "❌ Failed to send message. Please try again."}
              </div>
            )}
          </div>
        </div>

        {/* Email & Social CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Let's Create Something Amazing
            </h3>
            <p className="text-blue-100 mb-6">
              Ready to discuss your next project? Drop me a message!
            </p>
            <a
              href="mailto:elfriantrianas028@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              <FaEnvelope className="mr-2 text-blue-500" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
