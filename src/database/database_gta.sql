create database gta;

use gta;

create table usuario(
id int primary key auto_increment,
nome varchar(100),
email varchar(50) unique,
senha varchar(50)
);

insert into usuario (nome, email, senha) values
('André','andre@gmail.com','123');

select * from usuario;

truncate table usuario;
