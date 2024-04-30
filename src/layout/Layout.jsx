import Icon from "../font-icon/Icon"
import Menu from "../components/Menu"
import Events from "../components/Events"
import PopularTag from "../components/PopularTag"

function Layout({ children }) {
  return (
    <>
        <section className="AZ-page-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Menu />
                        <Events />
                    </div>
                    <div className="col-lg-6">
                        <form action="">
                            <div className="AZ-search-wrapper d-none d-lg-flex align-items-center gap-3">
                                <button type="button"><Icon color="#444" size={20} icon="search-lg" /></button>
                                <input type="search" placeholder="search..." />
                            </div>
                        </form>
                        {children}
                    </div>
                    <div className="col-lg-3">
                       <PopularTag />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Layout