DROP TABLE IF EXISTS quotes cascade;
CREATE TABLE quotes (
 id SERIAL,
 quotes VARCHAR(300),
 author VARCHAR(300));
ALTER TABLE quotes ADD CONSTRAINT quotes_pkey PRIMARY KEY (id);



-- DROP TABLE IF EXISTS quotes cascade;
-- CREATE TABLE quotes (
--  id SERIAL,
--  Authers_name  VARCHAR(100),
--  description VARCHAR(500),
--  category  VARCHAR(400),
--  date  INTEGER
-- );
-- ALTER TABLE quotes ADD CONSTRAINT quotes_pkey PRIMARY KEY (id);


-- DROP TABLE IF EXISTS workout cascade;
-- CREATE TABLE workout (
--  id BIGSERIAL,
--  day_of_week  INTEGER,
--  body_part  VARCHAR(300),
--  intensity  VARCHAR(300)
-- );
-- ALTER TABLE workout ADD CONSTRAINT workout_pkey PRIMARY KEY (id);


-- DROP TABLE IF EXISTS meals cascade;
-- CREATE TABLE meals  (
--  id BIGSERIAL,
--  time_of_day  INTEGER ,
--  name VARCHAR(100),
-- );
-- ALTER TABLE meals  ADD CONSTRAINT meals_pkey PRIMARY KEY (id);



-- CREATE INDEX quotes_index ON quotes(id);
-- CREATE INDEX meals_index ON meals(quotesId);
-- CREATE INDEX workout_id ON workout(id);