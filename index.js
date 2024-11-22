console.log(this);
testeThis.bind({ nome: 'testeBind' })();
function testeThis() {
    console.log('this da funcao', this);
}

function Mensagem(autor, conteudo) {
    if (autor === null || autor === '') {
        throw Error('autor é obrigatório');
    }

    if (conteudo === null || conteudo === '') {
        throw Error('autor é obrigatório');
    }

    this.autor = autor;
    this.conteudo = conteudo;
}

function MensagemCurta(autor, conteudo) {
    Mensagem.call(this, autor, conteudo);
}

MensagemCurta.prototype = Object.create(Mensagem.prototype);
MensagemCurta.prototype.constructor = MensagemCurta;

var mensagens = [
    new Mensagem('Abraham Lincoln', 'O êxito da vida não se mede pelo caminho que você conquistou, mas sim pelas dificuldades que superou no caminho.'),
    new MensagemCurta('Augusto Branco', 'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.'),
    { autor: 'Aristóteles', conteudo: 'O erro acontece de vários modos, enquanto ser correto é possível apenas de um modo.' },
    { autor: 'Mark Twain', conteudo: 'Sempre que você se encontra do lado da maioria, é hora de parar e refletir.' },
]

function populaMensagem(mensagem) {
    document.querySelector('div.letter h1').innerHTML = mensagem.autor;
    document.querySelector('p#mensagem').innerHTML = mensagem.conteudo;
}

function proximaMensagem() {
    var msg = mensagens.pop();
    mensagens.unshift(msg);
    return msg;
}

function atualizaMensagem() {
    var msg = proximaMensagem();
    populaMensagem(msg);
}

function registraIntervaloMsg() {
    return setInterval(atualizaMensagem, 5000);
}

window.onload = function() {
    registraIntervaloMsg();
    console.log('window.onload this', this);
};