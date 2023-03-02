import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOau_PFujphmeTUO3JClC5uHTH3lsfAv8VYg&usqp=CAU"
        alt="pic"
      />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="posttitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className="postdesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate
        in totam, inventore quibusdam ex doloribus perferendis consequatur.
        Dolores distinctio suscipit molestias beatae repudiandae. Saepe enim
        alias facere mollitia? Illo.
      </p>
    </div>
  );
}
