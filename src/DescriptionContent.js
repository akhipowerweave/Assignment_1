

const DescriptionContent = ({image,title,description})=> {
   
  return (
    <div className="DescriptionContent">
        <h2>{title}</h2>
      <img src={image} className="logo-sm"/>
      <div className="content"><p> {description}</p></div>
    </div>
  );
}

export default DescriptionContent;
