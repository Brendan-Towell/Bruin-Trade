import React, { Component } from "react"; 
import styled from "styled-components";
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { Marginer } from "../../components/marginer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const search = <FontAwesomeIcon icon={faSearch} />
const SearchBarContainer = styled.div`
    width: 82%;
    height: 2%;
    padding: 10px; 
    background-color: #FFFFFF;
    display: flex;
    justify-content: start;
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

const Result = styled.div`
    margin-top: 5px;
    width: 300px;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
`;

const ResultItem = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    margin-left: 10px;
`;


class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state ={
            word: '',
            result: []
        }
    }

    async handleType(event) {
        console.log(event.target.value);
        //this.setState({word: event.target.value});
        let url = `https://sandbox.iexapis.com/stable/search/${'tsla'}?token=Tpk_1fa3ca794f3940949c492fee0615dcf5`;
        await fetch(url).then((response) => response.json()).then((data) => this.setState({result: data}));
    }

    render () {
        return (
            <SearchBarContainer>
                {search}
                <Marginer direction="horizontal" margin={10} />
                <Input 
                    type="search" 
                    placeholder="Search"
                    value= {this.state.word}
                    onChange={this.handleType} />
                {this.state.result.length > 0 && (
                    <Result>
                        {this.state.result.map((res) => {
                            return (
                                <p>{res.symbol}</p>
                            );
                        })}
                    </Result>
                )}
            </SearchBarContainer>
        );
    }
}

export default SearchBar;