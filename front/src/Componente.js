// Importar módulos
import React, {useState, useEffect} from 'react';

// Função
function Componente(){

    // useState
    const [vetor, setVetor] = useState([]);

    // useEffect
    useEffect(() => {
        obterDados();
    }, []);

    // Função para obter os dados da API
    const obterDados = async () => {

        const requisicao = await fetch('http://localhost:3000/dados');
        const dados = await requisicao.json();
        setVetor(dados);

    }

    // Retorno
    return(
        <table style={{width:"100%", textAlign:"center", backgroundColor:"#eee"}}>
            <thead>
                <tr>
                    <th>ID ALUNO</th>
                    <th>NOME ALUNO</th>
                    <th>CPF ALUNO</th>
                    <th>RESPONSÁVEL ALUNO</th>
                </tr>
            </thead>

            <tbody>
                {vetor.map(objeto => (
                    <tr>
                        <td>{objeto.id_aluno}</td>
                        <td>{objeto.aluno_nome}</td>
                        <td>{objeto.aluno_cpf === null ? "Não informado" : objeto.aluno_cpf}</td>
                        <td>{objeto.responsavel_nome}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}

// Exportar
export default Componente;