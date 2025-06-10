// components/Contact.jsx
export default function Contact() {
    return (
      <section id="contact" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Contact Me</h2>
          <form className="mx-auto" style={{ maxWidth: "600px" }}>
            <input type="text" className="form-control mb-3" placeholder="Your Name" />
            <input type="email" className="form-control mb-3" placeholder="Your Email" />
            <textarea className="form-control mb-3" placeholder="Your Message" rows="4"></textarea>
            <button className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  