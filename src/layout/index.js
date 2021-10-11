
import Footer from './footer';
import Header from './header';

function Layout({children}) {
  return (
    <div className="App">
        <Header />
            <div> {children}</div>
        <Footer  />
    </div >
  );
}

export default Layout;
