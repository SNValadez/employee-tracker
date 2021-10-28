CREATE TABLE department (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER
    FOREIGN KEY (department_id)
        REFERENCES role (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL
    FOREIGN KEY (role_id)
        REFERENCES employee (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    manager_id INTEGER
    FOREIGN KEY (manager_id)
        REFERENCES employee (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE 
);