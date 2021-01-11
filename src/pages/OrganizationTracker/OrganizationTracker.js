import React from 'react';
import { v4 as uuid } from 'uuid';

import MemberContext from '../../contexts/MemberContext';
import OrganizationContext from '../../contexts/OrganizationContext';

const OrganizationTracker = (props) => {
  const { members } = React.useContext(MemberContext);
  const { organizations } = React.useContext(OrganizationContext);

  return (
    <article {...props}>
      <header>
        <h2>Clients</h2>
      </header>

      <section>
        <ul>
          {organizations.map((org) => {
            const orgMembers = members
              .filter((member) => member.organization_id
              .replace('organization_id ', '') === org.id)
              .sort((a, b) => {
                var textA = a.title.toUpperCase();
                var textB = b.title.toUpperCase();

                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
              });

            return (
              <li key={uuid()}>
                <h3>{org.name}</h3>
                <p>{(org.is_public) ? 'Public' : 'Private'}</p>
                <p>Headcount: {org.headcount}</p>

                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Title</th>
                      <th>Phone</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orgMembers.map((member) => (
                      <tr key={uuid()}>
                        <td>{member.name}</td>
                        <td>{member.title}</td>
                        <td>{member.phone_number}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default OrganizationTracker;