document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && todoInput.value.trim() !== '') {
            addTodoItem(todoInput.value.trim());
            todoInput.value = ''; // Clear the input field
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        // Placeholder for checkbox (will be added in a later step)
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            // Placeholder for marking as complete (will be implemented later)
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        // Placeholder for delete button (will be added in a later step)
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            // Placeholder for deleting todo (will be implemented later)
            li.remove();
        });

        li.prepend(checkbox); // Add checkbox before the text
        li.appendChild(deleteButton); // Add delete button after the text
        todoList.appendChild(li);
    }

    const allFilter = document.getElementById('allFilter');
    const activeFilter = document.getElementById('activeFilter');
    const completedFilter = document.getElementById('completedFilter');

    allFilter.addEventListener('click', () => {
        filterTodos('all');
    });

    activeFilter.addEventListener('click', () => {
        filterTodos('active');
    });

    completedFilter.addEventListener('click', () => {
        filterTodos('completed');
    });

    function filterTodos(filterType) {
        const items = todoList.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            switch (filterType) {
                case 'all':
                    item.style.display = ''; // Show item
                    break;
                case 'active':
                    if (item.classList.contains('completed')) {
                        item.style.display = 'none'; // Hide completed
                    } else {
                        item.style.display = ''; // Show active
                    }
                    break;
                case 'completed':
                    if (item.classList.contains('completed')) {
                        item.style.display = ''; // Show completed
                    } else {
                        item.style.display = 'none'; // Hide active
                    }
                    break;
            }
        }
    }
});
