import { socialMedia } from "@/data";

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 justify-center items-center text-lg mb-2">
      {socialMedia.map((social, index) => (
        <a
          href={social.link}
          className="h-8 flex items-center gap-2 text-sm"
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          <social.icon className="" /> <p className="">{social.name}</p>
        </a>
      ))}
    </div>
  );
}