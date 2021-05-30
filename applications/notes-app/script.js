const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="notes">
        <div class="tools">
            <button class="edit">
                <i class="far fa-edit"></i>
            </button>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        <div class="main hidden">
        </div>
        <textarea></textarea>
    </div>
    `;

    const notesEl = note.querySelector('.notes');
    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');

    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', () => {
        note.remove();
    });

    textarea.addEventListener('input', (e) => {
        const { value } = e.target; // js destructuring
        // same as value = e.target.value
        main.innerHTML = marked(value);
    });

    document.body.appendChild(note);
}

