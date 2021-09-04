---
title: 7 Steps to SQL Optimization Mastery
date: '2019-12-28'
spoiler: Today, i’ll show you some query optmization tricks to write better SQL queries
tags: sql
published: true
---

Today, i’ll show you some query optmization tricks to write better SQL queries. By the way, I'm not gonna make you an actual Jedi SQL master by reading this article, but you're on the way. 😬

![Do better SQL queries you should. Photo from hypable.com](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/sql-mastery%2F1_MoCUGx7Wm4KOpnzsCHgmpw.jpeg?alt=media&token=5b351ca9-e3a0-42c1-ad08-7113ffcde8bf)
*Do better SQL queries you should. Photo from hypable.com*

One of the most important reasons we store data into a database is about performance to access it and using SQL give you the ability to do it easily. However, if you don't show the best way to get the data, your DBMS may look for the longest one. 

Let's get started.

## 1. Selected columns matter

When a query is executed, all that data returned is loaded right into your RAM and carried by network. Sometimes, it may be a lot of data. When you don't tell to the DBMS wich columns you want, it goes to the table schema to check all the available fields.

```sql
-- don't 🚫
SELECT
  *
FROM user;

-- do ✅
SELECT
  id,
  name,
  email
FROM user;
```

## 2. Avoid subselect as column

When we write a subquery into selected columns every record do the same query to get results inefficiently.

```sql
SELECT
  u.id,
  u.name,
  (
    SELECT
      p.description
    FROM profile p
    WHERE
      p.id = u.profile_id
  ) as profile
FROM user u;
```

You can replace this case, using join wich is faster, using indexes to relate data.

```sql
SELECT
  u.id,
  u.name,
  u.email,
  p.description
FROM user u
JOIN profile p ON
  p.id = u.profile_id;
```

## 3. Performance on strings

There's some different kinds of ways to describe a string column in a table, such as: `char`, `varchar` and `text`.

A `char` field has a fixed size and it's easier for DBMS to index it. On the other hand, `varchar` has flexibility, wich has a price to pay, less performance.

Lastly, please don't use `text` columns do compare information.

## 4. You may want to use views

Views are pre-processed queries They help database managers to secure some sensitive information and be more productive.

Indexed (materialized) views have almost the same performance as a native table, but having only information for your scenario needs.

Look how easy is to create a materialized view:

```sql
CREATE MATERIALIZED VIEW user_profile AS
SELECT
  u.id,
  u.name,
  u.email,
  p.id as profile_id,
  p.description as profile_description
FROM user u
JOIN profile p ON
  p.id = u.profile_id;
```

Remember to update the view when data of evolved tables changes.

```sql
REFRESH MATERIALIZED VIEW user_profile;
```

## 5. I think therefore I am 🤔

Use `EXISTS` or `NOT EXISTS` instead of `IN` or `NOT IN`. Depending on amount of data you have in the table, first option tends to be faster.

Take a look at an example using a `IN` clause:

```sql
SELECT
  u.id
FROM user u
WHERE
  u.profile_id in (
    SELECT
      id
    FROM profile p
    WHERE
      p.active = true
  )
```

Now, replaced by `EXISTS`:

```sql
SELECT
  u.id
FROM user u
WHERE
  EXISTS (
    SELECT
      1
    FROM profile p
    WHERE
      p.id = u.profile_id
      AND p.active = true
)
```

## 6. Bulk Insert

When you want to insert a lot of lines in a table at once, take a look at the bulk insert concept.

This is how you do before 😰:

```sql
INSERT INTO user (name, email)
VALUES ('Han Solo', 'han@solo.com')

INSERT INTO user (name, email)
VALUES ('Anakin Skywalker', 'anakin@skywalker.com')
```

And how you do from now 😀:

```sql
INSERT INTO user (name, email)
VALUES
('Han Solo', 'han@solo.com'),
('Anakin Skywalker', 'anakin@skywalker.com')
```

This way, batches of data are inserted at once, providing more eficience. 

## 7. Indexes

Using indexes on your foreign keys and comparing columns makes the queries faster.

Let's dive into a sample:

```sql
SELECT
  u.name,
  u.email
FROM user u
WHERE
  --create a index here
  u.active = true;
```

Another one:

```sql
SELECT
  u.name,
  u.email
FROM user u
JOIN profile p ON
  --create a index here
  p.id = u.profile_id
```

Last one:

```sql
SELECT
  u.name,
  u.email
FROM user u
--create a index here
ORDER BY profile_id DESC, active ASC
```

And this is how to create an index:

```sql
CREATE INDEX ON user (profile_id);

-- you can create a multi column index
CREATE INDEX ON user (profile_id, active);
```

Indexes are great for select clauses, but not so good for insert and update. So use it carefully.

## 8. Bonus

Avoid unnecessary DISTINCT, GROUP BY e ORDER BY, these keywords have a big impact of query performance result. 🤯

And that's it for today. Hope you can do better queries using these tips.

Part of knowledge presented here I learned with my sith master [Wagner Martinez](https://www.linkedin.com/in/wagner-silva-martinez-jr-609b7713) 🧠.

Thanks for reading. Good luck! 🖖
