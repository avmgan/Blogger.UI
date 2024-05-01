import Icon from "../font-icon/Icon"

function Subscribe() {
    return (
        <>
          <div className="subscribe-box">
              <form action="">
                  <h1 className="subscribe-title">Subscribe</h1>
                  <div className="subscribe-field d-flex align-items-center gap-2 justify-content-between flex-column flex-sm-row ">
                      <input type="email" placeholder="example@example.com" />
                      <button type="submit" className="d-flex align-items-center justify-content-center gap-2">
                          <Icon color="#fff" size={20} icon="Paper_Plane" />
                          Send Me
                      </button>
                  </div>
                  <p className="AZ-copyright">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </form>
          </div>
        </>
    )
}
  
  export default Subscribe