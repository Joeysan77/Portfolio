import { Footer, FooterBrand, FooterLink, FooterLinkGroup, FooterDivider, FooterCopyright } from "flowbite-react";

export function PortfolioFooter() {
  return (
    <Footer container className="bg-white text-gray-300">
      <div className="w-full text-center">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center py-6">
          <FooterBrand
            href="/"
            src="/logo2.png"
            alt="JayStack Logo"
            name="JayStack"
          />
          <FooterLinkGroup className="mt-4 sm:mt-0 space-x-4">
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider className="border-gray-700" />
        <FooterCopyright
          href="#"
          by="JayStack"
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
}