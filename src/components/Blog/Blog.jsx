import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { reading_time, author, title, cover, author_img, posted_date, hashtags } = blog;
    return (
        <div className=" mb-20">
            <img className=" w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
            <div className=" flex justify-between mb-4">
                <div className="flex justify-center items-center">
                    <div><img className="w-16" src={author_img} alt=" " /></div>
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className=' ml-2 text-red-400'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button className='bg-blue-200 p-5 rounded-lg font-extrabold text-2xl' onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func

}

export default Blog;