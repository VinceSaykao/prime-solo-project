-- db is independant_living_service


create table "user" (
"id" serial primary key,
"username" varchar(80),
"password" varchar(80),
"employee_firstname" varchar(100),
"employee_lastname" varchar(100)
);


create table timesheet (
"id" serial primary key,
"user_id" int references "user",
"client_id" int references "clients",
"date" date,
"client_name" varchar(80),
"in" varchar(80),
"out" varchar(80),
"mileage" int,
"notes" varchar(2000)
);

create table clients (
"id" serial primary key,
"client_fullname" varchar(80),
"address" varchar (200),
"age" int,
"phone" int,
"hobbies" varchar(2000),
"history" varchar (2000),
"image_url" varchar (20000),
"other" varchar (10000)
);