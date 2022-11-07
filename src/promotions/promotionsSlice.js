import { PROMOTIONS } from "../components/PROMOTIONS";


export const selectFeaturedPromotions = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
}