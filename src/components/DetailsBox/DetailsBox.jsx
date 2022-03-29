import "./DetailsBox.scss";

const DetailsBox = () => {
  return (
    <div className="details-box">
      <section className="details-box__section">
        <p className="details-box__section-header">The Den</p>
        <p className="details-box__section-text">Norway</p>
      </section>
      <section className="details-box__section">
        <p className="details-box__section-header">Coordinates</p>
        <p className="details-box__section-text">64° 34' 41.91" N</p>
      </section>
    </div>
  );
};

export default DetailsBox;
