
SELECT L.Titulo, A.Nome_Autor, E.Nome_Editora, L.Status
FROM LIVRO L
JOIN AUTOR A ON L.ID_Autor = A.ID_Autor
JOIN EDITORA E ON L.ID_Editora = E.ID_Editora;

SELECT L.Titulo, M.Nome AS Nome_Membro, EMP.Data_Retirada, EMP.Data_Prevista
FROM EMPRESTIMO EMP
JOIN LIVRO L ON EMP.ISBN = L.ISBN
JOIN MEMBRO M ON EMP.ID_Membro = M.ID_Membro
WHERE L.Status = 'Emprestado';

SELECT Titulo, Ano_Publicacao 
FROM LIVRO 
WHERE ID_Autor = (SELECT ID_Autor FROM AUTOR WHERE Nome_Autor = 'C.S. Lewis')
AND Status = 'Disponível';

SELECT * FROM EMPRESTIMO 
ORDER BY Data_Retirada DESC;

UPDATE MEMBRO 
SET Telefone = '11900009999' 
WHERE Nome = 'Maria Souza';

UPDATE LIVRO 
SET Status = 'Disponível' 
WHERE ISBN = '9788527500002';

UPDATE EMPRESTIMO 
SET Data_Real = CURDATE()
WHERE ISBN = '9788527500002' AND ID_Membro = 1;

DELETE FROM MEMBRO 
WHERE Nome = 'Pedro Santos';

DELETE FROM LIVRO 
WHERE ISBN = '9788562877004';

INSERT INTO EDITORA (Nome_Editora) VALUES ('Editora Teste');
DELETE FROM EDITORA 
WHERE Nome_Editora = 'Editora Teste';