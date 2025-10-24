import axios from 'axios';
import { toast } from 'react-toastify';
import { backend_url } from '../App';

const handleCreateNewProduct = async (product, token) => {

    try {
        const response = await axios.post(`${backend_url}/api/product/create`, product, {headers: {token: token}});
      
        if (response.data.success) {
            toast.success('Produto criado com sucesso!');
            return response.data.product;

        }
        console.error('Erro ao criar produto:', response.data.message);
        toast.error('Erro ao Criar Produto. Verifique os dados e tente novamente.');
        
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // O erro veio da API. Use a mensagem de erro do servidor se disponível.
            if (error.response) {
                toast.error('Erro no servidor, tente novamente.');
            }
        } else {
            toast.error('Ocorreu um erro inesperado. Por favor, tente novamente.');
        }

        console.error(error);
    }
};
const handleListAllProducts = async () => {

    try {
        const response = await axios.get(`${backend_url}/api/product/`);
      
        if (response.data.success) {
            return response.data.products;
        }
        toast.error('Falha em listar produtos. Tente novamente.');
        
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // O erro veio da API. Use a mensagem de erro do servidor se disponível.
            if (error.response) {
                toast.error('Erro no servidor, tente novamente.');
            }
        } else {
            toast.error('Ocorreu um erro inesperado. Por favor, tente novamente.');
        }
        console.error(error.message);
    }
};
const handleRemoveFromStock = async (productId, token) => {

    try {
        const response = await axios.post(`${backend_url}/api/product/delete/stock`, {productId: productId}, {headers: {token: token}});
      
        if (response.data.success) {
            toast.success('Produto removido do estoque com sucesso!');
            return response.data.products;
        }
        toast.error('Falha. Tente novamente.');
        
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // O erro veio da API. Use a mensagem de erro do servidor se disponível.
            if (error.response) {
                toast.error('Erro no servidor, tente novamente.');
            }
        } else {
            toast.error('Ocorreu um erro inesperado. Por favor, tente novamente.');
        }
        console.error(error.message);
    }
};
export {handleCreateNewProduct, handleListAllProducts, handleRemoveFromStock};