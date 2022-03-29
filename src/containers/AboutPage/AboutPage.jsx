import PageHeading from "../../components/PageHeading/PageHeading";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <PageHeading heading={"About abbey studio"} />
      <p className="about__text">
        <span className="about__text--orange">Abbey Architects</span> Was
        Founded In 2012. We Work In The Fields Of Industrial Design, Residential
        Architecture, Commercial Interiors, Photography And Art Direction.
      </p>
    </div>
  );
};

export default AboutPage;
