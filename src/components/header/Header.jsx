import "./header.css";

export default function header() {
  return (
    <div className="header">
      <div className="headertitle">
        <span className="headertitlesm">React</span>
        <span className="headertitlelg">Blog</span>
      </div>
      <img
        className="headerimg"
        src="https://images.unsplash.com/photo-1677227812556-77006b64b2a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
        alt="pic"
      />
    </div>
  );
}
