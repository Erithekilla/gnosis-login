import Input from './Input'
function Login(){
    return(
        <>
        <div class="cadastro">
        <h1>GNOSIS</h1>
        <p>SISTEMA DE VIDA</p>
            <Input
                title="EMAIL" 
                type="text"
                placeholder="seu@email.com"
            ></Input>

            <Input
                title="SENHA" 
                type="password"
                placeholder="..."
            ></Input>

            <button class="login">ENTRAR</button>
            <button class="signup">CRIAR CONTA</button>
            <p class="desc">GNOSIS - SEU SISTEMA DE VIDA</p>
        </div>
        </>
    )
}

export default Login