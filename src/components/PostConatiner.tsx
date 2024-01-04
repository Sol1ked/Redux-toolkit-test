import { useState } from 'react';
import PostItem from './PostItem';
import { postAPI } from '../services/PostService';
import { IPost } from '../models/IPost';

export default function PostConatiner() {
  const [limit, setLimit] = useState(100);
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();

  const handleCreate = async () => {
    const title = prompt('Input title');
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = async (post: IPost) => {
    await deletePost(post);
  };

  const handleUpdate = async (post: IPost) => {
    await updatePost(post);
  };

  return (
    <div>
      <button onClick={handleCreate}>CreatePost</button>
      {isLoading && 'Идёт загрзука'}
      {error && 'Произошла ошибка'}
      {posts &&
        posts.map((post) => (
          <PostItem key={post.id} update={handleUpdate} remove={handleRemove} post={post} />
        ))}
    </div>
  );
}
