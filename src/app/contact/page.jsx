import SectionTemplate from "../section";
import { SubmitForm } from "@/components/ui";

export default function Contact() {
  return (
    <SectionTemplate titleText={"Contact me!"}>
      <SubmitForm
        namePlaceholder="Name/Nickname (optional)"
        sourcePlaceholder="Your Phone or Email"
        messagePlaceholder="Message"
        formAction="https://getform.io/f/qalorweb"
        buttonText="Get In Touch"
        paragraphText="( or through socials below )"
      />
    </SectionTemplate>
  );
}
