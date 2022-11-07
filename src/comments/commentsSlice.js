import { COMMENTS } from '../components/COMMENTS';

export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};