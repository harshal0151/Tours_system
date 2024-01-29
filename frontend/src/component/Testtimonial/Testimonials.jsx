  import React from 'react'
  import Slider from 'react-slick'
  import ava01 from '../../assets/images/ava-1.jpg'
  import ava02 from '../../assets/images/ava-2.jpg'
  import ava03 from '../../assets/images/ava-3.jpg'
  import ava04 from '../../assets/images/ava-4.jpg'
  import ava05 from '../../assets/images/ava-5.jpg'
  import ava06 from '../../assets/images/ava-6.jpg'

  const Testimonials = () => {

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1800,
      swipeToSlide: true,
      autoplaySpeed: 200,
      slidesToShow: 3,

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },

      ]
    }

    return (
      <Slider{...settings}>
        <div className="testimonial py-4 px-3">
          <p>With more than 30,000 years of history, India is the birthplace of numerous cultures and religions making it one of the most important tourist destinations in the world.
            Being ruled over various dynasties and kingdoms before being established as a republic in the 20th century,
            India has more than thousand tourist attractions and several World Heritage Sites. Listed below are some of the most extravagant places you can visit in India.</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-23 rounded-2' alt="" />
          </div>
          <h6 className='mb-0 mt-3'>The Red Fort</h6>
          <p>Delhi</p>
        </div>
  
        <div className="testimonial py-4 px-3">
          <p>The name Taj Mahal, translates to the ‘Crown Palace’ and is one of the most famous and marvelous buildings in India.
            Located in the city of Agra, Taj Mahal is actually a mausoleum built to house the remains of Mumtaz Mahal, the wife of Mughal Emperor Shah Jahan.
            The building is known for its extensive use of white marble and was completed in the mid-17th century.!</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-23 rounded-2' alt="" />
          </div>
          <h6 className='mb-0 mt-3'>The Taj Mahal</h6>
          <p>Agra</p>
        </div>

        <div className="testimonial py-4 px-3">
          <p>With its location between India and Tibet, Pangong Lake is an enchanting saltwater lake located in the Himalayas in Ladakh.
            The lake can be reached via a 4-5 hours’ drive from Leh via the scenic Changla Pass.
            Pangong Tso is known for its hypnotizing blue waters and flocks of migratory birds that can be seen here.</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-23 rounded-2' alt="" />
          </div>
          <h6 className='mb-0 mt-3'>Pangong Lake</h6>
          <p>Ladakh</p>
        </div>

        <div className="testimonial py-4 px-3">
          <p>Located amidst the golden sands of the Thar Desert, the Jaisalmer Fort was built by the Bhati Rajput King Rawal Jaisal.
            It remained an important trade center during the medieval era before the popularity of maritime trade centers such as Bombay and Calcutta. Today,
            it is one of the important tourist centers in Rajasthan known for its exquisite Rajput Architecture and scenic beauty.</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava04} className='w-25 h-23 rounded-2' alt="" />
          </div>
          <h6 className='mb-0 mt-3'>Jaisalmer Fort</h6>
          <p> Jaisalmer</p>
        </div>

        <div className="testimonial py-4 px-3">
          <p>Hampi was the capital of the erstwhile Vijayanagar Empire and known to be one of the richest cities of its time.
            Located on the shores of the Tungabhadra River in Karnataka,
            Hampi is also a UNESCO World Heritage Site famous for its stone carved structures, built in marvelous Dravidian style architecture, temples and monuments.</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava05} className='w-25 h-23 rounded-2' alt="" />
          </div>
          <h6 className='mb-0 mt-3'>Ruins of Hampi</h6>
          <p>Karnataka</p>
        </div>

        <div className="testimonial py-4 px-3">
          <p>Also known by the names Kashi and Benares, Varanasi is said to have been continuously inhibited since the 11th century BC and is known to be the spiritual capital of India.
            The city is also known for its Ghats located on the banks of the Ganges River and were mostly built during the 18th century.
            Today, the Ghats are known to attract a large number of devotees and tourists who visit Varanasi to Pradeep Kumbhashi seek spiritual salvation.</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava06} className='w-25 h-23 rounded-2' alt="" />
          </div>
          <h6 className='mb-0 mt-3'>Ghats at Varanasi</h6>
          <p> Uttar Pradesh</p>
        </div>
      </Slider>
    )
  }

  export default Testimonials