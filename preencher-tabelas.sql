
INSERT INTO AUTOR (Nome_Autor, Nacionalidade) VALUES 
('C.S. Lewis', 'Inglês'),
('Timothy Keller', 'Americano'),
('Agostinho de Hipona', 'Romano/Africano'),
('R.C. Sproul', 'Americano');

INSERT INTO EDITORA (Nome_Editora) VALUES 
('Thomas Nelson Brasil'),
('Vida Nova'),
('Editora Fiel');

INSERT INTO LIVRO (ISBN, Titulo, Ano_Publicacao, Status, ID_Autor, ID_Editora) VALUES 
('9788578600001', 'Cristianismo Puro e Simples', 2017, 'Disponível', 1, 1),
('9788527500002', 'A Cruz do Rei', 2013, 'Emprestado', 2, 2),
('9788578600003', 'As Crônicas de Nárnia', 2009, 'Disponível', 1, 1),
('9788562877004', 'Confissões', 2018, 'Disponível', 3, 3),
('9788562877005', 'A Santidade de Deus', 2012, 'Emprestado', 4, 3);

INSERT INTO MEMBRO (Nome, CPF, Telefone, Email, Endereco) VALUES 
('João Silva', '12345678901', '11999990001', 'joao@email.com', 'Rua das Oliveiras, 10'),
('Maria Souza', '98765432100', '11988880002', 'maria@email.com', 'Av. da Paz, 500'),
('Pedro Santos', '11122233344', '11977770003', 'pedro@email.com', 'Rua da Fé, 33');

INSERT INTO EMPRESTIMO (Data_Retirada, Data_Prevista, ID_Membro, ISBN) VALUES 
('2025-02-01', '2025-03-01', 1, '9788527500002'),
('2025-02-10', '2025-03-10', 2, '9788562877005');
