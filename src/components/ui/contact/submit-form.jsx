import SubmitButton from "./submit-button";

const SubmitForm = (
   {
      namePlaceholder,
      sourcePlaceholder,
      messagePlaceholder,
      formAction,
      buttonText,
      paragraphText
   }
) => {
   return (
      <div className="flex flex-col mx-auto">
         <div className="flex justify-center items-center mt-4 mb-6">
            <form
               action={formAction}
               method="POST"
               className="flex flex-col w-full md:w-7/12 text-white"
            >
               <input
                  type="text"
                  name="name"
                  placeholder={namePlaceholder}
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="source"
                  required
                  placeholder={sourcePlaceholder}
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder={messagePlaceholder}
                  rows="10"
                  required
                  className="resize-none p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <div className="flex items-center gap-8 text-neutral-500">
                  <SubmitButton>
                     {buttonText}
                  </SubmitButton>
                  <p>{paragraphText}</p>
               </div>
            </form>
         </div>
      </div>
   );
};

export default SubmitForm;