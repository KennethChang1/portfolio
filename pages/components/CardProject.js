const CardProject = ({ title, links, tech, img }) => {
  return (
    <div className="card-project">
      <img className="card-project-img" src={img} alt="" />
      <p className="card-project-title">{title}</p>
      <div className="card-project-tech">
        {tech.map((items, index) => (
          <p key={index}>{items}</p>
        ))}
      </div>
      <div className="btn-container">
        <a href={links[1]} className="btn btn-margin" target="_blank">
          view project
        </a>
        <a href={links[0]} className="btn" target="_blank">
          view code
        </a>
      </div>
    </div>
  );
};

export default CardProject;
