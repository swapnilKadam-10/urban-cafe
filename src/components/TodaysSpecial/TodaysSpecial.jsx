import { Link } from 'react-router-dom'
import { todaysSpecials } from '../../data/menu'
import MenuCard from '../MenuCard/MenuCard'

function TodaysSpecial() {
  return (
    <section className="section-padding bg-cafe-bg">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="script text-5xl text-accent">Chef's picks</p>
            <h2 className="section-title">Today's Specials</h2>
          </div>
          <Link to="/specials" className="premium-button self-start md:self-auto">View Specials</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {todaysSpecials.map((item) => <MenuCard key={item.id} item={{ ...item, popular: true }} />)}
        </div>
      </div>
    </section>
  )
}

export default TodaysSpecial
