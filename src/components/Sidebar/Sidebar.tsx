import {FC} from 'react'
import "./Sidebar.scss";

const Sidebar: FC = () => {
  return (
    <section className="sidebar">
      <h2 className="sidebar__heading">Now Playing Movies</h2>


      <div className="sidebar__wrapper">
        <div className="sidebar__container">
          <h3 className="sidebar__name">Filter</h3>
        </div>

        <div className="sidebar__filter">
          
        </div>
      </div>
 
    </section>
  )
}

export default Sidebar