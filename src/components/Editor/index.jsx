import React from 'react';
import ReactQuill from "react-quill";
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
const Index = () => {
    const [content, setContent] = useState('Hello World 😊')
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: ['small', 'large'] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }, 'link']
        ]
    };
    const onChangeContent = (value) => {
        setContent(value);
    };
    return (
        <div className='flex flex-col w-full h-full items-center justify-center gap-3 px-5 overflow-auto my-8'>
            <div className='flex text-center text-3xl font-bold'>Collabowrite Text Editor</div>
            <div className=''>
                <div>
                    <ReactQuill
                        className="h-[15rem] w-full"
                        theme='snow'
                        formats={['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link']}
                        placeholder="Write something amazing..."
                        modules={modules}
                        value={content}
                        onChange={onChangeContent}
                    />
                </div>
                <div className='mt-12'>
                    <h2 className="text-xl font-bold">Preview</h2>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </div>
    );
}
export default Index;