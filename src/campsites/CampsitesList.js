import { Col, Row, } from 'reactstrap';
import CampsiteCard from '../campsites/CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';


const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);
    return (     
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col
                     md='12'
                    className='m-4'
                     key={campsite.id} 
                     >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>  
    );
};

export default CampsitesList;