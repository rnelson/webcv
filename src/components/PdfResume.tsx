import {SkillList} from "./Skill.tsx";
import {Text, Link, View, StyleSheet, Page, Document, Font} from '@react-pdf/renderer';
import Data, {WebLinkData} from "../Data.tsx";
import {JobList} from "./Job.tsx";
import {Fragment} from "react";
import {SchoolDetails, SchoolList} from "./Education.tsx";
import {MembershipList, OrganizationChildDetails} from "./Memberships.tsx";

Font.register({
    family: "ABeeZee",
    src: "https://fonts.gstatic.com/s/abeezee/v9/JYPhMn-3Xw-JGuyB-fEdNA.ttf",
    fontStyle: "normal",
    fontWeight: 400
});

Font.register({
    family: "Open Sans",
    src: "https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf",
    fontStyle: "normal",
    fontWeight: 400
});

const PdfStyle = StyleSheet.create({
    document: {
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 7,
        marginRight: 7,
        fontFamily: ["Helvetica", "Open Sans", "ABeeZee", "Times-Roman"],
        fontSize: 10,
        fontWeight: "normal"
    },
    bold: {
        fontWeight: "bold",
        display: "flex"
    },
    italic: {
        fontFamily: "Helvetica-Oblique",
        display: "flex"
    },
    sectionHeader: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 14,
        fontFamily: "Helvetica-Bold",
        fontWeight: "semibold",
    },
    spacing: {
        marginTop: 7
    },
    indentedBullet: {
        marginLeft: 16,
        marginRight: 25
    },
    indentedBulletText: {
        marginLeft: 20,
    }
});

const OptionalPdfLink = (text: string, url?: string) => {
    if (url === undefined || url.length === 0) {
        return <Text>{text}</Text>
    } else {
        return <Text><Link key={text} src={url}>{text}</Link></Text>
    }
};

const CommaSeparatedLinks = (links: WebLinkData[]) => {
    if (links?.length === 0) { return <></>; }

    return (
        <>
            {
                links?.map((child, idx) => {
                    return (
                        <Fragment key={child.text}>
                            <><Link src={child.url}>{child.text}</Link></>
                            {
                                idx < links?.length - 1 && (
                                    <Text>, </Text>
                                )
                            }
                        </Fragment>
                    );
                })
            }
        </>
    );
};

const MembershipChildren = (children?: OrganizationChildDetails[]) => {
    if (children?.length === 0) { return <></>; }

    return (
        <>
            <Text>
                <Text> (</Text>
                {
                    children?.map((child, idx) => {
                        return (
                            <Fragment key={child.name}>
                                <>{OptionalPdfLink(child.name, child.url)}</>
                                {
                                    idx < children?.length - 1 && (
                                        <Text>, </Text>
                                    )
                                }
                            </Fragment>
                        );
                    })
                }
                <Text>)</Text>
            </Text>
        </>
    );
};

const PdfResume = () => {
    const data = Data();
    const person = data.person;
    const skills = data.skills as SkillList;
    const jobs = data.jobs as JobList;
    const schools = data.schools as SchoolList;
    const memberships = data.memberships as MembershipList;

    const links: WebLinkData[] = [];
    if (person.links.github?.length)
        links.push({
            url: `https://github.com/${person.links.github}`,
            text: "GitHub"
        });
    if (person.links.linkedin?.length)
        links.push({
            url: `https://www.linkedin.com/in/${person.links.linkedin}`,
            text: "LinkedIn"
        });
    if (person.links.web?.url?.length)
        links.push({
            url: person.links.web.url,
            text: "Website"
        });

    return (
        <Document title="Resume - Ross Nelson" author="Ross Nelson" language="en">
            <Page size="LETTER" style={[PdfStyle.document]}>
                <View>
                    <Text>{person.name}</Text>
                    <Text>{person.location}</Text>
                    <Text>{CommaSeparatedLinks(links)}</Text>
                </View>

                <View>
                    <Text style={[PdfStyle.sectionHeader]}>Summary Statement</Text>
                    <Text>{data.summary}</Text>
                </View>

                <View>
                    <Text style={[PdfStyle.sectionHeader]}>Skills</Text>
                    {
                        skills.skills.map(skill =>
                            <Text key={skill.name}>
                                <Text style={[PdfStyle.bold]}>• {skill.name}: </Text>
                                {skill.list ? skill.items.join(", ") : skill.items}
                            </Text>
                        )
                    }
                </View>

                <View>
                    <Text style={[PdfStyle.sectionHeader]}>Experience</Text>
                    {
                        jobs.jobs.map(job =>
                            <Fragment key={job.endDate}>
                                <View>
                                    <Text><Text style={[PdfStyle.bold]}>{job.company}, {job.companyLocation}</Text> - <Text style={[PdfStyle.italic]}>{job.title}</Text></Text>
                                    <Text>{job.startDate} - {job.endDate}</Text>

                                    <View>
                                        {
                                            job.details.map(detail =>
                                                <Text key={detail} style={[PdfStyle.indentedBullet]}>
                                                    <Text style={[PdfStyle.bold]}>• </Text>
                                                    <Text style={[PdfStyle.indentedBulletText]}>{detail}</Text>
                                                </Text>
                                            )
                                        }
                                    </View>
                                </View>

                                <View style={[PdfStyle.spacing]} />
                            </Fragment>
                        )
                    }
                </View>

                <View>
                    <Text style={[PdfStyle.sectionHeader]}>Education</Text>
                    {
                        schools.schools.map((school: SchoolDetails) =>
                            <Fragment key={school.degree}>
                                <View>
                                    <Text>
                                        <Text style={[PdfStyle.bold]}>{school.school}</Text>
                                        <Text style={[PdfStyle.italic]}> ({school.startYear} - {school.endYear})</Text>
                                    </Text>
                                    <Text>{school.degree}</Text>
                                    <Text>
                                        {
                                            school.other?.length && (
                                                <Text style={[PdfStyle.italic]}>{school.other}</Text>
                                            )
                                        }
                                    </Text>
                                </View>
                                <View style={[PdfStyle.spacing]} />
                            </Fragment>
                        )
                    }
                </View>

                <View>
                    <Text style={[PdfStyle.sectionHeader]}>Memberships</Text>
                    {
                        memberships.organizations.map(org =>
                            <Fragment key={org.name}>
                                <div className="organization pb-2 pt-2 font-light text-xl/[0.7] lg:text-xl/[0.8]">
                                    <Text>
                                        {OptionalPdfLink(org.name, org.url)}
                                        {MembershipChildren(org.children)}
                                    </Text>
                                </div>
                            </Fragment>
                        )
                    }
                </View>
            </Page>
        </Document>
    );
};

export default PdfResume;