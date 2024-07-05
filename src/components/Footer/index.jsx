import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="text-center text-md sm:text-lg text-slate-600 py-5 border-t-2 sm:mx-3 lg:mx-0 dark:text-neutral-300 max-md:mb-12">
      <h3>Links</h3>
      <SocialLinks />
      <h3>Made with &#9829; by Jarvis</h3>
    </footer>
  );
}