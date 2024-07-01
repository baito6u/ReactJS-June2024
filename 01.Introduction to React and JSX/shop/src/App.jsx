import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import PageHeader from "./components/PageHeader";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* Topbar Start */}
      <TopBar />
      {/* Topbar End */}

      {/* Navbar Start */}
      <Navigation />
      {/* Navbar End */}

      {/* Page Header Start */}
      <PageHeader />
      {/* Page Header End */}

      {/* Shop Start */}
      <Shop/>
      {/* Shop End */}

      {/* Footer Start */}
      <Footer/>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}

export default App;
