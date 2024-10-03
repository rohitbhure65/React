import React from "react";

const Video = (props) => {
  const { title, para, image } = props;
  return (
    <div className="video" style={{ padding: "20px " }}>
      <img src={image} alt={title} style={{ width: "30vw" }} />
      <h3 className="title">{title}</h3>
      <p className="para">{para}</p>
    </div>
  );
};

export default Video;
