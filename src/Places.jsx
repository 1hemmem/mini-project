import chrea from "./pictures/chrea.png";
export const Places = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top pd" src={chrea} alt="Card image cap" style={{borderRadius: "20px"}}/>
      <div class="card-body">
        <h5 className="card-title">Chrea mountains</h5>
        <p className="card-text">
          Majestic peaks, tranquil lakes. Popular for hiking, nature
          enthusiasts. Rich biodiversity.
        </p>
        <a href="#" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};
