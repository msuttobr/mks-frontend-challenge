
import styled from 'styled-components';

export const Header = styled.header`
    background-color: hsla(216, 85%, 39%, 1);
    height: 80px;
    display: flex;

    > .container {
        flex: 1;
        max-width: 1140px;
        padding: 0 20px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > .container .logo {
        display: flex;
        gap: 8px;
        align-items: end;
    }
    > .container .title {
        font-size: 2em;
        color: white;
        line-height: 1;
    }

    > .container .subtitle {
        font-size: 0.75em;
        color: white;
    }

    .shopping-cart {
        background-color: hsla(0, 0%, 100%, 1);
        padding: 8px 16px;
        border-radius: 8px;

        display: flex;
        align-items: center;
        gap: 20px;
        font-weight: bold;
        font-size: 1.25em;
        cursor: pointer;
    }
    .shopping-cart ~ .menu-shopping-cart {
        box-shadow: 0 10px 20px -3px rgb(0 0 0);

        color: white;
        background-color: hsla(216, 85%, 39%, 1);
        width: 350px;
        height: 100vh;
        position: fixed;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        top: 0;

        transition: all 0.3s;
    }
    .menu-shopping-cart .container {
        padding: 20px 20px 0 20px;
    }
    .menu-shopping-cart .container .menu {
        font-size: 2.5em;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .menu-shopping-cart .container .menu p {
        font-size: 24px;
    }
    .menu-shopping-cart .content {
        margin: 30px 0 0 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        
        height: 65vh;
        overflow-y: scroll;
    }
    .menu-shopping-cart .content .item {
        font-size: 12px;
        padding: 0 20px;
        background-color: white;
        height: 80px;
        border-radius: 8px;

        color: black;

        display: flex;
        gap: 20px;
        align-items: center;
    }
    .menu-shopping-cart .total {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
    }
    .menu-shopping-cart .end-shopping {
        background-color: black;
        border-style: none;
        width: 100%;
        color: white;
        height: 50px;
    }


    .menu-shopping-cart ::-webkit-scrollbar {
        width: 10px;
    }
    
    .menu-shopping-cart ::-webkit-scrollbar-track {
        background-color: hsl(0deg 0% 93.33%);
    }
    
    .menu-shopping-cart ::-webkit-scrollbar-thumb {
        background-color: hsla(216, 85%, 20%, 1);
    }


    .click {
        cursor: pointer;
    }
    .open {
        right: 0;
    }
    .close {
        right: -999px;
    }
`;

export const Main = styled.main`
    background-color: hsl(0deg 0% 97.65%);

    .container {
        max-width: 1140px;
        padding: 0 20px;
        margin: 0 auto;
    }

    .products {
        padding: 60px 0;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 20px;
    }
    
    .product {
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        background-color: hsl(0deg 0% 93.33%);

        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-between;        
    }
    .product .photo {
        object-fit: contain;
        background-color: white;
    }
    .product .action {
        background-color: hsla(216, 85%, 39%, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        cursor: pointer;
        height: 40px;
        color: white;
        border-style: none;
        border-radius: 0 0 8px 8px;
    }
    .product .action:hover {
        background-color: hsla(216, 85%, 20%, 1);
    }
    .product .content {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .product .product-identify {
        display: flex;
        gap: 20px;
        justify-content: space-between;
    }
    .product .product-identify .price {
        display: flex;
        align-items: center;

        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1.5px;
        padding: 8px;
        border-radius: 8px;

        color: white;
        background-color: #2d2d2d;
    }

    @media (max-width: 900px) {
        .products {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
    
    @media (max-width: 800px) {
        .products {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    
    @media (max-width: 500px) {
        .products {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
    
`;
export const Footer = styled.footer`
    background-color: hsl(0deg 0% 93.33%);
    
    .container {
        max-width: 1140px;
        padding: 0 20px;
        margin: 0 auto;
        text-align: center;
    }
`;