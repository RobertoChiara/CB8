import "./index.css";

const Gallerycard = ({ GalleryObj }) => {
  return (
    <div className="Gallery__Card">
      <img id={GalleryObj.id} src={GalleryObj.src} alt={GalleryObj.alt} />
    </div>
  );
};

export default Gallerycard;
