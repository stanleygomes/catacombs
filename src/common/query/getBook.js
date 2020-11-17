const query = `
  select
    b.id
    , b.name
    , count(*) as qty_chapter
  from book b
  join (
    select
      book_id
      , chapter
    from verse v
    group by
      book_id
      , chapter
  ) cc on
    cc.book_id = b.id
  where
    1 = 1
    {{#name}}
    and b.name like '%:name%'
    {{/name}}
  group by
    b.id
    , b.name
  order by
    b.position
  asc
`;

export default query;
