import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { idState } from '../../recoil/id/id';
import { Header, Input, LoginBox } from './SignIn.styled';

const SignIn = () => {
    const navigate = useNavigate();
    const settingId = useSetRecoilState(idState);

    const onSubmit = (e) => {
        e.preventDefault();
        settingId({
            id: id,
            password: password,
        });
        navigate('/list');
    };
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <Container>
            <Header>Sign In</Header>
            <Text>아이디와 비밀번호를 입력하세요.</Text>

            <LoginBox onSubmit={onSubmit}>
                <Input value={id} onChange={onChangeId} placeholder='아이디' />
                <Input
                    value={password}
                    placeholder='패스워드'
                    onChange={onChangePassword}
                    type='password'
                />

                <Button>로그인</Button>
            </LoginBox>
        </Container>
    );
};

export default SignIn;
