import { FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import "@/styles/Contact.css";

export default function Contact() {
    return (
        <div id="contact" className="contact-container">
            <div className="contact-wrapper">
                <h2 className="contact-heading">Contact Us</h2>

                <div className="contact-grid">
                    {/* Contact Form */}
                    <div className="contact-form">
                        <h3 className="form-heading">Get in Touch</h3>
                        <form action="#" method="POST" className="form">
                            <div className="form-field">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" name="name" id="name" className="form-input" placeholder="Enter your name" required />
                            </div>

                            <div className="form-field">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" name="email" id="email" className="form-input" placeholder="Enter your email" required />
                            </div>

                            <div className="form-field">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea id="message" name="message" rows={4} className="form-textarea" placeholder="Type your message" required></textarea>
                            </div>

                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3 className="info-heading">Our Contact Info</h3>
                        <p className="info-description">
                            Feel free to reach out to us with any questions, comments, or inquiries. We&apos;re here to help!
                        </p>
                        <ul className="info-list">
                            <li>
                                <span className="info-label">Address:</span>
                                <p className="info-text">123 Luxury Lane, Fashion City, XYZ 12345</p>
                            </li>
                            <li>
                                <span className="info-label">Phone:</span>
                                <p className="info-text">+123-456-7890</p>
                            </li>
                            <li>
                                <span className="info-label">Email:</span>
                                <p className="info-text">info@luxuryperfumes.com</p>
                            </li>
                        </ul>

                        {/* Social Media Links */}
                        <div className="social-links">
                            <h4 className="social-heading">Follow Us</h4>
                            <div className="social-icons">
                                <a href="#" className="social-icon twitter">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="social-icon instagram">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="social-icon youtube">
                                    <FaYoutube size={24} />
                                </a>
                                <a href="#" className="social-icon github">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
