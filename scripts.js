function enviarWhatsApp() {
    // Seleciona os elementos dentro da seção clicada
    const section = event.target.closest('section');
    const escala = section.querySelector('#escala').value;
    const velocidade = section.querySelector('#velocidade').value;
    const recomendacoes = section.querySelector('#recomendacoes').value;

    // Verificar se os campos obrigatórios estão preenchidos
    if (!escala || !velocidade || !recomendacoes) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Formatar a mensagem
    const mensagemFormatada = `
*Solicitação enviada através do site:*
------------------------------------
*Escala:* ${escala}
*Velocidade:* ${velocidade}
*Recomendações:* ${recomendacoes}
------------------------------------
_Obrigado por usar nosso serviço!_
`;

    // Codificar a mensagem
    const mensagemCodificada = encodeURIComponent(mensagemFormatada);

    // Criar o link do WhatsApp (com código de país +244 para Angola)
    const whatsappLink = `https://api.whatsapp.com/send?phone=+244943921562&text=${mensagemCodificada}`;

    // Abrir o link
    window.open(whatsappLink, '_blank');
}
