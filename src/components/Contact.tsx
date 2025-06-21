import {CVData} from "../Data.tsx";
import PdfResume from "./PdfResume.tsx";
import {PDFDownloadLink} from "@react-pdf/renderer";

const Contact = (cvData: CVData) => {
    const data = cvData.person;

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
                <div className="contact-link pb-6 pe-6">
                    <PDFDownloadLink document={<PdfResume />} fileName="RossNelson.pdf">
                        { params =>
                            params.loading ? '' : (<i className="fa-light fa-file-pdf"></i>)
                        }
                    </PDFDownloadLink>
                </div>
            </div>
        </section>
    )
};

export default Contact;