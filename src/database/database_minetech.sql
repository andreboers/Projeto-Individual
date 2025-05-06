create database minetech;

use minetech;

create table usuario(
id int primary key auto_increment,
nome varchar(100) not null,
email varchar(50) unique not null,
senha varchar(50) not null
);

insert into usuario (nome, email, senha) values
('André','andre@gmail.com','123');

select * from usuario;

truncate table usuario;
