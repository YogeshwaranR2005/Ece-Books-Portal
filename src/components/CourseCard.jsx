import { Link } from "react-router-dom";
import "../styles/coursecard.css";

function CourseCard({ course }) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="course-link"
    >
      <div className="course-card">

        <div className="course-top">

          <h2>📘 {course.name}</h2>

          <span className="arrow">→</span>

        </div>

        <p>
  {course.books.length}{" "}
  {course.books.length === 1 ? "Book" : "Books"} Available
</p>

      </div>
    </Link>
  );
}

export default CourseCard;