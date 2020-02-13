import React, { Component } from 'react';
import $ from "jquery";
import DownArrowLink from "../down-arrow-link/down-arrow-link.component"
import "./header.styles.css" 
import ScrollEvent from 'react-onscroll';


 
class Header extends Component{
  constructor(){
    super()
    this.state={
      values:{}
    }
  }
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
      </div>
    )
   }
}

export default Header

