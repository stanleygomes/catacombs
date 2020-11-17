const query = `
  select
  	v.id
  	, v.book_id
  	, v.chapter
  	, v.verse
  	, v.text
  from verse v
  where
    1 = 1
    {{#book_id}}
    and v.book_id = :book_id
    {{/book_id}}
    {{#chapter}}
    and v.chapter = :chapter
    {{/chapter}}
    {{#text}}
    and v.text like '%:text%'
    {{/text}}
  ;
`;

export default query;
