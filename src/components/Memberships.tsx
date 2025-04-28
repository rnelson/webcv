import {Fragment} from "react";
import OptionalLink from "./Helpers.tsx";

export interface OrganizationChildDetails {
    name: string,
    url: string
}

export interface OrganizationDetails {
    name: string,
    url: string,
    children: OrganizationChildDetails[],
}

export interface MembershipList {
    organizations: OrganizationDetails[]
}

const Children = (children?: OrganizationChildDetails[]) => {
    if (children?.length === 0) { return <></>; }

    return (
        <>
            <span> (</span>
            {
                children?.map((child, idx) => {
                    return (
                        <Fragment key={child.name}>
                            <>{OptionalLink(child.name, child.url)}</>
                            {
                                idx < children?.length - 1 && (
                                    <span key={`${child.name}comma`} style={{display: "inline"}}>, </span>
                                )
                            }
                        </Fragment>
                    );
                })
            }
            <span>)</span>
        </>
    );
};

const Education = (memberships: MembershipList) => {
    return (
        <section className="memberships">
            <div className="memberships-header text-4xl pt-4 font-semibold">Memberships</div>
            <div className="memberships-list">
                {
                    memberships.organizations.map(org =>
                        <Fragment key={org.name}>
                            <div className="organization pb-2 pt-2 font-light text-xl/[1.2] lg:text-xl/[0.8]">
                                <>{OptionalLink(org.name, org.url)}</>
                                <>{Children(org.children)}</>
                            </div>
                        </Fragment>
                    )
                }
            </div>
        </section>
    )
};

export default Education;