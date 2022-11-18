--user roles

--creation of tables
CREATE TABLE user (
    user_id serial not NULL primary key default nextval('users_user_id_seq'::regclass),
    email varchar(256), 
    given_name varchar(128), 
    family_name varchar(128), 
    height_value double precision,
    weight_value double precision, 
    height_units varchar(5),
    weight_units varchar(5),
    age_group varchar(25),
    gender varchar(10),
    birthdate date,
    is_online boolean, 
    last_login timestamp with time zone,
    create_date timestamp with time zone,
    modified_date timestamp with time zone,
    payment_tier_id integer,
    location_id integer, 
    military_data_id integer, 
    picture_url varchar(2048), 
    refresh_token vharchar(2048)
);

CREATE TABLE mailing_list (
    email varchar(256) not NULL primary key,
    given_name varchar(128),
    family_name varchar(128),
    joined_date timestamp without time zone default now()
);

CREATE TABLE fitness_type (
    fitness_type_id integer not NULL primary key default nextval('fitness_type_fitness_type_id_seq'::regclass),
    fitness_name varchar(256),
    fitness_description varchar(2048)
);