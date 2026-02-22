const query = `
  select
    b.name as book_name
    , v.book_id
    , v.chapter
    , count(v.id) as qty_verse
  from verse v
  join book b on
    b.id = v.book_id
  where
    1 = 1
    {{#book_id}}
    and v.book_id = :book_id
    {{/book_id}}
  group by
    b.name
    , v.book_id
    , v.chapter
  ;
`;

export default query;
