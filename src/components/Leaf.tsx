const Leaf = ({ className, imageUrl }) => {
  return (
    <div className={className}>
      <img src={imageUrl} className="leaf" />
    </div>
  );
};

export default Leaf;
