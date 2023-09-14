import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className=" md:w-1/3 bg-slate-400 px-5 text-center m-2 rounded-xl ">
            <h3 className="text-3xl text-white p-5 bg-purple-300 rounded-2xl mt-5 mb-2">Total Reading Time: {readingTime}</h3>
            <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;