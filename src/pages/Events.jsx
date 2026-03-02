import { useClient } from '../context/ClientContext'
import './Events.css'

// Client-specific events content
const clientEventsContent = {
  hometownbrew: {
    events: [
      {
        id: 1,
        title: 'Pop-up Cafe',
        date: 'Every Saturday',
        time: '2:00 PM - 4:00 PM',
        description: 'Join us for an exclusive coffee tasting experience where you can explore different origins and roasts. Our baristas will guide you through the flavor profiles of our finest selections.',
        location: 'FSUU ROAD',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
        icon: '☕'
      },
      {
        id: 2,
        title: 'Live Music Fridays',
        date: 'Every Friday',
        time: '6:00 PM - 9:00 PM',
        description: 'Enjoy live acoustic performances from local artists while sipping your favorite beverage. The perfect atmosphere for relaxation and connection.',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
        icon: '🎵'
      },
      {
        id: 3,
        title: 'Pastry Making Workshop',
        date: 'First Sunday of each month',
        time: '10:00 AM - 12:00 PM',
        description: 'Learn the art of pastry making from our expert bakers. Create your own croissants, danishes, and muffins to take home. Spots are limited - book in advance!',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
        icon: '🥐'
      },
      {
        id: 4,
        title: 'Latte Art Competition',
        date: 'Third Saturday of each month',
        time: '1:00 PM - 5:00 PM',
        description: 'Watch talented baristas compete in creating amazing latte art designs. Free to watch, compete for prizes, or just enjoy specialty drinks while cheering on your favorites.',
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop',
        icon: '🎨'
      }
    ]
  },
  milkteashop: {
    events: [
      {
        id: 1,
        title: 'Bubble Tea Tasting',
        date: 'Every Saturday',
        time: '3:00 PM - 5:00 PM',
        description: 'Discover our signature bubble tea flavors and new seasonal drinks. Perfect for tea lovers who want to explore new tastes.',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=400&fit=crop',
        icon: '🧋'
      }
    ]
  },
  projectbrew: {
    events: [
      {
        id: 1,
        title: 'Brewing Masterclass',
        date: 'Every Saturday',
        time: '10:00 AM - 12:00 PM',
        description: 'Learn advanced brewing techniques from our expert baristas. Explore different methods and discover what works best for your palate.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
        icon: '☕'
      }
    ]
  }
}

function Events() {
  const { clientId, client } = useClient()
  
  // Get client-specific content
  const eventsContent = clientEventsContent[clientId] || {
    events: clientEventsContent.hometownbrew.events
  }

  return (
    <div className="events">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content fade-in">
          <h1>Events & Activities</h1>
          <p>Join us for exciting experiences and community moments</p>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-content">
        <div className="container">
          <div className="events-intro fade-in">
            <h2>What's Happening Next?</h2>
            <p>We host a variety of events to bring our community together. From coffee tastings to live music and workshops, there's always something happening at {client?.name || 'our place'}!</p>
          </div>

          <div className="events-grid">
            {eventsContent.events.map((event, index) => (
              <div key={event.id} className={`event-card fade-in-delay-${index}`}>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-icon">{event.icon}</div>
                </div>



                
                <div className="event-content">
                  <div className="event-date-time">
                    <div className="event-date-item">
                      <span className="label">Date:</span>
                      <span className="value">{event.date}</span>
                    </div>
                    <div className="event-date-item">
                      <span className="label">Time:</span>
                      <span className="value">{event.time}</span>
                    </div>
                    {/* Location */}
                    <div className="event-location">
                       <span className="label">Location:</span>
                       <span className="value">{event.location}</span>
                        </div>
                  </div>
                  
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Can't Make It to an Event?</h2>
            <p>Stay updated about our latest events and activities. Follow us on our social media channels or subscribe to our newsletter to never miss out!</p>
            
            <div className="cta-buttons">
              <a href={client?.messengerLink || '#'} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Message Us
              </a>
              <a href={client?.contact?.mapLink || '#'} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
