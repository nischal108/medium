

const CreateBlog = () => {
    return (
        <div className="flex items-center  py-3 px-2 flex-col">
            <input type="text" placeholder="Title" className="w-7/12 h-4/12 text-5xl outline-none px-4 py-2" />

            <textarea className="w-7/12 h-7/12 outline-none text-2xl resize-none px-4 py-2" placeholder="Tell your story...." rows={22}></textarea>
        </div>
    )
}

export default CreateBlog