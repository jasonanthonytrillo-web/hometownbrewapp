import { useState, useEffect } from 'react';
import { useClient } from '../context/ClientContext';
import './Contact.css';

function Contact() {
  const { client, clientId } = useClient();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Get contact info from client config
  const defaultContactInfo = {
    phone: '(+63) 912-345-6789',
    email: 'info@business.com',
    address: 'Business Address',
    googleReviewLink: '#',
    mapLink: '#',
    formsubmitEmail: 'business@email.com',
    storeHours: [
      { day: 'Monday', hours: '10 AM–10 PM', isClosed: false },
      { day: 'Tuesday', hours: '10 AM–10 PM', isClosed: false },
      { day: 'Wednesday', hours: '10 AM–10 PM', isClosed: false },
      { day: 'Thursday', hours: '10 AM–10 PM', isClosed: false },
      { day: 'Friday', hours: '10 AM–10 PM', isClosed: false },
      { day: 'Saturday', hours: '10 AM–10 PM', isClosed: false },
      { day: 'Sunday', hours: 'Closed', isClosed: true }
    ]
  };

  const contactInfo = client?.contact ? { ...defaultContactInfo, ...client.contact } : defaultContactInfo;

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      
      // Sunday = 0
      if (day === 0) {
        setIsOpen(false);
        return;
      }
      
      // Open from 10 AM to midnight
      if (hours >= 10 || hours < 0) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("Please fill in all fields before submitting.");
      return;
    }

    // Format the message for Messenger
    const messageText = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    try {
      // Copy to clipboard
      await navigator.clipboard.writeText(messageText);

      // Show modal with the message
      setModalMessage(messageText);
      setShowModal(true);
      setStatus("");
    } catch (error) {
      setStatus("Oops! There was a problem copying your message. Please try again.");
      console.error('Error:', error);
    }
  };

  const handleModalConfirm = () => {
    if (client?.messengerLink) {
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(modalMessage);
      
      // Extract page ID from messenger link (format: https://www.messenger.com/t/336367819563080)
      const pageIdMatch = client.messengerLink.match(/\/t\/(\d+)/);
      const pageId = pageIdMatch ? pageIdMatch[1] : null;
      
      let messengerUrl = '';
      if (pageId) {
        // Use m.me short link format with ?text parameter (auto-pastes)
        messengerUrl = `https://m.me/${pageId}?text=${encodedMessage}`;
      } else {
        // Try with username format
        const usernameMatch = client.messengerLink.match(/\/t\/([^\/]+)/);
        const username = usernameMatch ? usernameMatch[1] : null;
        if (username) {
          messengerUrl = `https://m.me/${username}?text=${encodedMessage}`;
        } else {
          messengerUrl = client.messengerLink;
        }
      }
      
      window.open(messengerUrl, '_blank');
    }
    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const storeHours = contactInfo.storeHours;

  return (
    <div className="contact fade-in">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">We'd love to hear from you</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3>Send us a Message</h3>
            {status && (
              <div className={`form-status ${status.includes('Thank you') ? 'success' : 'error'}`}>
                {status}
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows="5"
                />
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>

            {/* Google Review - Below Contact Form */}
            <div className="google-rating-wrapper">
              <h3>Love Us? Leave a Review!</h3>
              <p className="rating-intro">Your feedback helps us improve and helps others discover our business.</p>
              <div className="rating-display">
                <div className="stars">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21 17.77.02 12 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <span className="rating-value">5.0</span>
              </div>
              <a 
                href={contactInfo.googleReviewLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="google-review-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Leave a Google Review
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-header">
              <h2>Get in Touch</h2>
              <p>Have questions or feedback? We'd love to hear from you. Reach out to us through any of the channels below.</p>
            </div>

            {/* Phone */}
            <div className="contact-info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>{contactInfo.phone}</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="contact-info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p>{contactInfo.email}</p>
              </div>
            </div>
            
            {/* Store Hours */}
            <div className="contact-info-item store-hours-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>Store Hours</h3>
                <div className="store-hours-status">
                  <span className={`status-badge ${isOpen ? 'open' : 'closed'}`}>
                    {isOpen ? 'Open Now' : 'Closed'}
                  </span>
                </div>
                <div className="store-hours-list">
                  {storeHours.map((schedule, index) => (
                    <div key={index} className={`hours-row ${schedule.isClosed ? 'closed-day' : ''}`}>
                      <span className="day">{schedule.day}</span>
                      <span className="hours">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Image */}
            <div className="location-image-wrapper">
              <h3>Find Us</h3>
              <a 
                href={contactInfo.mapLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="location-image-container"
              >
                <img 
                  src="/location.png" 
                  alt="Our Location" 
                  className="location-image"
                />
              </a>
              <p className="location-directions">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Modal for Messenger */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Your Message is Ready!</h3>
            <p className="modal-subtitle">Your message has been copied to clipboard:</p>
            <div className="modal-message-box">
              <pre>{modalMessage}</pre>
            </div>
            <p className="modal-instructions">
              Press <strong>OK</strong> to open Messenger. Your message will be automatically pasted in the chat - just send it!
            </p>
            <div className="modal-buttons">
              <button className="modal-ok-btn" onClick={handleModalConfirm}>
                OK, Send on Messenger →
              </button>
              <button className="modal-cancel-btn" onClick={handleModalCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
