import { FC } from 'react';
import { IPost } from '../models/IPost';

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post);
  };

  const handleUpdate = () => {
    const title = prompt() || '';
    update({ ...post, title });
  };

  return (
    <div>
      <span>
        {post.id} {post.title}
      </span>
      <button onClick={handleRemove}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default PostItem;
