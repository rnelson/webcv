export interface JobDetails {
    startDate: string,
    endDate: string,
    company: string,
    companyLocation: string,
    title: string,
    details: string[],
}

export interface JobList {
    jobs: JobDetails[]
}

const Job = (job: JobDetails) => {
    return (
        <div className="job pb-3 lg:pb-2 pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-4">
                <div className="lg:col-span-12 font-normal dark:font-light text-2xl lg:text-2xl/[0.5] lg:pt-2">
                    {job.title}
                </div>
                <div className="lg:col-span-12 font-medium text-zinc-900 dark:text-zinc-400 pt-2 lg:pt-0 lg:mt-[-0.25rem]">
                    {job.company}
                </div>
                <div className="lg:col-span-2 font-normal text-zinc-900 dark:text-zinc-400 lg:mt-[-0.75rem]">
                    <i className="fa-regular fa-calendar-range pe-2"></i>
                    {job.startDate} <span className="text-xl/[1.2]"> &ndash; </span> {job.endDate}
                </div>
                <div className="lg:col-span-4 font-normal text-zinc-900 dark:text-zinc-400 lg:mt-[-0.75rem]">
                    <i className="fa-regular fa-location-dot pe-1"></i>
                    {job.companyLocation}
                </div>
                <div className="lg:col-span-6 lg:mt-[-0.75rem]">&nbsp;</div>
            </div>
            <div className="flex flex-row mt-[-1.25rem] lg:mt-0 lg:pt-2">
                <div className="basis-0 lg:basis-6">&nbsp;</div>
                <div className="basis-auto">
                    <ul className="job-details list-disc list-inside">
                        {
                            job.details.map(detail =>
                                <li key={detail} className="job-detail font-light text-lg/[1.4] pl-4">{detail}</li>
                            )
                        }
                    </ul>
                </div>
                <div className="basis-0 lg:basis-[50px]">&nbsp;</div>
            </div>
        </div>
    )
};

const Experience = ({jobs}: JobList) => {
    return (
        <section id="experience">
            <div className="experience-header text-4xl pt-4 font-semibold">Experience</div>
            <div className="experience-list pt-4">
                {
                    jobs.map(job =>
                        <Job key={job.endDate} {...job}/>)
                }
            </div>
        </section>
    )
};

export default Experience;