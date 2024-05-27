import { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";

import { getProducts } from '../api/products';
import { Footer, Header, Main } from './style';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoCloseCircle } from 'react-icons/io5';

type Product = {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string,
    createdAt: string,
    updatedAt: string,
}

const Root = () => {
    const [product, setProduct] = useState<Product[]>([]);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const { data } = getProducts();
    const [total, setTotal] = useState(0);

    const addProduct = (product: Product) => {
        setProduct((p) => [...p, product]);
        setTotal(t => t + Number(product.price));
    }

    const openCloseMenu = () => {
        setOpenMenu((p) => !p);
    }

    const checkout = () => {
        alert("Comprando " + product.length + " produtos");
    }

    return (
        <>
            <Header>
                <div className="container">
                    <div className='logo'>
                        <div className="title">MKS</div>
                        <p className="subtitle">Sistemas</p>
                    </div>
                    <div className="right">
                        <div className="shopping-cart" onClick={openCloseMenu}>
                            <TiShoppingCart />
                            <div>{product.length}</div>
                        </div>

                        <div className={`${openMenu ? "open" : "close"} menu-shopping-cart`}>
                            <div className="container">
                                <div className="menu">
                                    <div>
                                        <p>Carrinho</p>
                                        <p>de compras</p>
                                    </div>
                                    <div className="click" onClick={openCloseMenu}>
                                        <IoCloseCircle />
                                    </div>
                                </div>
                                <div className="content">
                                    {product.map((prod, i) => {
                                        return (
                                            <div className="item" key={i}>
                                                <img src={`${prod.photo}`} className="photo" width="75px" />
                                                <div className="name">{prod.name}</div>
                                                <div className="qtd"></div>
                                                <div className="price">R${prod.price}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="total">
                                <div className="text">Total:</div>
                                <div className="value">R${total}</div>
                            </div>
                            <button className="end-shopping click" onClick={checkout}>Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </Header>
            <Main>
                <div className="container">
                    <div className="products">
                        {data?.map((product, i) => {
                            return (
                                <div className="product" key={i}>
                                    <div className="image">
                                        <img src={product.photo} className='photo' width="100%" height="200px" />
                                    </div>
                                    <div className="content">
                                        <div className="product-identify">
                                            <p className="name">{product.name}</p>
                                            <p className="price">R${product.price}</p>
                                        </div>
                                        <p className="description">{product.description}</p>
                                    </div>
                                    <button className="action" onClick={() => {
                                        addProduct(product);
                                    }}>
                                        <MdOutlineShoppingBag />
                                        <div>COMPRAR</div>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Main>
            <Footer>
                <div className="container">
                    <p>MKS sistemas &copy; Todos os direitos reservados</p>
                </div>
            </Footer>
        </>
    );
}

export default Root