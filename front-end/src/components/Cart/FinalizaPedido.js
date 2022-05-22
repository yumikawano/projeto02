import Layout from "../../components/Layout"
import { Button, Card } from 'react-bootstrap'
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectUser } from '../../store/User/User.selectors'
import { selectCart } from '../../store/Cart/Cart.selectors'

function FinalizaPedido() {
    const productCart = useSelector(selectCart)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const Somovalores = productCart.reduce((accumuletor, correntValue) => {
        accumuletor += correntValue.price * correntValue.qty
        return accumuletor
    }, 0)
    const handleRemove = (products) => {
        const action = {
            type : 'REMOVE_OF_CART',
            payload : products
        }
        dispatch(action)
        toast.success('Produto removido com sucesso',{
            theme: "dark"
        })
        
    }
    const handleCart = (products) => {
        const productsArry = {
            ...products,
            qty: 1
        }
        const action = {
            type: 'ADD_TO_CART',
            payload: productsArry
        }
        dispatch(action)
    }
    const handleRemoveQty = (products) => {
        const action = {
            type: 'REMOVE_QTY',
            payload: products
        }
        dispatch(action)
    }
    const sendWhastApp = () => {
        let text = 'Confira o pedido abaixo:\n---------------------------------------\n\n'
        const subdomain = window.innerWidth > 768 ? 'web' : 'api'
        productCart.forEach(products => {
                text += `*${products.name}*\n` 
                text += `Quantidade : ${products.qty}\n`
                text += `Valor : ${products.price}`
                text += '\n---------------------------------------\n\n'    
            })
                text += '*Dados do Cliente*\n\n'
                text += `Nome: ${user.nome}\n`
                text += `Endereço: ${user.endereço}\n`
                text += `CEP: ${user.cep}\n\n`
                text += '\n---------------------------------------\n\n'  
                text += `*Valor* *Total* : ${Somovalores} `  
            window.open(`https://${subdomain}.whatsapp.com/send?phone=5544988251854&text=${encodeURI(text)}`, '_blank')
    }
    // productscart.forEach(product => {
    //     text += `*${product.qty}x ${product.name}* - ${product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}\n`
    //     total += product.price * product.qty
    // })
    return (
        <Layout>
            <StyledContainer>
                <StyledSubContainer>
                    {productCart.length === 0 ? (
                        <h1> Sem Produtos</h1>
                    ) : productCart.map(products => (
                        <StyledCard key={products.id} >
                            <Card.Header>{products.class}</Card.Header>
                            <Card.Body>
                                <Card.Title>{products.name}</Card.Title>
                                <Card.Text>
                                    <StyledDivText>
                                        <StyledDivInput>
                                            <p>Quantidade</p>
                                           <StyledQty>{products.qty}</StyledQty>
                                        </StyledDivInput>
                                        <p>Valor R$ {products.price*products.qty}</p>
                                    </StyledDivText>
                                </Card.Text>
                                <Button variant='transparent' onClick={ ()=> handleRemove(products.id)}><i className="bi bi-trash-fill"></i></Button>
                                <Button variant='transparent' onClick={() => handleCart(products)}><i class="bi bi-plus-square-fill"></i></Button>
                                <Button variant='transparent' onClick={() => handleRemoveQty(products.qty) }><i class="bi bi-file-minus-fill"></i></Button>
                            </Card.Body>
                        </StyledCard>
                    ))
                    }

                </StyledSubContainer>
            </StyledContainer>
            <div className='d-flex justify-content-center'>
                <StyledCardTotal className='m-4'>
                    {productCart.length === 0 ? (
                        ''
                    )
                        : (
                                <Card.Body>
                                    <StyledDivToralPrice>
                                        <p>Total</p>
                                        <p>R$ {Somovalores}</p>
                                    </StyledDivToralPrice>
                                </Card.Body>
                        )
                    }
                        {productCart.length === 0 ? (
                            ''
                        )
                            : (
                                <Button onClick={sendWhastApp}>Finalizar Pedido</Button>
                            )
                        }
                </StyledCardTotal>
                
            </div>
        </Layout>
    )
}
export default FinalizaPedido
const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const StyledCard = styled(Card)`
    margin: 1rem;
    width: 300px;
    @media(min-width: 576px) {
        width: 375px;
    }
`
const StyledCardTotal = styled(Card)`
   @media (min-width: 992px) {
        width: 850px;
    }
`
const StyledSubContainer = styled.div`
    padding-top: 8rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: 992px) {
        width: 850px;
        justify-content: space-between;
    }
`
const StyledDivText = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    padding-top: 10px ;
    @media (max-width: 375px ) {
        flex-direction: column;
        align-items: center;
    }
`
const StyledQty = styled.div`
    width: 50px;
    border: solid;
    height: 35px;
    border-radius: 10px;
    text-align: center;
    margin-left: 10px;
`
const StyledDivInput = styled.div`
    display: flex;
    padding-left: 10px;
    font-size: 20px;
    align-items: flex-start;
`
const StyledDivToralPrice = styled.div`
    font-weight: bold;
    display: flex;
    font-size: 22px;
    justify-content: space-evenly;
`