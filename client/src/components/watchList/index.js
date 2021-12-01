import React, { Component } from "react"; 
import styled from "styled-components";
import { Marginer } from "../marginer";
import { Button } from "../button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses,
         faSearch } from '@fortawesome/free-solid-svg-icons'

const glasses = <FontAwesomeIcon icon={faGlasses} />
const search = <FontAwesomeIcon icon={faSearch} />

const WatchListContainer = styled.div`
    width: 86%;
    height: 63%;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align: center;
    padding-left: 15px;
    overflow-y: scroll;
`;

const InnerWatchListContainer = styled.div`
    width: 95%;
    height: 99%;
    display: flex;
    align: center;
    flex-direction: column;
`;

const SearchBar = styled.div`
    width: 82%;
    height: 2%;
    padding: 5px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    alignt: center;
    flex-direction: row;
`;

const Input = styled.input`
  width: 85%;
  height: 25px;
  outline: solid;
  outline-width: thin;
  outline-color: rgba(200, 200, 200, 0.3);
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

const WatchListCard= styled.div`
    width: 100%;
    height: 300px;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
`;  

const Header = styled.h3`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const HeaderText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 600;
    font-size: 15px;
`;

class WatchList extends Component {
    state = {
        stockSymbols : [
            {id: 1, name: 'AAPL'},
            {id: 2, name: 'AMZN'},
            {id: 3, name: 'TSLA'},
        ]
    }

    render() {
        const { stockSymbols } = this.state;
    return (
        <WatchListContainer>
            <Header>
                {glasses}
                <Marginer direction="horizontal" margin={10} />
                <HeaderText>Watchlist</HeaderText>
            </Header>
            <InnerWatchListContainer>
                {stockSymbols.map((symbol)=>{
                    return (
                        <WatchListCard>
                            <HeaderText>{symbol.name}</HeaderText>
                            <Marginer direction="vertical" margin={10} />
                        </WatchListCard>
                    );
                })}
                <Marginer direction="vertical" margin={15} />
                <SearchBar>
                    {search}
                    <Marginer direction="horizontal" margin={10} />
                    <Input type="search" placeholder="Search"/>
                    <Marginer direction="horizontal" margin={10} />
                    <Button size={12} width={75} height={25}>Add</Button>
                </SearchBar>
            </InnerWatchListContainer>
            
        </WatchListContainer>
    );
    }
}

export default WatchList;