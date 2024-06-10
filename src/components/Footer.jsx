import { socialMedia } from "../app/_data/personal";

export default function Footer() {
  return (
    <footer className="text-center text-md sm:text-lg text-slate-600 py-5 border-t-2 sm:mx-3 lg:mx-0 dark:text-neutral-300 max-md:mb-12">

      <h3>Links</h3>

      <div className="flex justify-center text-lg py-1 gap-4 py-4">
        {socialMedia.map((socials, index) => (
          <a
            href={socials.link}
            className="footer-icon-hover"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <socials.icon className="footer-icon" />
          </a>
        ))}
      </div>

      <h3>Made with {'<3'} by Jarvis</h3>
    </footer>
  );
}
