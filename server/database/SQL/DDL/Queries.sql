--user roles

--TODO: foreign keys, on update cascades, check if integers should be serials, etc

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
    fitness_type_id serial not NULL primary key default nextval('fitness_type_fitness_type_id_seq'::regclass),
    fitness_name varchar(256),
    fitness_description varchar(2048)
);

CREATE TABLE activity_detail (
    activity_detail_id serial not NULL primary key default nextval('activity_detail_activity_detail_id_seq'::regclass),
    activity_name varchar(256),
    short_description varchar(1024),
    long_description varchar(2048),
    create_date timestamp without time zone,
    modified_date timestamp without time zone,
    fitness_type_id integer
);

CREATE TABLE activity_data (
    activity_data_id serial not NULL primary key default nextval('activity_data_activity_data_id_seq'::regclass),
    amount double precision, 
    units varchar(16),
    start_time timestamp without time zone,
    duration varchar(16),
    end_time timestamp without time zone,
    create_date timestamp without time zone default now(),
    modified_date timestamp without time zone default now(),
    user_id integer, 
    activity_detail_id integer, 
    location_id integer
);

CREATE TABLE military_data (
    military_data_id serial not NULL primary key, 
    military_service varchar(128),
    bde varchar(128),
    division varchar(128),
    military_unit varchar(128),
    grade varchar(128)
);

CREATE TABLE user_health_info (
    user_health_info_id serial not NULL primary key,
    weight_value integer,
    weight_units varchar(16),
    body_mass_index integer, 
    is_injured boolean, 
    user_id integer
);

CREATE TABLE group_member (
    group_member_id serial not NULL primary key, 
    create_date date, 
    group_id integer, 
    user_id integer,
    group_user_permission_id integer
);

CREATE TABLE group_member_permission (
    group_member_permission_id serial not NULL primary key,
    permission_type varchar(128),
    edit_group_access boolean,
    add_challenge_access bolean
);

CREATE TABLE group (
    group_id serial not NULL primary key,
    group_name varchar(128),
    short_description varchar(1024),
    long_description varchar(2048),
    create_date timestamp without time zone,
    modified_date timestamp without time zone,
    location_id integer, 
    group_type_id integer
);

CREATE TABLE group_type (
    group_type_id serial not NULL primary key,
    group_type_name varchar(128),
    group_type_description varchar(256),
    competetiveness integer,
    activeness integer,
    competition_frequency integer,
    ongoing_competition_limit integer
);