import styled from "styled-components";
import './Main.css';
import { useLocation } from "react-router-dom";
import Home from "./Home";

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: black;
    box-sizing: border-box;
    overflow: auto;
`;

const Intro = styled.div`
    padding-left: 4.75rem;
    padding-right: 4.75rem;
    padding-bottom: 25vh; /* Content를 아래로 밀어내기 위한 공간 */
    box-sizing: border-box;
`;

const Container = styled.div`
    display: flex;
    height: 100vh;
    margin-left: 2.43rem; /* FixedNav의 너비만큼 왼쪽 여백 추가 */
`;

const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px; /* 너비를 고정하거나 필요에 따라 조정하세요 */
    height: 100vh; /* 전체 높이 */
    background-color: black; /* 배경색을 추가하여 네비게이션 바를 명확하게 구분 */
    position: sticky;
    top: 0;
`;

const NavItem = styled.span`
    font-size: 24px;
    margin-top: 32px;
    color: ${props => (props.active ? 'white' : '#9F9F9F')}; /* 현재 경로에 따라 색상을 변경 */
    cursor: pointer;
    &:first-child {
        margin-top: 0;
    }
    &:hover {
        color: white;
    }
`;

const Content = styled.div`
    overflow: auto;
    background-color: black;
    flex: 1;
    padding: 20px; /* 내부 여백을 추가하여 컨텐츠 영역을 넓게 설정 */
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
    margin-bottom: 50px;
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
    const location = useLocation();
    return(
        <Wrapper>
            <Intro>
                <Title>Front-end & Android Developer</Title>
                <Line />
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
                <Arrow className="arrow" />
                <SecondArrow className="arrow" />
            </Intro>

            <Container>
                <Navbar>
                    <NavItem active={location.pathname === '/'}>HOME</NavItem>
                    <NavItem active={location.pathname === '/projects'}>PROJECTS</NavItem>
                    <NavItem active={location.pathname === '/contact'}>CONTACT</NavItem>
                </Navbar>
                <Content>
                    <Home />
                </Content>
            </Container>
        </Wrapper>
    );
}