import {Fragment} from "react";
import OptionalLink from "./Helpers.tsx";
import {OrganizationDetails, Children} from "./Memberships.tsx";

export interface VolunteerList {
    organizations: OrganizationDetails[]
}

const Volunteering = (memberships: VolunteerList) => {
    return (
        <section className="volunteering">
            <div className="volunteering-header text-4xl pt-4 font-semibold">Volunteering</div>
            <div className="volunteering-list">
                <ul className="list-disc list-inside">
                    {
                        memberships.organizations.map(org =>
                            <Fragment key={org.name}>
                                <li className="organization pb-2 pt-2 font-light text-xl/[1.2] lg:text-xl/[0.8]">
                                    <>{OptionalLink(org.name, org.url)}</>
                                    <>{Children(org.children)}</>
                                </li>
                            </Fragment>
                        )
                    }
                </ul>
            </div>
        </section>
    )
};

export default Volunteering;