import styled from "styled-components";
import profileImg from "../images/app__home-profile-img.jpg";
import SkillsTag, { Border, LogoBorder } from "../components/skills-tag";
import reactIco from "../images/react_ico.png";
import jspIco from "../images/jsp_ico.png";
import htmlIco from "../images/html_ico.png";
import cssIco from "../images/css_ico.png";

const Wrapper = styled.div`
    top: 0;
    display: flex;    
    flex-direction: column;
`;

const Profile = styled.div`
    display: flex;
`;
const Image = styled.img`
    width: 250px;
    height: 290px;
`;
const Info = styled.div`
    margin-left: 2.31rem;
    display: flex;
    flex-direction: column;
`;

const Name = styled.span`
    font-size: 48px;
    color: white;
`;
const Birth = styled.span`
    font-size: 32px;
    color: white;
    margin-top: 2.06rem;
`;
const Skills = styled.div`
    margin-top: 2.06rem;
    display: flex;
`;

const Message = styled.div`
    margin-top: 6.25rem;
    display: flex;
    align-items: center;
`;
const Quote = styled.hr`
    border: 5px solid #A9EAFE;
    margin-left: 0;
    margin-right: 2.375rem;
    height: 13rem;
`;
const Text = styled.span`
    font-size: 28px;
    color: white;
    line-height: 1.5;
`;
const Emphasize = styled.span`
    font-size: 40px;
    color: #A9EAFE;
`;

const SkillsLayout = styled.div`
    margin-top: 8.81rem;
`;
const TopicTitle = styled.div`
    display: flex;
    flex-direction: column;
`;
const Topic = styled.span`
    color: #A9EAFE;
    font-size: 48px;
`;
const TopicUnderline = styled.hr`
    color: #A9EAFE;
    border: 3px solid #A9EAFE;
    width: 210px;
    margin-left: 0;
`;
const SkillsLibrary = styled.div`
    margin-top: 1.25rem;
    color: white;
    font-size: 36px;
`;
const Level = styled.div`
    margin-top: 1.5rem;
    color: white;
    font-size: 28px;
`;
const Icon = styled.img`
    width: 30px;
    height: auto;
    margin-right: 0.375rem;
`;

export default function Home() {
    return(
        <Wrapper>
            <Profile>
                <Image src={profileImg} alt="프로필 이미지"/>
                <Info>
                    <Name>박혜정</Name>
                    <Birth>2000.10.26</Birth>
                    <Skills>
                        <Border>front-end developer</Border>
                        <Border>Android developer</Border>
                    </Skills>
                    <Skills>
                        <Border>React.js</Border>
                        <Border>kotlin</Border>
                    </Skills>
                </Info>
            </Profile>
            
            <Message>
                <Quote/>
                <Text>
                    여러 프로젝트와 협업을 경험하고 <Emphasize>프론트엔드</Emphasize>, <Emphasize>백엔드</Emphasize>, <Emphasize>안드로이드</Emphasize> 등<br/> 
                    여러 분야를 공부해보며 Web Frontend를 마주하게 되었고, <br/> 
                    시각적으로 사용자에게 편리함을 제공할 수 있는 것이 잘 맞는다고 <br/> 
                    생각했습니다!  Web Frontend에 대한 자신감과 확신이 든 지금, <br/> 
                    꾸준히 배우고 성장할 일만 남은 Frontend Developer 박혜정입니다🤓
                </Text>
            </Message>

            <SkillsLayout>
                <TopicTitle>
                    <Topic>SKILLS</Topic>
                    <TopicUnderline/>
                </TopicTitle>
                
                <SkillsLibrary>LANGUAGE / LIBRARY / FRAMEWORK</SkillsLibrary>
                <Level>high level</Level>
                <Skills>
                    <LogoBorder><Icon src={reactIco}/>React.js</LogoBorder>
                    <LogoBorder><Icon src={jspIco}/>JavaScript(ES6+)</LogoBorder>
                    <LogoBorder><Icon src={htmlIco}/>HTML5</LogoBorder>
                    <LogoBorder><Icon src={cssIco}/>CSS3</LogoBorder>
                </Skills>
            </SkillsLayout>
        </Wrapper>
    )
}