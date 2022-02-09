CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "email" varchar(20),
  "password" varchar(32)
);

CREATE TABLE "scores" (
  "Date" datetime,
  "Source" varchar(10),
  "Symbol" varchar(4),
  "Subjectivity" decimal,
  "Polarity" decimal
);

CREATE TABLE "holdings" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "Symbol" varchar(4),
  "Amount" int
);

CREATE TABLE "stocks" (
  "Symbol" varchar PRIMARY KEY,
  "Name" varchar
);

CREATE TABLE "transaction" (
  "id" int PRIMARY KEY,
  "holding_id" int,
  "user_id" int,
  "symbol" varchar(4),
  "Date" datetime,
  "Type" boolean,
  "Ammount" int
);

CREATE TABLE "prices" (
  "Date" datetime,
  "Symbol" varchar(4),
  "open" decimal,
  "close" decimal
);

ALTER TABLE "transaction" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "holdings" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "transaction" ADD FOREIGN KEY ("holding_id") REFERENCES "holdings" ("id");

ALTER TABLE "holdings" ADD FOREIGN KEY ("Symbol") REFERENCES "stocks" ("Symbol");

ALTER TABLE "transaction" ADD FOREIGN KEY ("symbol") REFERENCES "stocks" ("Symbol");

ALTER TABLE "scores" ADD FOREIGN KEY ("Symbol") REFERENCES "stocks" ("Symbol");
