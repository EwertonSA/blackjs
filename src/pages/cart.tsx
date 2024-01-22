// pages/cart.tsx

import { NextPage } from "next";
import Head from "next/head";
import Header from "../../source/components/Header";
import { Container } from "reactstrap";
import CartTable from "../../source/components/CartTable";
import CartTotal from "../../source/components/CartTotal";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Container>
        <h1 className="my-5">
          Carrinho
        </h1>
        <CartTable></CartTable>
        <CartTotal></CartTotal>
      </Container>
    </>
  )
}

export default Cart