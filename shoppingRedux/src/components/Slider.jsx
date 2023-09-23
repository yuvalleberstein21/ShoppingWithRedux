import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import { sliderItems } from '../data';
import { BigmMobiles, mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  position: relative; 
  overflow: hidden;
  ${mobile({ display: "none" })}

`
const Wrapper = styled.div`
   height :100%;
   display: flex;
   transition: all 1.5s ease;
   transform: translateX(${(props) => props.slideindex * -100}vw);
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`

const Slide = styled.div`
 display: flex;
 align-items: center;
 width: 100vw;
 height: 100vh;
 background-color: #${props => props.bg};
 ${BigmMobiles({ display: "flex", flexDirection: "column" })}
 position: relative;
`

const ImgContainer = styled.div`
 height: 100%;
 flex: 1;

`

const Image = styled.img`
  height: 80%;
  ${BigmMobiles({ width: "100vw", height: "80%", opacity: "0.5" })}
  

`

const InfoContainer = styled.div`
 padding: 50px;
 flex: 1;
 ${BigmMobiles({ position: "absolute", width: "100vw", padding: "50px", display: "flex", flexDirection: "column", alignItems: "center" })}
`

const Title = styled.h1`
  font-size: 70px;
  ${BigmMobiles({ fontSize: "50px", height: "80px" })}

 `
const Desc = styled.h1`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${BigmMobiles({ margin: "30px 0px", padding: "0rem 1rem", fontSize: "25px", color: "black", display: "flex", alignItems: "center", justifyContent: "center" })}
  `
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${BigmMobiles({ padding: "10px" })}
   `


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideindex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>


    )
}

export default Slider