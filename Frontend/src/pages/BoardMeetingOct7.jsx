import { Link } from 'react-router-dom'

export default function BoardMeetingOct7() {
    return (
        <section style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container" style={{ maxWidth: '820px' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '2rem' }}>
                    ← Back to Home
                </Link>

                <span className="section-label">Event</span>
                <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Special Board Meeting – October 7th at 6:00 PM</h2>
                <div className="announcement-date" style={{ marginBottom: '2rem' }}>📌 September 23, 2026</div>

                <div style={{
                    background: 'var(--color-card-bg)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-md)',
                    padding: '2.5rem',
                    lineHeight: '1.85',
                    color: 'var(--color-text)',
                    fontSize: '0.97rem'
                }}>
                    <p style={{ marginBottom: '1rem' }}>
                        Putteet Hill Homeowners,
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        The Putteet Hill HOA Board of Directors will hold a <strong>Special Board Meeting on Wednesday, October 7, 2026, at 6:00 PM</strong> at:
                    </p>
                    <div style={{
                        background: 'rgba(26, 86, 50, 0.05)',
                        borderLeft: '4px solid var(--color-primary)',
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '1.25rem'
                    }}>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)' }}>United Cooperative Services</strong><br />
                        Granbury, Texas
                    </div>
                    <p style={{ marginBottom: '1.25rem' }}>
                        The purpose of this meeting is to address several important Association matters and provide updates regarding ongoing community issues.
                    </p>

                    <h3 style={{ color: 'var(--color-primary-dark)', margin: '1.75rem 0 0.5rem' }}>Meeting Attendance</h3>
                    <p style={{ marginBottom: '0.75rem' }}>
                        This is a meeting of the Putteet Hill HOA Board of Directors. The open portion of the meeting is intended for <strong>Putteet Hill homeowners/property owners</strong>.
                    </p>
                    <p style={{ marginBottom: '0.75rem' }}>
                        Residents who are not property owners, general contractors, subcontractors, vendors, service providers, and other guests may attend <strong>by invitation of the Board</strong> when their attendance is relevant to Association business.
                    </p>
                    <p style={{ marginBottom: '1.25rem' }}>
                        The Board may enter executive session when permitted by the Association's governing documents and applicable law.
                    </p>

                    <h3 style={{ color: 'var(--color-primary-dark)', margin: '1.75rem 0 0.5rem' }}>Documents Before the Meeting</h3>
                    <p style={{ marginBottom: '0.5rem' }}>
                        Prior to the meeting, the Board will send an additional email containing relevant documents and attachments for homeowners to review in advance. These are expected to include:
                    </p>
                    <ul style={{ margin: '0.5rem 0 1rem 1.5rem' }}>
                        <li>Current Association financial information</li>
                        <li>Spectrum's proposal regarding access/service within Putteet Hill</li>
                        <li>Proposed Fee and Fine Schedule</li>
                        <li>Proposed Board and ACC Code of Conduct</li>
                        <li>Gran Country (John Hall) information regarding third-party ACC review services, if available</li>
                        <li>Other documents or proposals relevant to the noticed agenda</li>
                    </ul>
                    <p style={{ marginBottom: '1.25rem' }}>
                        Our goal is to give homeowners an opportunity to review the information before the meeting rather than seeing it for the first time during Board discussion.
                    </p>

                    <h3 style={{ color: 'var(--color-primary-dark)', margin: '1.75rem 0 0.5rem' }}>Opportunity to Submit Agenda Items</h3>
                    <p style={{ marginBottom: '0.75rem' }}>
                        Please also consider this email an opportunity to submit matters that you believe should be considered for inclusion on the October 7 agenda.
                    </p>
                    <p style={{ marginBottom: '0.75rem' }}>
                        If there is an Association matter you would like the Board to consider, please respond to this email with the requested topic and any relevant information. The Board will review submissions and determine whether an item should be included on the final agenda or addressed at a future meeting.
                    </p>
                    <p style={{ marginBottom: '1.25rem', fontStyle: 'italic', color: 'var(--color-text-light)' }}>
                        Submitting a requested item does not automatically place it on the agenda.
                    </p>

                    <hr style={{ margin: '2rem 0', borderColor: 'var(--color-border)' }} />

                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1.25rem', fontSize: '1.3rem' }}>Preliminary Agenda</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <strong>1. Call to Order and Establishment of Quorum</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>Call the meeting to order and confirm a quorum of the three-member Board.</p>
                        </div>

                        <div>
                            <strong>2. Adoption of Association Fee and Fine Schedule</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Discussion and possible action regarding adoption of a uniform Association fee and fine schedule.</p>
                            <p style={{ margin: '0 0 0.5rem' }}>The proposed schedule includes a construction-hours provision establishing permitted construction hours of <strong>7:00 AM–5:00 PM, Monday through Saturday</strong>, unless an alternate schedule has been approved in advance by the ACC.</p>
                            <p style={{ margin: '0' }}>Following applicable warning, notice, cure, hearing, or other procedures required by the governing documents and applicable law, subsequent violations of approved construction hours may result in a proposed <strong>$200 fine per occurrence</strong>.</p>
                        </div>

                        <div>
                            <strong>3. Adoption of Board and ACC Code of Conduct</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Discussion and possible action regarding adoption of standards applicable to members of the Board of Directors and Architectural Control Committee.</p>
                            <p style={{ margin: '0 0 0.5rem' }}>The proposed Code addresses professionalism, respectful treatment of homeowners and residents, confidentiality and privacy, conflicts of interest, public and social-media communications, consistent enforcement, and appropriate representation of Association decisions.</p>
                            <p style={{ margin: '0' }}>Board and ACC members should be part of the solution and should not contribute unnecessarily to conflict within the community. Individual homeowner compliance matters should be handled through the Association's established processes and should not be publicly discussed by Directors or ACC members on Facebook, social media, or other public platforms.</p>
                        </div>

                        <div>
                            <strong>4. Association Financial Status</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>Review and discussion of the Association's current financial position, including account balances, current and anticipated expenses, outstanding obligations, projected year-end financial position, and anticipated 2027 operating needs.</p>
                        </div>

                        <div>
                            <strong>5. 2027 Annual Assessment – $1,300</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>Discussion and possible action regarding establishment of the annual Association assessment at <strong>$1,300 per lot</strong> for the upcoming assessment year, subject to the governing documents and applicable law.</p>
                        </div>

                        <div>
                            <strong>6. Third-Party ACC Review Services – Gran Country (John Hall)</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Discussion and possible action regarding engagement of <strong>Gran Country (John Hall)</strong> to provide professional third-party architectural plan review and ACC support.</p>
                            <p style={{ margin: '0' }}>The Board will also consider corresponding adjustments to ACC application and review fees, including a proposal to double applicable ACC fees to help offset the cost of professional third-party review.</p>
                        </div>

                        <div>
                            <strong>7. Association Bank Account – Authorized Signatories</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>Discussion and possible action to remove Teena as an authorized signer/account representative and designate a 2nd Board Member as an authorized signer/account representative, together with authorization of any related banking documentation.</p>
                        </div>

                        <div>
                            <strong>8. Spectrum Access and Service Proposal</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Discussion and possible action regarding <strong>Spectrum's proposal to provide service/access within Putteet Hill</strong>, including any Association approval that may be necessary concerning access, easements, infrastructure, installation, boring, construction, rights-of-way, or other matters associated with bringing Spectrum service into the community.</p>
                            <p style={{ margin: '0' }}>Spectrum's proposal will be distributed to homeowners for review prior to the meeting.</p>
                        </div>

                        <div>
                            <strong>9. Bookkeeping, Accounting, and Property Transfer Administration</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Discussion regarding the Association's ongoing bookkeeping, accounting, and property-transfer administrative needs.</p>
                            <p style={{ margin: '0' }}>The Board is interested in identifying a qualified resident CPA who may be willing to assist with Association bookkeeping and lot/home transfers, which occur regularly. If an appropriate resident volunteer is not available, the Board will consider contracting with <strong>James Stone</strong> to continue providing some or all of these services following his move from the community.</p>
                        </div>

                        <div>
                            <strong>10. Lata Development – Remaining Dirtwork and Lot 58</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Community update regarding Lata Development's notice that dirtwork on the remaining Putteet Hill lots is expected to resume, excluding Lot 58, commonly referred to as the "cliff lot." The Board will also discuss information concerning Lot 58, potential purchase interest, and the future of the two hill/rock-wall formations.</p>
                            <p style={{ margin: '0 0 0.5rem' }}>Lata Development is offering Lot 58 to the HOA or any resident for $650k. This is a multi-faceted approach from them. By leveling the hill it provides a stable homesite and gives them raw materials to backfill other lots that are sloped in a manner that prevents building a home. This is the reason for the price. They would have to afford several hundred thousand dollars of dirt to make other lots work.</p>
                            <p style={{ margin: '0' }}>The rock formations are not natural formations. These are a product of the 1950s rock quarry. The other large rock wall was recently purchased by a completely different owner. It too will become level in order to build a home.</p>
                        </div>

                        <div>
                            <strong>11. Board of Directors Recruitment</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>The Association is seeking an additional homeowner/property owner interested in serving on the Board of Directors.</p>
                            <p style={{ margin: '0 0 0.25rem' }}>A prospective Director should be willing to:</p>
                            <ul style={{ margin: '0.25rem 0 0.5rem 1.5rem' }}>
                                <li>Review and comply with the Board Code of Conduct</li>
                                <li>Become familiar with the Association's governing documents</li>
                                <li>Computer literacy is highly recommended</li>
                                <li>Exercise sound judgment and professionalism</li>
                                <li>Respond to Association matters in a timely manner</li>
                                <li>Work constructively with fellow Directors, ACC members, and homeowners</li>
                                <li>Represent the interests of the Association membership</li>
                            </ul>
                            <p style={{ margin: '0' }}>Any appointment will be made by the current Board in accordance with the Association's governing documents and applicable law.</p>
                        </div>

                        <div>
                            <strong>12. Emergency Access Gate and Easement</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Community information and discussion concerning the HOA-owned emergency access gate and associated approximately 60-foot-wide easement.</p>
                            <p style={{ margin: '0 0 0.5rem' }}>The gate is intended to provide emergency access/egress when necessary and otherwise is to remain secured by chain and lock.</p>
                            <p style={{ margin: '0' }}>The Board is reviewing the applicable easement documents to ensure that any formal communication regarding access restrictions accurately reflects the recorded property rights and Association authority.</p>
                        </div>

                        <div>
                            <strong>13. Homeowner/Property Owner Comments</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>Opportunity for homeowners/property owners to address the Board, subject to reasonable meeting procedures and time limitations established by the presiding officer.</p>
                        </div>

                        <div>
                            <strong>14. Executive Session, if Necessary</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>The Board may enter executive session to discuss matters permitted to be considered privately under applicable law.</p>
                        </div>

                        <div>
                            <strong>15. Reconvene and Take Any Required Open-Session Action</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>The Board will reconvene in open session and take or summarize any action required to occur in open session.</p>
                        </div>

                        <div>
                            <strong>16. Adjournment</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>The Board appreciates everyone's patience as Putteet Hill continues through a significant period of construction and development. With numerous homes still to be built, there will inevitably be issues that require cooperation among homeowners, builders, contractors, the ACC, and the Board.</p>
                            <p style={{ margin: '0 0 0.5rem' }}>Our objective is to establish clear expectations, improve consistency, communicate openly with homeowners, and address Association business in a professional and constructive manner.</p>
                            <p style={{ margin: '0' }}>We look forward to seeing everyone on October 7.</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                        Putteet Hill HOA Board of Directors
                    </div>
                </div>
            </div>
        </section>
    )
}
