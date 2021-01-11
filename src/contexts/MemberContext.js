import React from 'react';
import isEqual from 'lodash/isEqual';

import { Axios } from '../utils/axiosUtils';
import memberData from '../data/members';
import OrganizationContext from '../contexts/OrganizationContext';

const MemberContext = React.createContext();

export const MemberProvider = ({ children, ...rest }) => {
    const { organizations } = React.useContext(OrganizationContext);

    const [members, setMembers] = React.useState(memberData || []);
    const [activeMember, setActiveMember] = React.useState({});

    /**
     * Fetch all members from the /members endpoint of the v1 API.
     *
     * @async
     * @private
     */
    const fetchAllMembers = async () => {
        try {
            const endpoint = '/members';
            let newMembers = members;

            const apiMembers = await Axios.get(endpoint);
            newMembers = { ...apiMembers.data };

            if (!isEqual(newMembers, members)) {
                setMembers(newMembers);
            }
        } catch (error) {
            console.error(error);

            const newMembers = [...memberData];

            if (!isEqual(newMembers, members)) {
                setMembers(newMembers);
            }
        }
    };

    React.useEffect(() => {
        fetchAllMembers();
    }, []);

    return (
        <MemberContext.Provider value={{
            activeMember,
            setActiveMember,
            members,
            setMembers,
        }} {...rest} >
            {children}
        </MemberContext.Provider>
    );
};

export default MemberContext;