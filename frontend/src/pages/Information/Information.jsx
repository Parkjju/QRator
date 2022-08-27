import { useParams } from 'react-router-dom';
import { Img } from './Information.style';
import Lion from '../../assets/lion.png';
import { Container } from '../../components/Container';
import { Camera, CameraBox } from '../Entrance/Entrance.styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jsQR from 'jsqr';

const Information = () => {
    const [qr, setQr] = useState(false);
    useEffect(() => {
        axios
            .get(
                `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://localhost:8080/api/enter`
            )
            .then((response) => {
                console.log(response);
            });
    }, []);

    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Img src={Lion} />

            <div
                style={{
                    margin: '0 auto',
                    marginBottom: '10px',
                    lineHeight: '1.5',
                    width: '80%',
                }}
            >
                <p style={{ textAlign: 'center' }}>
                    "내 아이디어를 내 손으로 실현한다, HACK YOUR LIFE!"
                    멋쟁이사자처럼 대학은 온라인 기반의 강의와 오프 라인 활동이
                    함께 이루어지는 코딩 교육 동아리입니 다. 이를 통해 컴퓨터를
                    모르는 학생들이 프로그래밍 교 육을 통해 원하는 IT서비스를
                    직접 런칭합니다.
                </p>
            </div>

            <p style={{ margin: '0 auto', marginBottom: 20 }}>010-1234-5678</p>

            <CameraBox style={{ margin: '0 auto', marginBottom: 20 }}>
                <span
                    style={{ margin: '0 auto', position: 'absolute' }}
                    class='material-symbols-outlined'
                >
                    photo_camera
                </span>
                <Camera type='file' accept='image/*' capture='camera' />
            </CameraBox>

            <Img
                src={
                    'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://localhost:8080/api/enter'
                }
            />
        </Container>
    );
};

export default Information;
