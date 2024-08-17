# SQL Database Init Queries

Create questionnaire_questionnaires table:
```
CREATE TABLE questionnaire_questionnaires (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);
```

Create questionnaire_questions table:
```
CREATE TABLE questionnaire_questions (
    id SERIAL PRIMARY KEY,
    question JSONB -- Using JSONB to store JSON as binary for efficient storage/querying of JSON data
);
```

Create questionnaire_junction table:
```
CREATE TABLE questionnaire_junction (
    id SERIAL PRIMARY KEY,
    question_id INTEGER REFERENCES questionnaire_questions(id),
    questionnaire_id INTEGER REFERENCES questionnaire_questionnaires(id),
    priority INTEGER
);
```

Load data from CSVs to Vercel postgres database in the terminal:
1. Connect to postgres database: `psql "postgres://default:ex6n9KTFsPCg@ep-icy-hall-a4en3m4m.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"`
2. Import data from CSV files:

questionnaire_questionnaires table:

`\copy questionnaire_questionnaires from '/Users/brandenbasche/Desktop/development/bioverse-intake-questionnaire-assessment/assets/questionnaire_questionnaires.csv' delimiter ',' CSV HEADER;`

questionnaire_questions table:

`\copy questionnaire_questions from '/Users/brandenbasche/Desktop/development/bioverse-intake-questionnaire-assessment/assets/questionnaire_questions.csv' delimiter ',' CSV HEADER;`

questionnaire_junction table:

`\copy questionnaire_junction from '/Users/brandenbasche/Desktop/development/bioverse-intake-questionnaire-assessment/assets/questionnaire_junction.csv' delimiter ',' CSV HEADER;`

Create users table:

```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE, 
    name VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    user_type VARCHAR(10) NOT NULL DEFAULT 'user' CHECK (user_type IN ('user', 'admin'))
);
```

Create user_responses table:
```
CREATE TABLE user_responses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  questionnaire_id INTEGER REFERENCES questionnaire_questionnaires(id),
  question_id INTEGER REFERENCES questionnaire_questions(id),
  response JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);
```
