const ContactForm = () => {
  return (
    <div className="container my-5">
      <h2 className="text">Contact</h2>
      <form id="contactForm">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "8px" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
