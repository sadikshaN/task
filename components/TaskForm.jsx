import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TaskForm = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, description, createdAt: new Date().toISOString() });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <CKEditor
                    editor={ClassicEditor}
                    data={description}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setDescription(data);
                    }}
                />
            </div>
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;
