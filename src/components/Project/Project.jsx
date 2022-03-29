import "./Project.scss";

const Project = ({ data }) => {
  const { category, year, subject, title, img } = data;

  return (
    <div className="project">
      <img className="project__img" src={img} alt={title + " " + subject} />
      <div className="project__header">
        <h3 className="project__header-text">{category}</h3>
        <h3 className="project__header-text">{year}</h3>
      </div>
      <p className="project__subject-title">
        {subject}
        <br />
        {title}
      </p>
    </div>
  );
};

export default Project;
