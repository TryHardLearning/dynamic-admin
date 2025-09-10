import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { backend_url } from '../App';


const handleLogin = async (email, password) => {

    try {
        // Envia os dados para o endpoint correto.
        // O endpoint de login de usuário geralmente não tem '/admin'.
        console.log(backend_url);
        const response = await axios.post(`${backend_url}/api/users/admin`, {
            email,
            password
        });

        // A resposta da API já está validada na camada de serviço.
        // Se `success` for true, o login foi bem-sucedido.
        if (response.data.success) {
            // Armazena o token de autenticação no localStorage e no estado.
            localStorage.setItem('token', response.data.token);
            // setToken(response.data.token);
            return response.data.token;

            // Redireciona o usuário de forma mais elegante.
            // O `window.location.reload()` não é ideal em aplicações React.
            // Considere usar `Maps('/')` se estiver usando o React Router.
            window.location.reload(); 

        } else {
            // Se `success` for false, a API enviou uma mensagem de erro específica.
            // Exibe essa mensagem para o usuário.
            toast.error('Erro ao fazer login');
        }
    } catch (error) {
        // Tratamento de erros mais específico.
        // Isso ajuda a diferenciar erros de rede de erros do servidor.
        if (axios.isAxiosError(error)) {
            // O erro veio da API. Use a mensagem de erro do servidor se disponível.
            if (error.response) {
                toast.error('Erro no servidor, tente novamente.');
            }
        } else {
            // Outro tipo de erro inesperado.
            toast.error('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
        }

        console.error(error);
    }
};
export {handleLogin};