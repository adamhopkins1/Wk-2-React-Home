import { PARTNERS } from "../components/PARTNERS";
import {useSelector} from 'react-redux';


export const selectAllPartners = () => {
    const partners = useSelector(selectAllPartners);
};



export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
}