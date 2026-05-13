import styles from './Favourit.module.css'
import Girlled from '../../../assets/Grilled Salmon.png'
import ribs from '../../../assets/Ribs.png'
import pizza from '../../../assets/Spicy Pepperoni.png'
import pasta from '../../../assets/Truffle Pasta.png'

export default function Favourit() {

  const fav = [
    {
      src: Girlled,
      title: 'Seared Atlantic Salmon',
      desc: 'Wild-caught salmon with herb-crusted skin and seasonal greens.',
      price: '$24'
    },
    {
      src: ribs,
      title: 'Smoked Back Ribs',
      desc: '12-hour slow smoked ribs with our signature bourbon glaze.',
      price: '$28'
    },
    {
      src: pizza,
      title: 'Honey Pepperoni',
      desc: 'Spicy salami, hot honey, and fresh oregano on a 48h sourdough.',
      price: '$22'
    },
    {
      src: pasta,
      title: 'Black Truffle Pasta',
      desc: 'Fresh tagliatelle, winter truffles, and 24-month aged parmesan.',
      price: '$30'
    }
  ]

  return (
    <section className={`py-5 ${styles.container}`}>
      <div className="container">

        <div className="row g-4">

          {fav.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={index}
            >
              <div className={`${styles.card} card  border-0`}>

                <img
                  src={item.src}
                  className={`card-img-top ${styles.image}`}
                  alt={item.title}
                />

                <div className="card-body d-flex flex-column p-3">

                  <h5 className={styles.cardtitle}>
                    {item.title}
                  </h5>

                  <p className={styles.cardtext}>
                    {item.desc}
                  </p>

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <p className={styles.cardprice}>
                      {item.price}
                    </p>

                    <a href="#" className="btn btn-dark">
                      Order
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}