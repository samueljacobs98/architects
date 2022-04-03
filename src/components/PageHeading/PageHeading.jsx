import "./PageHeading.scss";
import useWindowSize from "../../assets/hooks/useWindowSize";

const PageHeading = ({ heading, text, spanText }) => {
  const headingArr = heading.split(" ");
  return (
    <div className="page-heading">
      <div className="page-heading__heading">
        <h3 className="page-heading__heading-line">{headingArr[0]}</h3>
        <h3 className="page-heading__heading-line">
          {headingArr.slice(1, headingArr.length).join(" ")}
        </h3>
      </div>
      {useWindowSize(768) && (
        <div className="page-heading__page">
          <p className="page-heading__page-text">
            <span className="page-heading__page-text-span">{spanText}</span>
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default PageHeading;
