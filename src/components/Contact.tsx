import {CVData} from "../Data.tsx";

const Contact = (cvData: CVData) => {
    const data = cvData.person;
    const downloadLink = cvData.downloadLink;

    return (
        <section id="contact" className="pt-8">
            <div className="flex justify-center-safe text-5xl">
                {data.links.github?.length && (
                    <div className="contact-link pb-6 pe-6">
                        <a href={`https://github.com/${data.links.github}`} target="_new"><i className="fa-brands fa-github"></i></a>
                    </div>
                )}
                {data.links.linkedin?.length && (
                    <div className="contact-link pb-6 pe-6">
                        <a href={`https://www.linkedin.com/in/${data.links.linkedin}`} target="_new"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                )}
                {data.links.web?.fakey?.length && data.links.web?.url?.length && (
                    <div className="contact-link pb-6 pe-6">
                        <a href={data.links.web.url} target="_new"><i className={data.links.web.fakey}></i></a>
                    </div>
                )}
                {downloadLink?.length && (
                    <div className="contact-link pb-6 pe-6">
                        <a href={downloadLink} target="_new"><i className="fa-light fa-file-pdf"></i></a>
                    </div>
                )}
            </div>
        </section>
    )
};

export default Contact;