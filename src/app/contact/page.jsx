import { SubmitForm } from "@/components/ui";

export default function Contact() {
   return (
      <section className="section-boilerplate">

         <h3 className="page-title">Contact me!</h3>

         <SubmitForm
            namePlaceholder="Name/Nickname"
            sourcePlaceholder="Your Phone or Email"
            messagePlaceholder="Message"
            formAction="https://getform.io/f/qalorweb"
            buttonText="Get In Touch"
            paragraphText="( or through socials below )"
         />

      </section>
   );
}