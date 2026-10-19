
const Contact = () => {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-3 text-3xl font-bold text-orange-500">
        Contact Us
      </h1>

      <p className="mb-6 text-gray-600">
        Have any questions? We'd love to hear from you.
      </p>

      <form className="flex flex-col gap-4 rounded-lg border border-gray-200 p-5">
        <input
          type="text"
          placeholder="Your Name"
          className="rounded border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="rounded border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="resize-y rounded border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
        ></textarea>

        <button
          type="submit"
          className="rounded bg-orange-500 px-4 py-3 text-white hover:bg-orange-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
