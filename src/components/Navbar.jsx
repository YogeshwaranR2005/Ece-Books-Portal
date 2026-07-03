import "../styles/navbar.css";

function Navbar({ search, setSearch }) {
  return (
    <div className="hero">
      <div className="overlay">

        <h1>📚 TCE ECE Books Portal</h1>

        <p>Thiagarajar College of Engineering</p>

        <input
          type="text"
          placeholder="🔍 Search Courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>
    </div>
  );
}

export default Navbar;