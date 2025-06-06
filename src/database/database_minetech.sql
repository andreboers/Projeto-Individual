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
create view exibirRanking as 
select u.nome as ranking,
	sum(p.pontuacao) as pontuacaoTotal
    from pontuacao p 
    join usuario u on p.fkUsuario = u.id
    join quiz q on q.idQuiz = p.fkQuiz
    group by u.nome
    order by sum(p.pontuacao) desc;
    
select * from exibirRanking;

-- Select para exibir a quantidade de pontos do usuário
create view exibirPontuacao as
select u.id as IdUsuario,
	u.nome as Nome,
	sum(p.pontuacao) as pontuacaoTotal
    from pontuacao p 
    join usuario u on p.fkUsuario = u.id
    join quiz q on q.idQuiz = p.fkQuiz
    group by u.id;

select * from exibirPontuacao where idUsuario = 1;

-- Select para exibir a média de acertos do usuário
create view mediaDeAcertos as
    select
		u.id as idUsuario,
		u.nome as Nome,
		q.nomeQuiz as NomeQuiz,
		round(avg(p.qtdAcertos), 1) as MediaAcertos,
		round((avg(p.qtdAcertos) / 3) * 100, 1) as Media
		from pontuacao p
		join usuario u on p.fkUsuario = u.id
		join quiz q on p.fkQuiz = q.idQuiz
		group by u.id, q.nomeQuiz;

select * from mediaDeAcertos where idUsuario = 1;

-- Select para exibir a quantidade de tentativas
create view exibirTentativas as
select 
	u.id as idUsuario,
	u.nome as Nome,
    count(*) as tentativas
	from pontuacao p 
	join usuario u 
    on p.fkUsuario = u.id
	join quiz q 
	on q.idQuiz = p.fkQuiz
	group by u.id;
    
select * from exibirTentativas where idUsuario = 6;

-- Gráficos
-- Select para exibir as tentativas de cada usuário em um gráfico de barras
create view tentativaPorUsuario as 
select 
	u.id as idUsuario,
	u.nome as Nome,
	count(idTentativa) as Tentativas
	from pontuacao p
    join usuario u 
  	on u.id = p.fkUsuario
  	group by u.id;

select * from tentativaPorUsuario;

-- Select para mostrar a quantidade de acertos por tentativa do usuário
create view exibirAcertosPorTentativa as
select 
	u.id as idUsuario,
	u.nome as Nome,
	count(idTentativa) as Tentativa,
	p.qtdAcertos as Acertos,
    DATE_FORMAT(p.dtTentativa, '%d/%m/%Y') AS dataTentativa
    from pontuacao p
    join usuario u
    on u.id = p.fkUsuario
    group by u.id, u.nome, qtdAcertos, dtTentativa
    order by p.dtTentativa desc;
    
    select * from exibirAcertosPorTentativa where idUsuario = 6;