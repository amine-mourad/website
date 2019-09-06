import styled from 'styled-components';

export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const AllProfile = styled.div`
    width: 50%;
    float: left;
`

export const ProfileList = styled.ul`
    list-style: none
`

export const ProfileItem = styled.li`
    margin-bottom: 8px
`

export const Span = styled.span`
    display: inline-block;
    width: 100px;

    font-weight: ${props => props.web ? 'normal' : 'bold'};
    color: ${props => props.web ? '#eb5424' : ''};
`

export const Skills = styled.div`
    width: 50%;
    float: left;
`

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const TitlePerc = styled.span`
    float:${props => props.title ? 'left' : ''};
    float:${props => props.perc ? 'right' : ''};
    margin-right:${props => props.perc ? '100px' : ''};
`

export const Parent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width:${props => props.sp1 ? '100%' : ''};
    width:${props => props.sp2 ? '90%' : ''};
    width:${props => props.sp3 ? '80%' : ''};
`

export const ProfileTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`
export const ProfileTitleSpan = styled.span`
    font-weight: normal;
`
