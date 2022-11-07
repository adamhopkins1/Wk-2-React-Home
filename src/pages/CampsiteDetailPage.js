import {Container, Row} from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../campsites/campsitesSlice';
import CampsiteDetail from '../campsites/CampsiteDetail';
import CommentsList from '../comments/CommentList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () =>{
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <SubHeader current ={campsite.name} detail={true}/>
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsite.id}/>
            </Row>
        </Container>
    )
};

export default CampsiteDetailPage;