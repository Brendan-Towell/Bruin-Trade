import React, { Component } from "react"; 
import styled from "styled-components";
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { Marginer } from "../../components/marginer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Trade from "../../containers/tradePage/trade.js"

const search = <FontAwesomeIcon icon={faSearch} />
const SearchBarContainer = styled.div`
    width: 100%;
    height: 2%;
    padding: 10px; 
    background-color: #FFFFFF;
    display: flex;
    justify-content: start;
    flex-direction: row;
`;
const Input = styled.input`
  width: 95%;
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

const Result = styled.div`
    margin-top: 5px;
    width: 100%;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    position:relative;
`;

const ResultItem = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    &:hover {
        background: #fdb728;
    }
`;


class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.updateStock = props.updateStock;
        this.state ={
            word: '',
            result: []
        }
        this.handleType = this.handleType.bind(this);
    }

    handleType(event) {
        this.setState({word: event.target.value});
        let url = `https://sandbox.iexapis.com/stable/search/${event.target.value}?token=Tpk_1fa3ca794f3940949c492fee0615dcf5`;
        fetch(url).then((response) => response.json()).then((data) => this.setState({result: data}));
    }

    render () {
        return (
            <div>
                <SearchBarContainer>
                    {search}
                    <Input 
                        type="search" 
                        placeholder="Search"
                        onChange={this.handleType} 
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                            this.updateStock(this.state.word)
                    }}}/>
                </SearchBarContainer>
                {this.state.result.length > 0 && (
                    <Result>
                        {this.state.result.map((res) => {
                            return (
                                <ResultItem onClick={() => {this.updateStock(res.symbol)}}>
                                    {res.exchange}: {res.symbol}
                                </ResultItem>
                            )
                        })}
                    </Result>
                )}
            </div>
        );
    }
}

export default SearchBar;