CREATE DATABASE university;
CREATE TABLE departament
(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
create table team
    (
    id INT AUTO_INCREMENT,
    departament_id INT NOT NULL,
    number INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (departament_id)
    REFERENCES departament(id)
);
create table student
(
    id INT AUTO_INCREMENT,
    team_id INT NOT NULL,
    full_name VARCHAR(255),
    age TINYINT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (team_id)
    REFERENCES team(id)
);

INSERT INTO departament set name = 'DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING';
INSERT INTO departament set name = 'ECONOMIC DEPARTMENT';
INSERT INTO departament set name = 'RADIO ENGINEERING FACULTY';

INSERT INTO team set departament_id = 1, number = 11;
INSERT INTO team set departament_id = 1, number = 12;
INSERT INTO team set departament_id = 1, number = 13;
INSERT INTO team set departament_id = 2, number = 11;
INSERT INTO team set departament_id = 2, number = 12;
INSERT INTO team set departament_id = 2, number = 13;
INSERT INTO team set departament_id = 3, number = 11;
INSERT INTO team set departament_id = 3, number = 12;
INSERT INTO team set departament_id = 3, number = 13;

INSERT INTO student set team_id = 1, full_name = 'Кузьмина Елизавета Ильинична', age = 18;
INSERT INTO student set team_id = 1, full_name = 'Михайлов Иван Сергеевич', age = 18;
INSERT INTO student set team_id = 1, full_name = 'Данилова Анна Михайловна', age = 19;
INSERT INTO student set team_id = 1, full_name = 'Чернова Варвара Ивановна', age = 17;
INSERT INTO student set team_id = 1, full_name = 'Казакова Милана Романовна', age = 20;
INSERT INTO student set team_id = 2, full_name = 'Гончаров Владислав Артёмович', age = 20;
INSERT INTO student set team_id = 2, full_name = 'Харитонов Артём Павлович', age = 20;
INSERT INTO student set team_id = 2, full_name = 'Денисов Владимир Иванович', age = 19;
INSERT INTO student set team_id = 2, full_name = 'Сычева Юлия Артёмовна', age = 17;
INSERT INTO student set team_id = 2, full_name = 'Терентьева Алиса Захаровна', age = 18;
INSERT INTO student set team_id = 3, full_name = 'Лебедев Кирилл Степанович', age = 18;
INSERT INTO student set team_id = 3, full_name = 'Кузьмина Елизавета Ильинична', age = 19;
INSERT INTO student set team_id = 3, full_name = 'Данилова Анна Михайловна', age = 18;
INSERT INTO student set team_id = 3, full_name = 'Чернова Варвара Ивановна', age = 18;
INSERT INTO student set team_id = 3, full_name = 'Петухов Алексей Леонович', age = 17;
INSERT INTO student set team_id = 4, full_name = 'Лебедев Кирилл Степанович', age = 18;
INSERT INTO student set team_id = 4, full_name = 'Кузьмина Елизавета Ильинична', age = 18;
INSERT INTO student set team_id = 4, full_name = 'Данилова Анна Михайловна', age = 18;
INSERT INTO student set team_id = 4, full_name = 'Чернова Варвара Ивановна', age = 19;
INSERT INTO student set team_id = 4, full_name = 'Петухов Алексей Леонович', age = 18;
INSERT INTO student set team_id = 5, full_name = 'Лебедев Кирилл Степанович', age = 18;
INSERT INTO student set team_id = 5, full_name = 'Кузьмина Елизавета Ильинична', age = 18;
INSERT INTO student set team_id = 5, full_name = 'Данилова Анна Михайловна', age = 17;
INSERT INTO student set team_id = 5, full_name = 'Чернова Варвара Ивановна', age = 18;
INSERT INTO student set team_id = 5, full_name = 'Петухов Алексей Леонович', age = 18;
INSERT INTO student set team_id = 6, full_name = 'Лебедев Кирилл Степанович', age = 18;
INSERT INTO student set team_id = 6, full_name = 'Кузьмина Елизавета Ильинична', age = 18;
INSERT INTO student set team_id = 6, full_name = 'Данилова Анна Михайловна', age = 18;
INSERT INTO student set team_id = 6, full_name = 'Чернова Варвара Ивановна', age = 18;
INSERT INTO student set team_id = 6, full_name = 'Петухов Алексей Леонович', age = 18;
INSERT INTO student set team_id = 8, full_name = 'Лебедев Кирилл Степанович', age = 18;
INSERT INTO student set team_id = 8, full_name = 'Кузьмина Елизавета Ильинична', age = 18;
INSERT INTO student set team_id = 8, full_name = 'Данилова Анна Михайловна', age = 17;
INSERT INTO student set team_id = 8, full_name = 'Чернова Варвара Ивановна', age = 18;
INSERT INTO student set team_id = 8, full_name = 'Петухов Алексей Леонович', age = 19;
INSERT INTO student set team_id = 9, full_name = 'Лебедев Кирилл Степанович', age = 18;
INSERT INTO student set team_id = 9, full_name = 'Кузьмина Елизавета Ильинична', age = 18;
INSERT INTO student set team_id = 9, full_name = 'Данилова Анна Михайловна', age = 18;
INSERT INTO student set team_id = 9, full_name = 'Чернова Варвара Ивановна', age = 21;
INSERT INTO student set team_id = 9, full_name = 'Петухов Алексей Леонович', age = 18;
INSERT INTO student set team_id = 10, full_name = 'Лебедев Кирилл Степанович', age = 18;
INSERT INTO student set team_id = 10, full_name = 'Кузьмина Елизавета Ильинична', age = 23;
INSERT INTO student set team_id = 10, full_name = 'Данилова Анна Михайловна', age = 18;
INSERT INTO student set team_id = 10, full_name = 'Чернова Варвара Ивановна', age = 22;
INSERT INTO student set team_id = 10, full_name = 'Петухов Алексей Леонович', age = 18;

SELECT * FROM student WHERE age = 19;
SELECT * FROM student WHERE team_id = 1;
SELECT * FROM student JOIN team ON student.team_id = team.id WHERE team.departament_id = 1;
SELECT 
    student.team_id AS 'Group', 
    team.departament_id AS 'Departament' 
FROM 
    student 
JOIN 
    team 
ON 
    student.team_id = team.id 
WHERE 
    student.id = 5;