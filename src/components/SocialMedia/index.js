import React, {Component} from 'react';
import {SocialSection,SocialItem,Paragraph,Span,Icon} from './style.js';
import Axios from 'axios';

class SocialMedia extends Component {

  state ={
    Scoials : []
  }

  componentDidMount () {
    Axios.get('js/data.json').then(res => {this.setState({Scoials : res.data.social})});
  }

  render() {

    const ScoialsV = this.state.Scoials;
    const ScoialData = ScoialsV.map((ScoialItem) => {
      return(
        <SocialItem itemsocial={ScoialItem.id} key={ScoialItem.id}>
                <Icon className={ScoialItem.icon}></Icon>
                <Paragraph>
                    <Span info1>{ScoialItem.title}</Span>
                    <Span info2>{ScoialItem.body}</Span>
                </Paragraph>
            </SocialItem>
      )
    })

    return (
      <SocialSection>
            
            {ScoialData}

        </SocialSection>
    )
  }
}

export default SocialMedia;
