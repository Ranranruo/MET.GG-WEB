import styled from "styled-components"
import { fonts } from "../../public/font/font"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
const Ul = styled.ul`
    display: flex;
    align-items: center;
`
const Div = styled.div`
    display: flex;
    gap: 10px;
`
const Li = styled.li`
    ${fonts}
    font-size: 17px;
    font-family: 'GothicA1-Light';
    font-weight: 600;
    padding: 10px;
`
const Svg = styled.svg`
    fill: #FD6505;
    width: 25px;
    height: 25px;
`
const LoginButton = styled.button`
    ${fonts}
    font-size: 13px;
    font-family: 'GothicA1-Light';
    font-weight: 600;
    padding: 8px 14px;
    color:white;
    background-color: #FD6505;
    border-radius: 5px;
    border: none;
`

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 5px;
    border-radius: 5px;
    background-color: rgb(242, 242, 245);
`
const Input = styled.input`
    font-size: 12px;
    border:none;
    outline: none;
    background-color: rgb(242, 242, 245);
`
const SearchSvg = styled.svg`
    width: 20px;
    height: 20px;
`
export default function Menu() {
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
            <Ul>
                <Li><Link to="/">홈</Link></Li>
                <Li><Link to="/">챔피언</Link></Li>
                <Li><Link to="/">파티찾기</Link></Li>
                <Li><Link to="/">데스크톱</Link></Li>
            </Ul>
            <Search>
                <Input onChange={onChange} onKeyUp={onSearch} placeholder="닉네임 #태그" value={inputText}></Input>
                <SearchSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </SearchSvg>
            </Search>
            <Div>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </Svg>
                <LoginButton>로그인</LoginButton>
            </Div>
        </Flex>
    )
}