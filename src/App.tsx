import './App.css'

const valueItems = [
  {
    icon: 'bi-wallet2',
    title: 'Paquetes personalizados',
    text: 'Planes a tu medida segun tu presupuesto y estilo de viaje.',
  },
  {
    icon: 'bi-globe-americas',
    title: 'Destinos exclusivos',
    text: 'Accede a experiencias autenticas y rutas que marcan diferencia.',
  },
  {
    icon: 'bi-credit-card',
    title: 'Facilidades de pago',
    text: 'Reserva con cuotas flexibles y promociones exclusivas.',
  },
  {
    icon: 'bi-headset',
    title: 'Asesoria completa',
    text: 'Te acompanamos antes, durante y despues de tu viaje.',
  },
]

const destinationItems = [
  {
    title: 'Cancun Escape',
    text: '5 dias all inclusive con tours en cenotes.',
    image:
      'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=900&q=80',
    alt: 'Playa en Cancun',
    cta: 'Ver mas',
  },
  {
    title: 'Europa Clasica',
    text: 'Roma, Paris y Barcelona en un solo paquete premium.',
    image:
      'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=900&q=80',
    alt: 'Ciudad europea',
    cta: 'Reservar',
  },
  {
    title: 'Aventura Andes',
    text: 'Trekking y naturaleza para viajeros con energia total.',
    image:
      'https://images.unsplash.com/photo-1468630837429-66f3aef38d6b?auto=format&fit=crop&w=900&q=80',
    alt: 'Aventura en montana',
    cta: 'Ver mas',
  },
  {
    title: 'Islas del Pacifico',
    text: 'Relax total en playas turquesa y resorts boutique.',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80',
    alt: 'Barco en agua cristalina',
    cta: 'Reservar',
  },
  {
    title: 'Ruta Cultural Asia',
    text: 'Historia, gastronomia y tradiciones inolvidables.',
    image:
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f64?auto=format&fit=crop&w=900&q=80',
    alt: 'Templo y cultura asiatica',
    cta: 'Ver mas',
  },
  {
    title: 'Safari Africa',
    text: 'Experiencia unica con guias expertos y lodges premium.',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
    alt: 'Safari en Africa',
    cta: 'Reservar',
  },
]

const testimonials = [
  {
    review:
      'Gracias a esta agencia tuve el mejor viaje a Europa. Todo estaba perfectamente organizado.',
    author: 'Maria R.',
  },
  {
    review: 'No me preocupe por nada. Me ayudaron desde la reserva hasta el regreso a casa.',
    author: 'Carlos M.',
  },
  {
    review: 'Consegui una oferta increible para mi luna de miel. Excelente servicio y soporte.',
    author: 'Daniela P.',
  },
]

const iconHighlights = [
  {
    icon: 'bi-shield-check',
    title: 'Seguro de viaje incluido',
    text: 'Todos nuestros paquetes incluyen cobertura medica y proteccion ante cancelaciones inesperadas.',
  },
  {
    icon: 'bi-award',
    title: 'Programa de fidelidad',
    text: 'Acumula puntos con cada viaje y canjealos por descuentos, upgrades y experiencias premium.',
  },
]

const novedadesItems = [
  {
    title: 'Bangkok y Triangulo Dorado',
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Peru, Travesias Andes y Amazonia',
    image:
      'https://images.unsplash.com/photo-1468630837429-66f3aef38d6b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Capitales de Italia',
    image:
      'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Freedom Ride Alaska South Tour',
    image:
      'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Capitales Balcanicas',
    image:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Escapada Caribe Premium',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Ruta Mediterranea',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Aventura del Norte',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
  },
]

const socialContacts = [
  {
    icon: 'bi-whatsapp',
    name: 'WhatsApp',
    handle: '+51 999 888 777',
  },
  {
    icon: 'bi-instagram',
    name: 'Instagram',
    handle: '@novatravel.oficial',
  },
  {
    icon: 'bi-facebook',
    name: 'Facebook',
    handle: 'NovaTravel Agencia',
  },
]

const chunkItems = <T,>(items: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size))
  }
  return chunks
}

function App() {
  const novedadesSlides = chunkItems(novedadesItems, 4)

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg sticky-top border-bottom">
          <div className="container">
            <a className="navbar-brand fw-bold text-primary" href="#inicio">
              NovaTravel
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Abrir menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                <li className="nav-item">
                  <a className="nav-link" href="#destinos">
                    Destinos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonios">
                    Testimonios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#suscripcion">
                    Suscribete
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">
                    Contacto
                  </a>
                </li>
                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                  <a className="btn btn-cta" href="#formulario">
                    Planifica tu proximo viaje
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section id="inicio" className="hero">
          <div className="container py-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span className="badge rounded-pill hero-badge px-3 py-2 mb-3">
                  Oferta valida solo esta semana
                </span>
                <h1 className="display-5 fw-bold mb-3">
                  Descubre el mundo sin complicaciones: nosotros planificamos tu viaje perfecto.
                </h1>
                <p className="lead mb-4">
                  Viaja mas, preocupate menos. Cuidamos vuelos, hospedaje y experiencias para que
                  solo disfrutes cada destino.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <a href="#destinos" className="btn btn-cta btn-lg">
                    Explorar destinos
                  </a>
                  <a href="#formulario" className="btn btn-outline-light btn-lg">
                    Empieza tu aventura
                  </a>
                </div>
                <div className="offer-chip d-inline-flex gap-2 mt-4 px-3 py-2 rounded-pill">
                  <i className="bi bi-fire"></i>
                  <small>20% de descuento si reservas hoy</small>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
                    className="img-fluid"
                    alt="Playa turquesa al atardecer"
                  />
                  <div className="card-body">
                    <p className="mb-2 fw-bold text-primary">Experiencia destacada: Caribe Premium</p>
                    <p className="mb-0">Ultimos 10 cupos para Cancun con todo incluido.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="py-5 section-soft" id="valor">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="section-title fw-bold">Por que elegir NovaTravel</h2>
              <p className="text-secondary mb-0">
                Conocenos: somos una agencia de viajes enfocada en brindar asesoria cercana,
                itinerarios personalizados y acompanamiento real en cada etapa de tu viaje.
              </p>
            </div>
            <div className="row g-4">
              {valueItems.map((item) => (
                <div className="col-md-6 col-lg-3" key={item.title}>
                  <article className="card value-card h-100 p-3">
                    <span className="icon-circle mb-3">
                      <i className={`bi ${item.icon}`}></i>
                    </span>
                    <h3 className="h5">{item.title}</h3>
                    <p className="mb-0">{item.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="destinos" className="py-5">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-end mb-4 gap-3">
              <div>
                <h2 className="section-title fw-bold mb-1">Destinos y experiencias destacadas</h2>
                <p className="mb-0 text-secondary">
                  Playa, aventura y cultura para cada tipo de viajero.
                </p>
              </div>
              <a className="btn btn-cta" href="#formulario">
                Reserva ahora
              </a>
            </div>

            <div className="row g-4">
              {destinationItems.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.title}>
                  <article className="card destination-card h-100">
                    <img src={item.image} className="card-img-top" alt={item.alt} />
                    <div className="card-body">
                      <h3 className="h5">{item.title}</h3>
                      <p className="text-secondary">{item.text}</p>
                      <a href="#formulario" className="btn btn-outline-primary">
                        {item.cta}
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5" id="iconos">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="section-title fw-bold">Beneficios que se adaptan a ti</h2>
            </div>
            <div className="row g-4 justify-content-center">
              {iconHighlights.map((item) => (
                <div className="col-md-6" key={item.title}>
                  <article className="icon-feature-card text-center h-100 p-4">
                    <i className={`bi ${item.icon} feature-icon mb-3`}></i>
                    <h3 className="h2 feature-title mb-2">{item.title}:</h3>
                    <p className="mb-0 feature-text">{item.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 section-soft" id="novedades">
          <div className="container">
            <h2 className="section-title fw-bold display-6 mb-4">Novedades</h2>

            <div
              id="novedadesCarousel"
              className="carousel slide novedades-carousel"
              data-bs-ride="carousel"
              data-bs-interval="3200"
            >
              <div className="carousel-inner">
                {novedadesSlides.map((slide, slideIndex) => (
                  <div
                    className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}
                    key={`novedades-slide-${slideIndex}`}
                  >
                    <div className="row g-3">
                      {slide.map((item) => (
                        <div className="col-12 col-sm-6 col-lg-3" key={item.title}>
                          <article className="novedad-card overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-100" />
                            <div className="novedad-overlay p-3 d-flex align-items-end">
                              <h3 className="h4 mb-0 text-white fw-bold">{item.title}</h3>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#novedadesCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#novedadesCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        </section>

        <section className="urgent-strip py-3">
          <div className="container d-flex flex-wrap justify-content-between gap-2">
            <strong>
              <i className="bi bi-alarm"></i> Ultimos 10 cupos para Cancun
            </strong>
            <strong>
              <i className="bi bi-lightning-charge-fill"></i> 20% de descuento si reservas hoy
            </strong>
          </div>
        </section>

        <section id="testimonios" className="py-5 section-soft">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="section-title fw-bold">Lo que dicen nuestros viajeros</h2>
              <p className="text-secondary mb-0">Resenas reales que generan confianza inmediata.</p>
            </div>
            <div className="row g-4">
              {testimonials.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.author}>
                  <article className="card testimonial-card h-100 p-4">
                    <p className="mb-2">&quot;{item.review}&quot;</p>
                    <div className="text-warning mb-2">★★★★★</div>
                    <strong>{item.author}</strong>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="suscripcion" className="py-5">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-6">
                <article className="card trust-card h-100 p-4">
                  <h2 className="section-title fw-bold">Beneficios de suscribirte</h2>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Ofertas
                      exclusivas de viajes
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Promociones antes
                      que nadie
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Descuentos en
                      paquetes turisticos
                    </li>
                    <li className="mb-0">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Guias de viaje
                      gratuitas
                    </li>
                  </ul>
                  <a href="#formulario" className="btn btn-cta align-self-start">
                    Suscribete y recibe ofertas exclusivas
                  </a>
                </article>
              </div>
              <div className="col-lg-6" id="formulario">
                <article className="card trust-card h-100 p-4">
                  <h2 className="section-title fw-bold">Planifica tu proximo viaje</h2>
                  <p className="text-secondary">
                    Completa el formulario y recibe una propuesta personalizada.
                  </p>
                  <form className="row g-3 mt-1">
                    <div className="col-12">
                      <label htmlFor="nombre" className="form-label">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        className="form-control"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="tuemail@ejemplo.com"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="destino" className="form-label">
                        Destino de interes (opcional)
                      </label>
                      <input
                        id="destino"
                        type="text"
                        className="form-control"
                        placeholder="Ej: Cancun, Europa, Japon"
                      />
                    </div>
                    <div className="col-12 d-grid">
                      <button type="submit" className="btn btn-cta btn-lg">
                        Reserva ahora
                      </button>
                    </div>
                  </form>
                  <p className="small text-secondary mt-3 mb-0">
                    <i className="bi bi-shield-lock-fill me-1"></i>Tus datos estan protegidos y no
                    compartiremos tu informacion.
                  </p>
                </article>
              </div>
            </div>

            <div id="contacto" className="contact-support mt-5">
              <div className="text-center mb-4">
                <h3 className="section-title fw-bold mb-2">Tambien puedes contactarnos</h3>
                <p className="text-secondary mb-0">
                  Si prefieres, escribenos por WhatsApp o en nuestras redes oficiales.
                </p>
              </div>
              <div className="row g-3 text-center">
                {socialContacts.map((item) => (
                  <div className="col-12 col-md-4" key={item.name}>
                    <div className="brand-logo contact-brand d-flex align-items-center gap-2">
                      <span className="d-inline-flex align-items-center gap-2">
                        <i className={`bi ${item.icon} fs-5`} aria-hidden="true"></i>
                        <span>
                          <strong className="d-block text-start">{item.name}</strong>
                          <small className="d-block text-start text-secondary">{item.handle}</small>
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-4 bg-dark text-white-50">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">
          <small>© 2026 NovaTravel. Todos los derechos reservados.</small>
          <small>Atencion personalizada 24/7 para tu tranquilidad.</small>
        </div>
      </footer>

    </>
  )
}

export default App
