import styled from "styled-components"
import { fonts } from "../../../public/font/font"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 500px;
    gap: 20px;
`
const NavLogo = styled.div`
    display: inline-block;
    background-image: url('/img/logoBlack.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 50px 150px;
    margin: 5px 0px;
`
const Input = styled.input`
    background-color: rgb(242, 242, 245);
    border: none;
    outline: none;
`
const Search = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: rgb(242, 242, 245);
    `
const SearchInput = styled.input`
    ${fonts}
    font-family: 'GothicA1-Light';
    font-size: 18px;
    border:none;
    width: 480px;
    padding-left: 20px;
    height: 60px;
    border-radius: 10px;
    outline: none;
    background-color: rgb(242, 242, 245);
`
const SearchSvg = styled.svg`
    margin-right: 15px;
    width: 30px;
    height: 30px;
`
const Button = styled.button`
    ${fonts}
    font-family: 'GothicA1-Light';
    padding: 20px 20px;
    cursor: pointer;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #FD6505;
    border-radius: 10px;
    color: white;
    
`
export default function Nav() {
    const Navigate = useNavigate()
    const [inputText, setInput] = useState("");
    const onChange = (e) =>{
        setInput(e.target.value);
    }
    const onSearch = (e) =>{
        if(e.key == "Enter"){
            setInput("")
            Navigate(`/search-user/${e.target.value}`);
        }
    }
    return (
        <Flex>
            <NavLogo />
            <Search>
                <SearchInput onChange={onChange} onKeyUp={onSearch} value={inputText} placeholder="닉네임 #태그"></SearchInput>
                <SearchSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </SearchSvg>
            </Search>
        </Flex>
    )
}