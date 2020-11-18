const query = `
  select
    b.name as book_name
  	, v.id
  	, v.book_id
  	, v.chapter
  	, v.verse
  	, v.text
  from verse v
  join book b on
    b.id = v.book_id
  where
    1 = 1
  order by
  	random()
  limit 1
  ;
`;

export default query;
