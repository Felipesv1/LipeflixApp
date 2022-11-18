import styled from "styled-components";

export const Container = styled.section`
width: 100%;
height: 45px;
display:flex;
align-items: center;
justify-content: space-evenly;
padding: 5px;

`
export const TitleNav = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  transition: 0.2s all;
  color: white;
  &:hover {
    color: red;
  }
`;

export const BoxTitle = styled.div`
a{

  text-decoration:none;
}
`

export const Title = styled.h2`
     font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 2rem;
    color: red;
   
`;



export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;

.menu{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: .9rem;
}    
.menu a {
    display: block;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: white;
    padding: .5rem;
    transition: .5s all;
   
  }  


  @media screen and (min-width: 300px) and (max-width: 800px) {
    width: 30%;
    
    .menu{
      display: block;
      position: absolute;
      width: 100%;
      top: 50px;
      right: 0;
      height:0px;
      visibility: hidden;
      overflow-y: hidden;
      transition: 0.6s;
      background: black;
      z-index: 1000;
   
  }    

 .menu.active{
    height:calc(100vh - 50px) ;
    visibility: visible;
    overflow-y:auto;

  }
  .hamburguer{
    width: 20px;
    border-top:2px solid ;
  }  
  .hamburguer::before,.hamburguer::after{
    content: "";
    width: 20px;
    border-top: 2px solid white;
    display: block;
    margin-top: 5px;
    background: currentColor;
    transition: 0.3s;
    position: relative;
}    

.hamburguer.active{
  border-top: transparent;
}
.hamburguer.active::before{
    transform: rotate(135deg);
  }
   .hamburguer.active::after{
    transform: rotate(-135deg);
    top: -7px;
  }

  .menu a {
    display: block;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: white;
    padding: .5rem; 
    transition: .5s all;
   border-bottom: 1px solid white;
  }   
}
`;


export const btn_mobile = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  gap: 0.5rem;
  display: none ;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    display: flex;
  }    
`;



