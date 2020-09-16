import styled from 'styled-components';
export const Container = styled.div`
width: 100%;
height: 70px;
background: #048d29;
border-bottom: 6px solid #ee6b26;
box-shadow: 2px 5px 5px #5e646e;
display: flex;



`
export const LeftSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
padding-left: 10px;
img {
    
    width: 170px;
height: 50px;

}

`


export const RightSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
justify-content: flex-end;

a{

color: #fff;
font-weight: bold;
text-decoration: none;
margin: 0 10px;

&:hover{

    color: #ee6b26;
    
    
}


}
#notification {

    img{

width:25px;
height:30px;
    }

    span {
        background: #fff;
        color: #ee6b26;
        padding: 3px 6px;
        border-radius 50%;
        position:relative;
        top: -20px;
        right: 10px;
    }

    &:hover {

opacity: 70%;

    }

}

.dividir::after{
    content: "|";
margin: 0 10px;
color: #fff;
opacity: 60%;

}




`
