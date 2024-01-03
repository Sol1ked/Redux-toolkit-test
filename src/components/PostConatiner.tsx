import PostItem from './PostItem';
import { useFetchAllPostsQuery } from '../services/PostService';

export default function PostConatiner() {
  const { data: posts } = useFetchAllPostsQuery(5);
  return <div>{posts && posts.map((post) => <PostItem key={post.id} post={post} />)}</div>;
}
