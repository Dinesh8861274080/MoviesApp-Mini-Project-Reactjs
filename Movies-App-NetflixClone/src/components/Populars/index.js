import {Component} from 'react'
import NavBar from '../NavBar'

import Footer from '../Footer'
// import LoadingElement from '../LoaderElement'
import Popular from '../Popular'

class Populars extends Component {
  //   state = {searchInput: ''}

  render() {
    return (
      <>
        <div className="home-container" testid="popular">
          <NavBar />
          <Popular />
          <Footer />
        </div>
      </>
    )
  }
}

export default Populars
