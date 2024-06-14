import { socialMedia } from "../app/_data/personal";

export default function Footer() {
  return (
    <footer className="text-center text-md sm:text-lg text-slate-600 py-5 border-t-2 sm:mx-3 lg:mx-0 dark:text-neutral-300 max-md:mb-12">

      <h3>Links</h3>

      <div className="flex justify-center text-2xl py-1 gap-4 py-4">
        {socialMedia.map((socials, index) => (
          <div className="group relative inline-block" key={index}>
            <a
              href={socials.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socials.name}
            >
              <socials.icon className="footer-icon" />
            </a>
            <div
              className="absolute hidden group-hover:block z-10 whitespace-no-wrap bg-black text-white text-sm font-normal px-2 py-1 rounded shadow-lg"
              style={{ bottom: '100%', left: '50%', transform: 'translateX(-50%)' }}
              role="tooltip"
            >
              {socials.name}
            </div>
          </div>
        ))}

      </div>

      <h3>Made with {'<3'} by Jarvis</h3>
    </footer>
  );
}
