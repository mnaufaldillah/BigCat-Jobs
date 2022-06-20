import "./style.css"

const CardJob = ({ image, title, company, place, recruitStatus, time }) => {
    return (
        <div className ="card-wrapper">
            <div className="card-content">
                <img src={image} alt="" />
                <div className="card-info">
                    <h2>
                        <a href="#">{title}</a>
                    </h2>
                    <p>{company}</p>
                    <p>{place}</p>
                </div>
                <p>{recruitStatus}</p>
                <p>{time}</p>
            </div>
        </div>
    );
};

export default CardJob