import Image from 'next/image';
import AboutImg from "@/assets/aboutImg.png";
import "@/styles/About.css"; 

export default function About() {
  return (
    <section className="about-section">
      {/* Left Image Section */}
      <div className="about-img-container">
        <Image
          src={AboutImg}
          alt="Perfume bottle"
          width={500}
          height={500}
          className="about-img"
        />
      </div>

      {/* Right Text Section */}
      <div className="about-text-container">
        <h2>About Us</h2>
        <p>
          At The Perfume, we believe in the art of fragrance creation. Each bottle is a masterpiece crafted with precision and care, blending the finest ingredients from around the world. Our mission is to bring you a scent that not only complements your personality but also leaves a lasting impression.
        </p>
        <p>
          With a legacy of over 20 years, we continue to innovate, creating perfumes that are not only luxurious but also timeless.
        </p>
      </div>
    </section>
  );
}
