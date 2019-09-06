import React, {Component} from 'react';
import {WorkSection,WorkTitle,Span,WorkPart,WorkIcon,WorkPartTitle,WorkLine,WorkPartDesc} from './style.js'
import Axios from 'axios';

class Work extends Component {

  state = {
    worksd : []
  }

  componentDidMount () {
    Axios.get('js/data.json').then(res => {this.setState({worksd : res.data.works})});
  }

  render() {

    const worksv = this.state.worksd;
    const WorksList = worksv.map((WorkItem) => {
      return(
        <WorkPart first={WorkItem.id} key={WorkItem.id}>
                    <WorkIcon className={WorkItem.icon_name}></WorkIcon>
                    <WorkPartTitle>{WorkItem.title}</WorkPartTitle>
                    <WorkLine />
                    <WorkPartDesc>
                    {WorkItem.body}
                    </WorkPartDesc>
        </WorkPart>
      )
    })

    return (
      <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {WorksList}
                
            </div>
        </WorkSection>
    )
  }
}

export default Work;
