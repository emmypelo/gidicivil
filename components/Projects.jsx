const Projects = ({ url, name, description }) => {
  return (
    <div className="card min-h-[400px]">
      <img className="w-[100vw] h-[300px] object-cover" src={url} alt="product image" />
      <h2>{name}</h2>

      {/* <p>{description}</p> */}
    </div>
  );
};

export default Projects;
