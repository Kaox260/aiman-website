import { Link } from "react-router-dom";

function ContactBubble() {
  return (
    <div className="contact-bubble" style={{ position: "relative" }}>
      <p>Vous pouvez me contacter depuis la page contact disponible juste ici ! 👉</p>
      <Link to="/contact">
        <button>
          <span>Contact</span>
        </button>
      </Link>
    </div>
  );
}

export default ContactBubble;
