import ImageCard from "../ImageCard/ImageCard.jsx";

const imageGallery = ({ data }) => {
  return (
    <ul>
      <ImageCard data={data} />
    </ul>
  );
};

export default imageGallery;
