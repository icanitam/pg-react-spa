const { Link } = require("react-router-dom");

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Link to="/course">Course</Link>
    </div>
  );
};

export default Home;
