import style from './TopRated.module.css'

export default function TopRated() {
  return (

    <section className={style.topRated}>
      <div className="container">
        <div className={`${style.content} d-flex justify-content-between align-items-center mb-5`}>

          <div>
            <p className={style.p}>CHEF'S SELECTION</p>

            <h2 className={style.h2}>
              Top-Rated Creation
            </h2>
          </div>

          <p className={style.explore}>
            Explore All
          </p>

        </div>

        {/* DISHES */}
        <div className="row g-4">

          {/* Bigest */}
          <div className="col-lg-8">

            <div className={style.bigest}>

              <span className={`${style.span} text-center`}>Bestseller</span>

              <h4>Mediterranean Harvest Bowl</h4>

              <p>
                Roasted chickpeas, organic quinoa,
                and heirloom vegetables tossed in
                lemon-tahini glaze
              </p>

              <div className={style.price}>

                <h5>$18.50</h5>

                <button>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>

          {/* children */}
          <div className="col-lg-4">

            <div className="d-flex flex-column gap-4">

              <div className={style.child1}>
                <p>Wagyu Skewers</p>
                <h6>$24.50</h6>
              </div>

              <div className={style.child2}>
                <p>Classic Margherita</p>
                <h6>$16.00</h6>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}