import Link from "next/link";

export default function Footer() {
  return (
    <div className="interface"> {/* className em vez de class */}
      <div className="line-footer"> {/* className em vez de class */}
        <div className="flex"> {/* className em vez de class */}
          <div className="btn-social"> {/* className em vez de class */}
            <a href="https://www.instagram.com/eltobrgs/">
              <button>
                <i className="bi bi-instagram"></i>
              </button>
            </a>
            <a href="https://github.com/eltobrgs">
              <button>
                <i className="bi bi-github"></i>
              </button>
            </a>
            <a href="https://wa.me/+5589994042351">
              <button>
                <i className="bi bi-whatsapp"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
