const Course = ({ title, image, price }) => {
    const handleEnroll = () => {
      alert(`Enrolled in ${title}`);
    };
  
    return (
      <div className="course">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{price}</p>
        <button onClick={handleEnroll}>Enroll Now</button>
      </div>
    );
  };
  export default Course