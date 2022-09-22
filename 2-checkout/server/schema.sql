CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (
  id integer auto_increment,
  sessionID char(255),
  name char(255),
  email char(255),
  password char(255),
  address varchar(400),
  phone char(50),
  creditCard char(25),
  expiry char(10),
  ccv char(3),
  billingZip char(5),
  primary key (id)
);