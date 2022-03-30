import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact">
      <a href="mailto:" className="contact__email">
        hi@abbeyarch.com
      </a>
      <div className="contact__container">
        <p className="contact__container-text">General Inquiries</p>
        <p className="contact__container-text">+44 1632 960282</p>
      </div>
    </div>
  );
};

export default ContactPage;
