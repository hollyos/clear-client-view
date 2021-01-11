import React from 'react';
import isEqual from 'lodash/isEqual';

import { Axios } from '../utils/axiosUtils';
import organizationsData from '../data/organizations';

const OrganizationContext = React.createContext();

export const OrganizationProvider = ({ children, ...rest }) => {
    const [organizations, setOrganizations] = React.useState(organizationsData || []);

    /**
     * Fetch all organizations from the /organizations endpoint of the v1 API.
     *
     * @async
     * @private
     */
    const fetchAllOrganizations = async () => {
        try {
            const endpoint = '/organizations';
            let newOrganizations = organizations;

            const apiOrganizations = await Axios.get(endpoint);
            newOrganizations = { ...apiOrganizations.data };

            if (!isEqual(newOrganizations, organizations)) {
                setOrganizations(newOrganizations);
            }
        } catch (error) {
            console.error(error);

            const newOrganizations = [...organizationsData];

            if (!isEqual(newOrganizations, organizations)) {
                setOrganizations(newOrganizations);
            }
        }
    };

    React.useEffect(() => {
        fetchAllOrganizations();
    }, []);

    return (
        <OrganizationContext.Provider value={{
            organizations,
            setOrganizations,
        }} {...rest} >
            {children}
        </OrganizationContext.Provider>
    );
};

export default OrganizationContext;