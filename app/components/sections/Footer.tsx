import Container from "../Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-20">
      <Container>
        <div className="flex flex-col items-center gap-12 w-full">
          {/* Top Section - Logo and Tagline */}
          <div className="flex flex-col items-center gap-12 w-full">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/beezi-logo-footer.svg"
                alt="Beezi Logo"
                width={480}
                height={164}
                style={{ width: "480px", height: "164px" }}
              />
              <p className="text-sm text-white/80 leading-normal text-center md:text-left">
                Delegate the tedious work, accelerate delivery, improve code
                quality, and unlock measurable savings
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Links */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Email */}
                <a
                  href="mailto:hello@beezi.ai"
                  className="flex items-center gap-3 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/email-icon.svg"
                    alt="Email"
                    width={28}
                    height={28}
                    className="opacity-80"
                  />
                  <span className="text-2xl font-medium text-[#FAFAFA] leading-none">
                    hello@beezi.ai
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+18325776946"
                  className="flex items-center gap-3 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/phone-icon.svg"
                    alt="Phone"
                    width={28}
                    height={28}
                    className="opacity-80"
                  />
                  <span className="text-2xl font-medium text-[#FAFAFA] leading-none">
                    +1-832-577-6946
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/12" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-6">
            {/* Copyright */}
            <p className="text-sm text-[#FAFAFA] leading-normal text-center md:text-left">
              Copyright © 2025 beezi.ai. All rights reserved.
            </p>

            {/* Footer Links */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <a
                href="#"
                className="text-sm text-[#FAFAFA] leading-normal underline hover:opacity-80 transition-opacity"
              >
                Privacy Policy
              </a>
              <a
                href="https://beezi.ai/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#FAFAFA] leading-normal underline hover:opacity-80 transition-opacity"
              >
                Terms and Conditions
              </a>
              <a
                href="#"
                className="text-sm text-[#FAFAFA] leading-normal underline hover:opacity-80 transition-opacity"
              >
                Manage Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
