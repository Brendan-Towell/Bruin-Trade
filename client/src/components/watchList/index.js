import React, { Component } from "react"; 
import styled from "styled-components";
import { Marginer } from "../marginer";
import { Button } from "../button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses,
         faSearch } from '@fortawesome/free-solid-svg-icons'
import { red } from "@mui/material/colors";
import CurrentPrice from "../stockData/currentPrice";
import axios from "axios";

const glasses = <FontAwesomeIcon icon={faGlasses} />
const search = <FontAwesomeIcon icon={faSearch} />

const WatchListContainer = styled.div`
    width: 100%;
    height: 100%;
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

const WatchTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const WatchItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const WatchButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Header = styled.div`
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

const SubText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
    font-size: 12px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
`;
class WatchList extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            stockSymbols : [],
            message: ''
        }
    }


    // Gets users watchlist fromd database for displaying
    componentDidMount() {
        const response = axios.get('http://localhost:8080/getUsersWatchlist',{
            params: {
                user_id: localStorage.getItem("token")
            }
        })
            .then((response) => {
                this.setState({
                    stockSymbols: response.data
                })
            })
        }
    

    addItem(e) {
        e.preventDefault();
        const {stockSymbols} = this.state;
        const newSymbol = this.newSymbol.value;

        //Adds stock to watchlist for user in database
        const response = axios.get('http://localhost:8080/addStockToWatchlist',{
            params: {
                stock_symbol: document.getElementById("newItemInput").value,
                user_id: localStorage.getItem("token"),
            }
        })

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
        
        const response = axios.get('http://localhost:8080/removeStockFromWatchlist',{
            params: {
                stock_symbol: symbol,
                user_id: localStorage.getItem("token"),
            }
        })
        
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
            <Marginer direction="vertical" margin={20} />
            <Header>
                {glasses}
                <Marginer direction="horizontal" margin={10} />
                <HeaderText>Watchlist</HeaderText>
            </Header>
            <Marginer direction="vertical" margin={15} />
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
                            <WatchTitle>
                                <HeaderText>{symbol}</HeaderText>
                            </WatchTitle>
                            <WatchItemInfo>
                                <SubText>Current price:</SubText>
                                <CurrentPrice stockSymbol={symbol}/>
                            </WatchItemInfo>
                            <WatchButton>
                                <div onClick={(e)=> this.removeSymbol(symbol)}>
                                    <Button type="button" size={12} width={75} height={40}>
                                        Remove
                                    </Button>
                                </div>
                            </WatchButton>
                            <Marginer direction="vertical" margin={15} />
                        </WatchListCard>
                    );
                })}
            </div>
            }
                <Marginer direction="vertical" margin={15} />
                <SearchBar>
                    {search}
                    <Marginer direction="horizontal" margin={10} />
                    <Form className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
                        <Input ref={(input) => {this.newSymbol = input}} type="text" placeholder="Search" className="form-control" id="newItemInput"/>
                        <Marginer direction="horizontal" margin={10} />
                        <Button type="submit" size={12} width={75} height={25}>Add</Button>
                    </Form>
                </SearchBar>
            </InnerWatchListContainer>
        </WatchListContainer>
    );
    }
}

export default WatchList;