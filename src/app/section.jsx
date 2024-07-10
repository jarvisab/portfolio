import PageTitle from "@/components/PageTitle";

export default function SectionTemplate({ titleText, children }) {

    return (
        <section className="section-boilerplate">
            
            <PageTitle>{titleText}</PageTitle>

            {children}

        </section>
    );
}
