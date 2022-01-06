const TextContainer = () => {
  return (
    <div className="textContainer">
      {/* top */}
      <div className="textContainer-top">
        <span className="text-green-600">Find you clean juice</span>
        <span className="first-letter:text-5xl">2 /4</span>
      </div>

      {/* middle */}
      <div className="textContainer-middle">
        <span>ORANGE</span>
      </div>

      {/* bottom */}
      <div className="textContainer-bottom">
        <button>show all the juices</button>
        <p>
          Your healthy <span> life </span> <br /> starts here with us!
        </p>
      </div>
    </div>
  );
};

export default TextContainer;
