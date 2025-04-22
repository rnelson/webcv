import { useEffect } from "react";
import Data, {CVData} from "./Data.tsx";
import DarkModeSwitch from "./components/DarkModeSwitch.tsx";
import Header from "./components/Header.tsx";
import Contact from "./components/Contact.tsx";
import Experience from "./components/Job.tsx";
import Skills from "./components/Skill.tsx";
import Education from "./components/Education.tsx";
import Memberships from "./components/Memberships.tsx";

function App() {
    const data: CVData = Data();

    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = data.person.name;
    }, [data.person.name]);

    return (
        <>
            <DarkModeSwitch />
            <Header {...data} />
            <Skills {...data.skills} />
            <Experience {...data.jobs} />
            <Education {...data.schools} />
            <Memberships {...data.memberships} />
            <Contact {...data} />
        </>
    )
}

export default App;
