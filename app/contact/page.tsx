import Head from 'next/head';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Head>
        <title>Contact Page</title>
      </Head>
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <form className="space-y-4" action="mailto:info@lucerny.net" method="post">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text" 
              id="subject" 
              name="subject"
              className="w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="body" 
              name="body" 
              rows={4} 
              cols={50}
              className="w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit" 
            value="Send Email"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
