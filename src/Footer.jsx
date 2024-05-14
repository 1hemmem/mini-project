export const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white pt-5 pb-3">
      <div className="row">
        <div className="col-md-4">
          <h3>Blida Website</h3>
          <p>
            This is Blida, the place where you will find it all. Peace and
            beauty of God's creation, u can visit mountains and discover what
            you have been missing by using electronic devices.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Navigation</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#Homepage" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#Places" className="text-white">
                Top places
              </a>
            </li>
            <li>
              <a href="#Hotels" className="text-white">
              Top Hotels
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Follow Us</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                <i className="bi bi-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pb-2">
        <p>&copy; 2024 Bahaeddine & Khalil. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
