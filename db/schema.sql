DB create 

USE ;

department //first
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

role//second
CREATE TABLE roles (
    id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT(10) NOT NULL,
    PRIMARY KEY (id)
);

then tables
employee//create last
CREATE TABLE employees (
    id INT(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT(10),
    PRIMARY KEY (id)
)



CONSTRAINT FK_TempSales_SalesReason FOREIGN KEY (TempID) REFERENCES Sales.SalesReason (SalesReasonID) ON DELETE CASCADE
