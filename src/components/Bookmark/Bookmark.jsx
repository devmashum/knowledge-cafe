import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    const { title, author_img } = bookmark;
    return (
        <div>

            <h3 className='text-3xl p-10 bg-blue-200 rounded-xl ml-5 mb-5'>{title}</h3>

        </div >
    );
};

export default Bookmark;

Bookmark.propTypes = {
    bookmark: PropTypes.object
}