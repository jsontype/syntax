import styled from "styled-components"
import Button from "../../atoms/Button"

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`

const SearchButton = styled(Button)`
  margin: 8px;
`

const SearchBar = ({ value, onChange, onClick, placeholder }) => {
  return (
    <div>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "입력해주세요."}
      />
      <SearchButton onClick={onClick}>검색</SearchButton>
    </div>
  )
}

export default SearchBar
