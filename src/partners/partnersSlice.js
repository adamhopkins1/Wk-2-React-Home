import { PARTNERS } from "../components/PARTNERS";


export const selectAllPartners = () => {
    return PARTNERS;
};



export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
}