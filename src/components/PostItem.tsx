import { FC } from 'react';
import { IPost } from '../models/IPost';

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      <span>
        {post.id} {post.title}
      </span>
      <button>Delete</button>
    </div>
  );
};

export default PostItem;
