import PageHeading from "../../components/PageHeading/PageHeading";
import useWindowSize from "../../assets/hooks/useWindowSize";
import est2012 from "../../assets/svgs/est2012.svg";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <PageHeading
        heading={"About abbey studio"}
        spanText={" ●ABOUT "}
        text={"/142"}
      />
      <div className="about__content">
        {useWindowSize(768) && (
          <img className="about__content-img" src={est2012} alt="" />
        )}
        <p className="about__content-text">
          <span className="about__content-text--orange">Abbey Architects</span>{" "}
          Was Founded In 2012. We Work In The Fields Of Industrial Design,
          Residential Architecture, Commercial Interiors, Photography And Art
          Direction.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
