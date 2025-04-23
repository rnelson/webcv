export interface SchoolDetails {
    school: string,
    startYear: number,
    endYear: number,
    degree: string,
    other: string
}

export interface SchoolList {
    schools: SchoolDetails[]
}

const Education = (schools: SchoolList) => {
    return (
        <section className="educations">
            <div className="education-header text-4xl pt-4 font-semibold">Education</div>
            <div className="education-list">
                {
                    schools.schools.map(school =>
                        <div key={school.degree} className="school pb-2 pt-2 font-light text-xl/[1.2] lg:text-2xl/[1.2]">
                            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-4">
                                <div className="col-span-1 lg:col-span-3">
                                    <div>{school.startYear} <span className="text-xl/[1.2]"> &ndash; </span> {school.endYear}</div>
                                </div>
                                <div className="col-span-1 lg:col-span-9"><span>{school.school}</span></div>
                            </div>
                            <div className="grid grid-cols-1 mt-[-1.25rem] lg:mt-0 lg:grid-cols-12 lg:gap-4">
                                <div className="col-span-1 lg:col-span-3">&nbsp;</div>
                                <div className="col-span-1 lg:col-span-9"><span className="font-medium text-zinc-950 dark:text-zinc-400">{school.degree}</span></div>
                            </div>
                            {school.other?.length && (
                                <div className="grid grid-cols-1 mt-[-1.25rem] lg:mt-0 lg:grid-cols-12 lg:gap-4">
                                    <div className="col-span-1 lg:col-span-3">&nbsp;</div>
                                    <div className="col-span-1 lg:col-span-9"><span className="italic text-lg/[1.2]">{school.other}</span></div>
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
        </section>
    )
};

export default Education