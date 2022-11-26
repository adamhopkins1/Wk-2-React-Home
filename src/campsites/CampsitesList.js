import { Col, Row, } from 'reactstrap';
import CampsiteCard from '../campsites/CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';

const isLoading = useSelector((state) => state.campsites.isLoading);
const errMsg = useSelector((state) => state.campsites.errMsg);

if (isLoading) {
    return (
        <Row>
            <Loading />
        </Row>
    );
}

if (errMsg) {
    return (
        <Row>
            <Error errMsg={errMsg} />
        </Row>
    );
}

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