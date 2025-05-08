const ImageCard = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>
          <img src={item.urls.small_s3} alt={item.alt_description} />
        </li>
      ))}
    </div>
  );
};

export default ImageCard;
