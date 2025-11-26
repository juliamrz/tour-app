// Local deps
import './Loader.css';

const Loader = () => {
  return (
    <div className="module">
      <div className="throbber sun">
        <div className="loading-container">
          <div className="loader">
            <div className="spoke-center" />
            <div className="loading-spokes">
              <div className="spoke-container">
                <div className="spoke" />
              </div>
              <div className="spoke-container">
                <div className="spoke" />
              </div>
              <div className="spoke-container">
                <div className="spoke" />
              </div>
              <div className="spoke-container">
                <div className="spoke" />
              </div>
              <div className="spoke-container">
                <div className="spoke" />
              </div>
              <div className="spoke-container">
                <div className="spoke" />
              </div>
              <div className="spoke-container">
                <div className="spoke" />
              </div>
              <div className="spoke-container">
                <div className="spoke" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader;
