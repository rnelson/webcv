import {CVData, PersonData} from "../Data.tsx";

function Header(data: CVData) {
    const person: PersonData = data.person;

    return (
        <header className="text-center font-thin text-zinc-900 dark:text-zinc-300">
            <div className="text-9xl/[1.2]">{person.name}</div>
            <div>
                <span className="text-2xl/[1.6] font-medium">{person.title}</span>
                <span className="text-2xl/[1.6] font-light"> in </span>
                <span className="text-2xl/[1.6] font-medium">{person.location}</span>
            </div>
            {person.image?.length && (
                <div className="flex justify-center">
                    <img
                        id="profile-picture"
                        className="max-w-[250px] m-2 rounded-full"
                        src={person.image}
                        alt={`Profile picture of ${person.name}`} />
                </div>
            )}
            <div className="grid grid-cols-4 m-2">
                <div className="col-start-2 col-span-2 flex justify-center text-xl/[1.6] font-light">{data.summary}</div>
            </div>
        </header>
    )
}

export default Header;
