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
('Duda','duda@gmail.com', 'Duda123'); 

select * from usuario;

-- Tabela do Quiz
create table quiz (
idQuiz int primary key auto_increment,
nomeQuiz varchar(45) not null,
qtdPerguntas int not null
);

insert into quiz (nomeQuiz, qtdPerguntas) values
('Crafting de Itens', 3);

select * from quiz;

-- Tabela Associativa entre Usuario e Quiz
create table pontuacao (
    idTentativa int primary key auto_increment not null,
    fkUsuario int not null,
    fkQuiz int not null,
    qtdAcertos int not null,
    pontuacao int not null,
    dtTentativa datetime default current_timestamp not null,
    
    foreign key (fkUsuario) references usuario(id),
    foreign key (fkQuiz) references quiz(idQuiz)
);

insert into pontuacao (fkUsuario, fkQuiz, qtdAcertos, pontuacao) values
(1, 1, 1, 10),
(2, 1, 3, 30);

select * from pontuacao;


-- Select relacionando as tabelas usuario e quiz
select u.nome as 'Nome do Usuário',
	u.email as 'Email do Usuario',
	q.nomeQuiz as 'Nome do Quiz',
	p.qtdAcertos as 'Quantidade de Acertos',
    p.pontuacao as 'Pontuacao',
    p.dtTentativa as 'Data da Tentativa'
    from pontuacao p
    join usuario u on p.fkUsuario = u.id
    join quiz q on q.idQuiz = p.fkQuiz;
    
    
-- Dashboard
-- Select para exibir o rank dos usuários com base na pontuação total    
select u.nome as ranking,
	sum(p.pontuacao) as 'Pontuação Total'
    from pontuacao p 
    join usuario u on p.fkUsuario = u.id
    join quiz q on q.idQuiz = p.fkQuiz
    group by u.nome
    order by sum(p.pontuacao) desc;

-- Select para exibir a quantidade de pontos do usuário
select u.nome as 'Nome do Usuário',
	sum(p.pontuacao) as 'Pontuação Total'
    from pontuacao p 
    join usuario u on p.fkUsuario = u.id
    join quiz q on q.idQuiz = p.fkQuiz
    group by u.nome
    having u.nome = 'André';
    
    
-- Select para exibir a média de acertos do usuário
select u.nome as 'Nome do Usuário',
    q.nomeQuiz as 'Quiz',
    round(avg(p.qtdAcertos), 1) as 'Média de Acertos'
	from pontuacao p
	join usuario u 
    on p.fkUsuario = u.id
	join quiz q 
    on p.fkQuiz = q.idQuiz
	group by u.nome, q.nomeQuiz
    having u.nome = 'Duda'
	order by u.nome, avg(p.qtdAcertos) desc;

-- Select para exibir a quantidade de tentativas
select u.nome as 'Nome do Usuário',
    count(*) as 'Total de Tentativas'
	from pontuacao p 
	join usuario u 
    on p.fkUsuario = u.id
	join quiz q 
	on q.idQuiz = p.fkQuiz
	group by u.nome
	having u.nome = 'André';
    
    

-- Gráficos
-- Select para exibir as tentativas por data do usuário
-- select u.nome as Nome,
--      date_format(dtTentativa, '%d/%m/%Y %H:%i') AS dataTentativa,
-- 		qtdAcertos
-- 		from pontuacao p
-- 		join usuario u 
--  	on u.id = p.fkUsuario
-- 		where u.nome = 'André'
--  	order by dtTentativa;
