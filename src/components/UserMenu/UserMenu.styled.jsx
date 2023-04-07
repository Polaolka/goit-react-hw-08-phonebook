import styled from "styled-components";

export const Button = styled.button`
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:cornflowerblue;;
    color: white;
    font-size: 16px;
    padding: 4px 10px 4px;
    border: none;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: background-color 300ms ease-out,
                box-shadow 300ms ease-out;
                :hover {
    background-color:salmon;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
`;

export const Wrapper = styled.div`
    display: flex; 
    gap: 20px;
    align-items: center;
`