create database minetech;

use minetech;

-- Tabela de Usuarios
create table usuario(
id int primary key auto_increment,
nome varchar(100) not null,
email varchar(50) unique not null,
senha varchar(50) not null
);

insert into usuario (nome, email, senha) values
('André','andre@gmail.com','123'),
('Daniel','daniel@gmail.com','123'),
('Kauan','kauan@gmail.com','123'),
('Nicolly','nicolly@gmail.com','123'),
('Kauany','kauany@gmail.com','123');

select * from usuario;

-- Tabela do Quiz
create table quiz (
idQuiz int primary key auto_increment,
nomeQuiz varchar(45),
qtdPerguntas int
);

insert into quiz (nomeQuiz, qtdPerguntas) values
('Crafting de Itens', 3);

select * from quiz;

-- Tabela Associativa entre Usuario e Quiz
CREATE TABLE pontuacao (
    idTentativa int primary key auto_increment,
    fkUsuario int,
    fkQuiz int,
    qtdAcertos int,
    dtTentativa datetime default current_timestamp,
    foreign key (fkUsuario) references usuario(id),
    foreign key (fkQuiz) references quiz(idQuiz)
);

insert into pontuacao (fkUsuario, fkQuiz, qtdAcertos) values
(1, 1, 1),
(1, 1, 3),
(2, 1, 0),
(3, 1, 3),
(3, 1, 2),
(4, 1, 0),
(5, 1, 2);

select * from pontuacao;

-- Select relacionando as tabelas usuario e quiz
select u.nome as 'Nome do Usuário',
	u.email as 'Email do Usuário',
	q.nomeQuiz as 'Nome do Quiz',
	p.qtdAcertos as 'Quantidade de Acertos',
    p.dtTentativa as 'Data'
    from pontuacao p
    join usuario u on p.fkUsuario = u.id
    join quiz q on q.idQuiz = p.fkQuiz;
    
