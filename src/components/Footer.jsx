
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        Bhumi<span>.</span>
      </a>

      <p>
        Designed & built with <Heart size={15} /> by Bhumi Chandil
      </p>

      <p>© {new Date().getFullYear()} Bhumi Chandil. All rights reserved.</p>
    </footer>
  );
}
