import Head from 'next/head';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Contact Us - Alumini Connect</title>
        <meta name="description" content="Contact us for technical support, feedback, or business inquiries." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-32 pb-20 flex justify-center items-center h-full">
        <section className="bg-gray-800 py-8 lg:py-16 px-4 mx-auto max-w-screen-md w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 rounded-lg shadow-lg overflow-y-auto">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
          <form className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
              <input
                type="email"
                id="email"
                className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 bg-blue-600 text-sm font-medium text-center text-white rounded-lg w-full sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-primary-700 focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
