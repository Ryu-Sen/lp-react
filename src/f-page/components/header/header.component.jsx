import React, { Component } from 'react';
import $ from "jquery";
import DownArrowLink from "../down-arrow-link/down-arrow-link.component"
import "./header.styles.css" 
import ScrollEvent from 'react-onscroll';

 
class Header extends Component{
  
  componentDidMount(){
    $('.sd').click(function(){
      $('.hero, .content').addClass('scrolled');
    });
    $(window).on('scroll',function(){
        if( $(window).scrollTop() === 0){
          $('.hero, .content').removeClass('scrolled');
        }
    });
  }

  handleScrollCallback = (e) =>{
      if( window.scrollY >0 ){
        $('.hero, .content,.hero-inner').addClass('scrolled');
      }
  }
   render(){
    return (
     
      <div >
        <div id="hero">
          <ScrollEvent handleScrollCallback={this.handleScrollCallback}/>
          <div className="hero-inner">
            <div className="hero-title" >
              <h1 className="text-light title font-2">List Sothebys</h1>
              <p className="text-capitalize text-light">here starts awesomeness</p>
            </div>
            <DownArrowLink/>
           </div>
          </div>
          <section id="section" > </section>
          <div   className="content clearfix">
          <div className="container" style={{"paddingTop": "60px"}}>
            <div className="row">
              <div className="col-md-5">
                <h2 className="text-uppercase">Tomato Ramen</h2>
                <p className="font-alt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptatibus molestia!</p>
              </div>
              <div className="col-md-7">
                <p style={{"paddingTop":" 47px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam earum eos corporis totam vel, eaque sapiente officiis sint culpa inventore blanditiis hic cupiditate illo nam assumenda reprehenderit suscipit dolorum.</p>			
              </div>
            </div>	
          </div>
          <div className="container" style={{height: "100vh"}}></div>
        </div>
      </div>
    )
   }
}

export default Header

