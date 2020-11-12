import http from './http';

const getPosts = () => {
  return new Promise((resolve, reject) => {
    const endpoint = 'stanley.gomes/?__a=1';

    http
      .get(endpoint, {})
      .then(response => {
        const { data } = response;
        const posts = data.graphql.user.edge_owner_to_timeline_media.edges;

        const returnPosts = posts.map(item => {
          return {
            id: item.node.id,
            thumbnail: item.node.thumbnail_src,
            photo: item.node.display_url,
            text: item.node.edge_media_to_caption.edges[0].node.text,
          };
        });

        const filterPosts = returnPosts.filter((item, index) => index < 5);

        resolve(filterPosts);
      })
      .catch(error => reject(error));
  });
};

export default {
  getPosts,
};
