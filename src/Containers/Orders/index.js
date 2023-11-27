import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { Container, Image, ContainerItens,Orders } from "./styles"
import Button from "../../components/Button"
import Title from "../../components/Title"
import Logo from "./../../assents/pedido.png"
import Trash from "./../../assents/trash.svg"
import axios from "axios"

function App() {
  const [orders, setOrders] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function fecthOrrders() {
      const { data: allOrders } = await axios.get('http://localhost:3001/orders')
      setOrders(allOrders)
    }
    fecthOrrders()

  }, [])



 async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)
    const deleteOrder = orders.filter(order => order.id !== orderId)
    setOrders(deleteOrder)
  }

  function returnHome() {
    history.push("/")
  }

  return (
    <Container>

      <Image alt="logo-image" src={Logo} />
      <Title> Pedidos</Title>
      <ul>
        {orders.map(order => (
          <Orders key={order.id}>
            <div className="pedido"><p>{order.order}</p></div>
            <div className="botao"><button onClick={() => deleteOrder(order.id)}><img alt="lixeira-imagem" src={Trash} /></button></div>
            <div className="cliente"><p>{order.client}</p></div>
          </Orders>
        ))}

      </ul>


      <ContainerItens>


        <Button Order={true} onClick={returnHome}>Voltar</Button>
      </ContainerItens>

    </Container>
  );
}

export default App;
