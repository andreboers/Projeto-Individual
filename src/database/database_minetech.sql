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
('André','andre@gmail.com','123');

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
create table pontuacao(
fkUsuario int,
constraint CtFkUsuario foreign key (fkUsuario) references usuario(id),
fkQuiz int,
constraint CtFkQuiz foreign key (fkQuiz) references quiz(idQuiz),
constraint PkComposta primary key (fkUsuario, fkQuiz),
qtdAcertos int,
dtResposta datetime default current_timestamp
);

insert into pontuacao (fkUsuario, fkQuiz, qtdAcertos) values
(1, 1, 3),
(3, 1, 3),
(9, 1, 1),
(5, 1, 0),
(10, 1, 2);

select * from pontuacao;

-- Select relacionando as tabelas usuario e quiz
select u.nome as 'Nome do Usuário',
	q.nomeQuiz as 'Nome do Quiz',
	p.qtdAcertos as 'Quantidade de Acertos',
    p.dtResposta as 'Data'
    from pontuacao p
    join usuario u on p.fkUsuario = u.id
    join quiz q on q.idQuiz = p.fkQuiz;
    
