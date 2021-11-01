USE employees;

INSERT INTO department(name) VALUES 
    ("Books"), 
    ("Shoes"),
    ("Legal"),
    ("Toys");

INSERT INTO role(title, salary, department_id) VALUES
    ("Book Sorter", 18000, 1),
    ("Shoe Stocker", 20000, 2),
    ("Lawyer", 80000, 3),
    ("Toy Maker", 60000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES
    ("Joseph", "Campbell", 3, null),
    ("Michael", "Cromwell", 2, 2),
    ("Cheryl", "Kennedy", 4, null),
    ("Faherty", "Raines", 3, 2),
    ("Ghillie", "Herde", 1, null);



