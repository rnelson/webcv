import cvJson from "./assets/cv.json";
import {JobDetails, JobList} from "./components/Job.tsx";
import {SkillDetails, SkillList} from "./components/Skill.tsx";
import {SchoolDetails, SchoolList} from "./components/Education.tsx";
import {MembershipList, OrganizationDetails} from "./components/Memberships.tsx";

export interface CVData {
    downloadLink: string,
    jobs: JobList,
    memberships: MembershipList,
    person: PersonData,
    schools: SchoolList,
    skills: SkillList,
    summary: string
}

export interface WebLinkData {
    fakey: string,
    url: string
}

export interface LinkData {
    linkedin: string,
    github: string,
    web: WebLinkData
}

export interface PersonData {
    email: string | undefined,
    image: string | undefined,
    links: LinkData,
    location: string,
    name: string,
    phone: string | undefined,
    title: string
}

const Data = () => {
    return {
        downloadLink: cvJson.downloadLink,
        jobs: {jobs: [...cvJson.jobs as JobDetails[]]},
        memberships: {organizations: [...cvJson.memberships as OrganizationDetails[]]},
        person: {...cvJson.person as PersonData, links: {...cvJson.person.links as LinkData}},
        schools: {schools: [...cvJson.education as SchoolDetails[]]},
        skills: {skills: [...cvJson.skills as SkillDetails[]]},
        summary: cvJson.summary
    }
};

export default Data;
