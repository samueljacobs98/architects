import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact">
      <a href="mailto:" className="contact__email">
        hi@abbeyarch.com
      </a>
      <p className="contact__text">General Inquiries</p>
      <p className="contact__text">+44 1632 960282</p>
    </div>
  );
};

export default ContactPage;
