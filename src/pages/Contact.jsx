import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex-grow bg-gray-50 animate-in fade-in duration-500">
      {/* Contact Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300">
            We are here to answer your security questions 24/7
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Address Card */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    Our Office
                  </h3>
                  <p className="text-slate-600 mt-2">
                    24/C, 13th Cross, 1st Main Road,
                    <br />
                    Jagadish Nagar, New Thippasandra Post,
                    <br />
                    Bangalore
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                  <p className="text-slate-600 mt-2 break-all">
                    sps23062025@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4 w-full">
                  <h3 className="text-lg font-bold text-slate-900">Call Us</h3>
                  <div className="mt-2 space-y-2">
                    <p className="flex justify-between text-slate-600 border-b border-gray-100 pb-1">
                      <span>Prakash Babu: </span>{" "}
                      <span className="font-mono text-slate-900">
                        7892991767
                      </span>
                    </p>
                    <p className="flex justify-between text-slate-600 border-b border-gray-100 pb-1">
                      <span>Madhusudhan:</span>{" "}
                      <span className="font-mono text-slate-900">
                        7019707641
                      </span>
                    </p>
                    <p className="flex justify-between text-slate-600 border-b border-gray-100 pb-1">
                      <span>Ramu:</span>{" "}
                      <span className="font-mono text-slate-900">
                        9141368231
                      </span>
                    </p>
                    <p className="flex justify-between text-slate-600 border-b border-gray-100 pb-1">
                      <span>Venu:</span>{" "}
                      <span className="font-mono text-slate-900">
                        9480076003
                      </span>
                    </p>
                    <p className="flex justify-between text-slate-600 pt-1">
                      <span>Landline:</span>{" "}
                      <span className="font-mono text-slate-900">
                        08232229478
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form & Map */}
            <div className="lg:col-span-2 space-y-8">
              {/* Form */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Send us a Message
                </h3>
                <form
                  action="https://formspree.io/f/xzdzydrd"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Map Placeholder */}

              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  title="Jagadish Nagar Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0607235965217!2d77.66022787462227!3d12.967966187347054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13fd034aceb7%3A0xfaa3daef1b5dac91!2s24%2FC%2C%2013th%20Cross%20Rd%2C%20Nelluru%20Puram%2C%20Kaggadasapura%2C%20Bengaluru%2C%20Karnataka%20560075!5e0!3m2!1sen!2sin!4v1767546987951!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
