import {Fragment} from "react";

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

const Education = (memberships: MembershipList) => {
    return (
        <section className="memberships">
            <div className="memberships-header text-4xl pt-4 font-semibold">Memberships</div>
            <div className="memberships-list">
                {
                    memberships.organizations.map(org =>
                        <Fragment key={org.name}>
                            <div className="organization pb-2 pt-2 font-light text-xl/[1.2] lg:text-2xl/[1.2]">
                                {org.url?.length && (
                                    <a href={org.url} target="_blank">{org.name}</a>
                                )}
                                {!org.url?.length && (
                                    <span>{org.name}</span>
                                )}
                                {org.children?.length && (
                                    <> (</>
                                )}
                                {org.children?.map((child, idx) => {
                                    return (
                                        <Fragment key={child.name}>
                                            <a key={child.name} href={child.url} target="_blank">{child.name}</a>
                                            {idx < org.children?.length - 1 && (
                                                <span key={`${child.name}comma`} style={{display: "inline"}}>, </span>
                                            )}
                                        </Fragment>
                                    )
                                })}
                                {org.children?.length && (
                                    <>)</>
                                )}
                            </div>
                        </Fragment>
                    )
                }
            </div>
        </section>
    )
}

export default Education;