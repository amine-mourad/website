import React, {Component} from 'react';
import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,ImageWrapper,Image,Overlay,OverlaySpan} from './style.js';
import Axios from 'axios';

class Portfolio extends Component {

  state ={
    AllImages : []
  }

  componentDidMount () {
    Axios.get('js/data.json').then(res => {this.setState({AllImages : res.data.portfolio})});
  }

  render() {

    const Images = this.state.AllImages;
    const ImagesData = Images.map((ImageItem) => {
      return(
        <ImageWrapper key={ImageItem.id}>
                    <Image src={ImageItem.image} alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
        </ImageWrapper>
      )
    })

    return (
      <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList> 
            
            <div class="box">
                
                {ImagesData}
                           
            </div>
            
        </PortfolioSection>
    )
  }
}

export default Portfolio;
