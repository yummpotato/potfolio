import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px; /* 너비를 고정하거나 필요에 따라 조정하세요 */
    height: 100vh; /* 전체 높이 */
    background-color: black; /* 배경색을 추가하여 네비게이션 바를 명확하게 구분 */
    position: sticky;
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

export default function Nav() {
    const location = useLocation();

    return(
        <Wrapper>
            <NavItem active={location.pathname === '/'}>HOME</NavItem>
            <NavItem active={location.pathname === '/projects'}>PROJECTS</NavItem>
            <NavItem active={location.pathname === '/contact'}>CONTACT</NavItem>
        </Wrapper>
    );
}