import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Container } from '../../components/Container';
import { ListTab } from '../../components/ListTab';
import { idState } from '../../recoil/id/id';
import Information from '../Information';
import { Header } from '../SignIn/SignIn.styled';
import { GroupMemberCount, GroupName, ListBox } from './List.styled';

const List = () => {
    const params = useParams();
    const [data, setData] = useState(null);
    const id = useRecoilValue(idState);
    useEffect(() => {
        axios('/api/detail')
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <Container>
            <Header>안녕하세요 {id.id}님!</Header>
            {params.name ? (
                <Information />
            ) : (
                <ListBox>
                    {data ? (
                        <Link to={`./1`}>
                            <ListTab>
                                <GroupName>{data.clubName}</GroupName>
                                <GroupMemberCount>
                                    {data.currentCount} / 20
                                </GroupMemberCount>
                            </ListTab>
                        </Link>
                    ) : null}
                    {/* {data.map((item, index) => (
                    ))} */}
                </ListBox>
            )}
        </Container>
    );
};

export default List;
