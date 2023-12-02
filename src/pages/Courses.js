import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div className="Page">
      <h1>You area in the Courses page!</h1>
      <h3>URL: http://localhost:3000/courses</h3>
      <div className="courses-nav">
        <Link to="/courses/search">Search</Link>
        <Link to="/courses/list">List</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Courses;
