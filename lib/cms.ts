const delay = (time: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, time);
  });
};

export const getAllPosts = async () => {
  await delay(1000);

  return Array.from({ length: 10 }).map((_, i) => {
    return {
      id: i,
      title: `This is post ${i}`,
      slug: `this-is-post-${i}`,
      body: 'blahhhhh',
    };
  });
};
