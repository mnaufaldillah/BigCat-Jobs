import "./style.css"

const MentoringCard = ({image, author, subtitle, description, price}) => {
    return (
        <div className="card-wrapper">
          <div className="card-content">
            <img src={image} alt="" />
            <div className="card-info">
              <h2>
                <a href="#">{title}</a>
              </h2>
              <p>{subTitle}</p>
              <p>{description}</p>
              <h1>{price}</h1>
            </div>
          </div>
        </div>
      );
};

export default MentoringCard;