import Input from './Input'
function Login(){
    return(
        <>
        <div class="cadastro">
        <h1>Gnosis</h1>
        <p>Sistema de vida</p>
            <Input
                title="Email" 
                type="text"
                placeholder="seu@email.com"
            ></Input>

            <Input
                title="Senha" 
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