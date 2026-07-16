import "./Hero.css";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      {/* Left Side */}
      <div className="hero-left">
        <span className="tag">🚀 #1 Job Portal Platform</span>

        <h1>
          Find Your <span>Dream Job</span> Today
        </h1>

        <p>
          Discover thousands of job opportunities from top companies
          around the world. Build your future with JobConnect.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Jobs..."
          />

          <button>Search</button>
        </div>

        <div className="stats">
          <div>
            <h2>10K+</h2>
            <p>Jobs</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Companies</p>
          </div>

          <div>
            <h2>20K+</h2>
            <p>Candidates</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <img src={hero} alt="JobConnect Hero" />
      </div>
    </section>
  );
}

export default Hero;