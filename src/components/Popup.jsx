import React, { useState } from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const SelectLabel = styled.label`
  color: #FD6505;
  display: block;
  margin-bottom: 10px;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
`;

const InputLabel = styled.label`
  color: #FD6505;
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const SubmitButton = styled.button`
  background: #fff;
  color: #FD6505;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const Popup = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // 여기에서 선택된 옵션과 입력값을 처리하거나 API 호출 등을 수행할 수 있습니다.
    console.log('Selected Option:', selectedOption);
    console.log('Input Value:', inputValue);

    // 팝업 닫기
    onClose();
  };

  return (
    <PopupOverlay>
      <PopupContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <SelectLabel>
          라인
          <Select value={selectedOption} onChange={handleSelectChange}>
            <option value="option1">탑</option>
            <option value="option2">미드</option>
            <option value="option3">정글</option>
            <option value="option3">원딜</option>
            <option value="option3">서폿</option>

          </Select>
        </SelectLabel>
        <InputLabel>
          입력:
          <Input type="text" value={inputValue} onChange={handleInputChange} />
        </InputLabel>
        <InputLabel>
          입력:
          <Input type="text" value={inputValue} onChange={handleInputChange} />
        </InputLabel>
        <InputLabel>
          입력:
          <Input type="text" value={inputValue} onChange={handleInputChange} />
        </InputLabel>
        <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default Popup;
