import "./PageHeading.scss";

const PageHeading = ({ heading }) => {
  const headingArr = heading.split(" ");
  return (
    <div className="page-heading">
      <h3 className="page-heading__heading">{headingArr[0]}</h3>
      <h3 className="page-heading__heading">
        {headingArr.slice(1, headingArr.length).join(" ")}
      </h3>
    </div>
  );
};

export default PageHeading;
