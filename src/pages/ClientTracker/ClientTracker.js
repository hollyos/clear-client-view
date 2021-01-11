import React from 'react';
import { v4 as uuid } from 'uuid';

import MemberContext from '../../contexts/MemberContext';
import OrganizationContext from '../../contexts/OrganizationContext';

const ClientTracker = (props) => {
  const { members } = React.useContext(MemberContext);
  const { organizations } = React.useContext(OrganizationContext);

  return (
    <article {...props}>
      <header>
        <h2>Clients</h2>
      </header>

      <section>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Organization</th>
              <th>Title</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => {
              const organization = organizations.find((organization) => {
                const memberOrgId = member.organization_id.replace('organization_id ', '').toString();

                return memberOrgId === organization.id
              });

              return (
                <tr key={uuid()}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.created_at}</td>
                  <td>{organization?.name}</td>
                  <td>{member.title}</td>
                  <td>{member.phone_number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </article>
  );
};

export default ClientTracker;