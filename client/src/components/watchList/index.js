import React, { Component } from "react"; 
import styled from "styled-components";
import { Marginer } from "../marginer";
import { Button } from "../button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses,
         faSearch } from '@fortawesome/free-solid-svg-icons'
import { red } from "@mui/material/colors";

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
    align: center;
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
    height: 75px;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-evenly;
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
    
    constructor(props) {
        super(props);
        this.state = {
            stockSymbols : [ 'AAPL', 'AMZN', 'TSLA' ],
            message: ''
        }
    }

    addItem(e) {
        e.preventDefault();
        const {stockSymbols} = this.state;
        const newSymbol = this.newSymbol.value;

        const isOnList = stockSymbols.includes(newSymbol);

        if (isOnList) {
            this.setState({
                message: 'This item is already on the list.'
            })
        } else {
            newSymbol !== '' && this.setState({
                stockSymbols: [...this.state.stockSymbols, newSymbol]
            })
        }
        
    }

    removeSymbol(symbol) {
        const newStockSymbols = this.state.stockSymbols.filter(stockSymbol => {
            return stockSymbol !== symbol;
        })
        console.log(this.state.stockSymbols)

        this.setState({
            stockSymbols: [...newStockSymbols]
        })
        
        if (newStockSymbols.length === 0){
            this.setState({
                message: 'No items on watchlist.'
            })
        }
    }

    render() {
        const { stockSymbols, message } = this.state;
        return (
        <WatchListContainer>
            <Header>
                {glasses}
                <Marginer direction="horizontal" margin={10} />
                <HeaderText>Watchlist</HeaderText>
            </Header>
            <InnerWatchListContainer>
            {
                (message !== '' || stockSymbols.length === 0 )&& <p className="message text-danger">{message}</p>
            }
            {
            stockSymbols.length > 0 && 
            <div>
                {stockSymbols.map((symbol)=>{
                    return (
                        <WatchListCard>
                            <HeaderText>{symbol}</HeaderText>
                            <button onClick={(e)=> this.removeSymbol(symbol)} type="button" color={red} width={50} height={10}>
                                Remove
                            </button>
                        </WatchListCard>
                    );
                })}
            </div>
            }
                <Marginer direction="vertical" margin={15} />
                <SearchBar>
                    {search}
                    <Marginer direction="horizontal" margin={10} />
                    <form className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
                        <Input ref={(input) => {this.newSymbol = input}} type="text" placeholder="Search" className="form-control" id="newItemInput"/>
                        <Marginer direction="horizontal" margin={10} />
                        <Button type="submit" size={12} width={75} height={25}>Add</Button>
                    </form>
                </SearchBar>
            </InnerWatchListContainer>
        </WatchListContainer>
    );
    }
}

export default WatchList;