import { Link } from "react-router";

function ContactBubble() {
  return (
    <div className="contact-bubble" style={{ position: "relative" }}>
      <p>Vous pouvez me contacter depuis la page contact disponible juste ici ! 👉</p>
      <Link to="/contact">
        <div className="button-overlay">
          <button>
            <span>Contact</span>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ContactBubble;
