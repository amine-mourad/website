import React, {Component} from 'react';
import {ProfileSkills,AllProfile,ProfileList,ProfileItem,Span,Skills,SkillsDesc,Bar,TitlePerc,Parent,ParentSpan,ProfileTitle,ProfileTitleSpan} from './style.js';

class Profile extends Component {
  render() {
    return (
      <ProfileSkills>
            <div class="container">
                <AllProfile>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <Span web>www.google.com</Span>
                        </ProfileItem>
                    </ProfileList>
                </AllProfile>
                
                <Skills>
                    <ProfileTitle>Some <ProfileTitleSpan>skills</ProfileTitleSpan></ProfileTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <Bar>
                        <TitlePerc title>Bootstrap</TitlePerc>
                        <TitlePerc perc>100%</TitlePerc>
                        <Parent>
                            <ParentSpan sp1></ParentSpan>
                        </Parent>
                    </Bar>
                    
                    <Bar>
                        <TitlePerc title>CSS3</TitlePerc>
                        <TitlePerc perc>90%</TitlePerc>
                        <Parent>
                            <ParentSpan sp2></ParentSpan>
                        </Parent>
                    </Bar>
                    
                    <Bar>
                        <TitlePerc title>Photoshop</TitlePerc>
                        <TitlePerc perc>80%</TitlePerc>
                        <Parent>
                            <ParentSpan sp3></ParentSpan>
                        </Parent>
                    </Bar>
                </Skills>
                
            </div>
        </ProfileSkills>
    )
  }
}

export default Profile;
