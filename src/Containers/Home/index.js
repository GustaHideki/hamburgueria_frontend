import React,{useState,useRef} from "react"
import {useHistory} from 'react-router-dom'
import {Container, Image, ContainerItens,InputLabel,Input} from "./styles"
import Button from "../../components/Button"
import Title from "./../../components/Title"
import Logo from "./../../assents/logo.png"
import axios from "axios"


function App() {
  const [orders, setOrders] = useState([])
  const inputOrder = useRef()
  const inputClient = useRef()
  const history = useHistory()


   async function addnewOrder(){
    const {data : newOrder} = await axios.post('http://localhost:3001/orders',{order:inputOrder.current.value, client:inputClient.current.value})
    
    setOrders([...orders,{newOrder }])
    history.push("/pedidos")
  }

  
  
  return (
    <Container>
        <Image alt="logo-image" src={Logo}/>
          <ContainerItens>
              <Title> Faça seu pedido!</Title>

              <InputLabel>Pedido</InputLabel>
              <Input ref={inputOrder} placeholder="Digite seu pedido"/>

              <InputLabel>Nome do Cliente</InputLabel>
              <Input ref={inputClient} placeholder="Digite seu Nome"/>

              <Button onClick={addnewOrder}>Novo Pedido</Button>
          </ContainerItens>
    </Container>
  );
}

export default App;
