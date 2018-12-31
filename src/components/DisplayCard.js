import React, {Component} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Oswald:200');
  }`

const StyledCard = styled.div`
    background-color: #fbfbfb;
    width: fit-content;
    min-width: 300px;
    height: 500px;
    margin: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 10px 10px 17px -4px rgba(0,0,0,0.75);
`
const Photo = styled.div`
    width: 150px;
    height: 150px;
    background-color: salmon;
    border: 2px solid #00bfff;
    border-radius: 50%;
    background: url(${props => props.photo_url});
    background-size: cover;
`
const InfoContainer = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: left;
`
const Item = styled.li`
    font-size: 30px;
    color: #00bfff;
    font-family: 'Oswald', sans-serif;
    margin: 10px 30px;
`
const Data = styled.span`
    color: black;
    font-family: 'Oswald', sans-serif;
    border-bottom: 1px dotted #00bfff;
`

export default class DisplayCard extends Component{
    render(){
        return(
        <StyledCard>
            <GlobalStyles/>
            <Photo photo_url={this.props.photo_url}></Photo>
            <InfoContainer>
                <Item>Name: <Data>{this.props.name}</Data></Item>
                <Item>Email: <Data>{this.props.email}</Data></Item>
                <Item>Phone: <Data>{this.props.phone}</Data></Item>
                <Item>Address: <Data>{this.props.address}</Data></Item>
            </InfoContainer>
        </StyledCard>
        )
    }
}