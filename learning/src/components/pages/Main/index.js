import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css'

export default class Main extends Component {



    //Variavel que controla estado do componente
    state = {
        products: [],
    };

    //Metodo do React que carrega dados logo que o componente é mostrado!
    componentDidMount() {

        this.loadProducts();
    }

    loadProducts = async () => {

        const response = await api.get("/products");
        console.log(response.data.docs);
        this.setState({ products: response.data.docs });

    }


    render() {

        //Toda vez que ser realiza um map o React pede para adicionar um Key dentro da tag que o produto sera mostrado
        return <div className="product-list"> {this.state.products.map(product => (
            <article key={product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>

                <a href="https://google.com">Acessar</a>
            </article>

        ))}</div>;
    }

}