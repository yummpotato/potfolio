import { Outlet } from "react-router-dom";
import Nav from "../container/Header/Nav";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px; /* 내부 여백을 추가하여 컨텐츠 영역을 넓게 설정 */
`;

export default function Layout() {
    return(
        <Container>
            <Nav />
            <Content>
                <Outlet />
            </Content>
        </Container>
    );
}

{/* <Outlet/>: Home components가 렌더링 되었음 */}