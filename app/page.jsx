import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Your Posts</span>
    </h1>
    <p className='desc text-center'>
      VasuPosts is an open-source tool for modern world to
      discover, create and share creative Posts
    </p>

    <Feed />
  </section>
);

export default Home;
