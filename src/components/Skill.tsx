export interface SkillDetails {
    fakey: string,
    name: string,
    list: boolean,
    items: string[]
}

export interface SkillList {
    skills: SkillDetails[]
}

function Skills(skills: SkillList) {
    return (
        <section id="skills">
            <div className="container grid p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                    {
                        skills.skills.map(skill =>
                            <article key={skill.name} className="skill bg-zinc-300 text-zinc-800 dark:bg-zinc-200 dark:text-zinc-800 rounded-3xl p-4 text-md lg:text-2xl justify-center">
                                    <div className="skill-header">
                                        {skill.fakey?.length && (
                                            <i className={`text-sky-400 dark:text-sky-500 text-md lg:text-3xl pe-2 fa-thin ${skill.fakey}`}></i>
                                        )}
                                        <span className="skill-name font-medium">{skill.name}:</span>
                                    </div>
                                    <div className="skill-body">
                                        <div className="skill-items font-light">
                                            {skill.list ? skill.items.join(", ") : skill.items}
                                        </div>
                                    </div>
                            </article>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills;