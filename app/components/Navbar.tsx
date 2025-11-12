import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

interface NavbarProps {
  hideBookButton?: boolean;
}

export default function Navbar({ hideBookButton = false }: NavbarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        borderBottomColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <Container style={{ paddingTop: "16px", paddingBottom: "16px" }}>
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 p-1 cursor-pointer">
            <Image
              src="/logo-icon.svg"
              alt="Beezi Logo"
              width={25}
              height={25}
              priority
            />
            <Image
              src="/logo-text.svg"
              alt="Beezi"
              width={55}
              height={16}
              priority
            />
          </Link>

          {/* Actions */}
          {!hideBookButton && (
            <div className="flex items-center justify-end">
              <Link href="/book-a-demo">
                <button
                  className="px-5 py-2 bg-white rounded-lg border transition-all hover:shadow-md"
                  style={{
                    borderColor: "#E5E5E5",
                    color: "#0A0A0A",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "1.5em",
                    boxShadow: "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  Book a demo
                </button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
}
