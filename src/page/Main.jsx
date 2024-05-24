import styled from "styled-components";
import './Main.css';

const Wraaper = styled.div`
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    padding-left: 4.75rem;
    padding-right: 4.75rem;
    background-color: black;
    box-sizing: border-box;
`;
const Title = styled.div`
    width: 100%;
    color: #B4EDFF;
    padding-top: 3.56rem;
    font-size: 32px;
`;
const Line = styled.hr`
    margin-top: 22px;
    border: 2px solid #B4EDFF;
    animation: expand 0.5s linear forwards;
    margin-left: 0;
`;
const Name = styled.div`
    color: white;
    font-size: 40px;
    margin-top: 20rem;
`;
const Topic = styled.div`
    color: white;
    font-size: 56px;
    margin-top: 0.875rem;
    display:flex;
`;

const Arrow = styled.a`
    position: absolute;
    margin-top: 25px;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb 3s infinite;
    animation: sdb 3s infinite;
    box-sizing: border-box;
`;
const SecondArrow = styled(Arrow)`
    margin-top: 3px; /* 첫 번째 화살표와 겹치지 않도록 조정 */
    animation-delay: 3s;
`;

export default function Main() {
    return(
        <Wraaper>
            <Title>Front-end & Android Developer</Title>
            <Line/>
            <Name>PARK HYEJEONG’s</Name>
            <Topic>
                <span className="topic">P</span>
                <span className="topic">O</span>
                <span className="topic">T</span>
                <span className="topic">F</span>
                <span className="topic">O</span>
                <span className="topic">L</span>
                <span className="topic">I</span>
                <span className="topic">O</span>
            </Topic>
            <Arrow className="arrow"/>
            <SecondArrow className="arrow"/>
        </Wraaper>
    )
}