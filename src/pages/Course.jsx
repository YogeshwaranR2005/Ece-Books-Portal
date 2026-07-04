import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";
import "../styles/course.css";

function Course() {

    const { id } = useParams();

    const course = courses.find((c) => c.id === id);

    if (!course) {
        return (
            <div className="course-page">
                <h1>Course Not Found</h1>
                <Link to="/">← Go Home</Link>
            </div>
        );
    }

    return (
        <div className="course-page">

            <Link className="back-btn" to="/">
                ← Back to Courses
            </Link>

            <div className="course-header">

                <h1>{course.name}</h1>

                <p>
                    📚 {course.books.length} {course.books.length === 1 ? "Book" : "Books"} Available
                </p>

            </div>

            <div className="books-list">

                {course.books.map((book) => (

                    <div
                        key={book.id}
                        className="book-card"
                    >

                        <div className="book-info">

                            <h2>📘 {book.title}</h2>

                            <p>📄 PDF Document</p>

                        </div>

                        <div className="buttons">

                            <a
                                className="action-btn"
                                href={book.file}
                                target="_blank"
                                rel="noreferrer"
                            >
                                 View
                            </a>

                            <a
                                className="action-btn download"
                                href={book.file}
                                download
                            >
                                 Download
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Course;