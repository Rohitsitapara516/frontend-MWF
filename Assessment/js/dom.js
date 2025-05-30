 const todoForm = document.getElementById('todoForm'); // The form element
    const todoInput = document.getElementById('todoInput'); // Input field for new todo text
    const todoList = document.getElementById('todoList'); // UL element to hold todo list items
    const cookieName = 'todos';

    function getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(name + '=')) {
          return decodeURIComponent(cookie.substring(name.length + 1));
        }
      }
      return null;
    }

     function setCookie(name, value, days) {
      let expires = '';
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

     function renderTodos(todos) {
    
      todoList.innerHTML = '';
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo;
        todoList.appendChild(li);
      });
    }

    function loadTodos() {
      const cookieVal = getCookie(cookieName);
      if (cookieVal) {
        try {
          const parsed = JSON.parse(cookieVal);
          if (Array.isArray(parsed)) {
            return parsed;
          }
        } catch (e) {
          
        }
      }
      return [];
    }

    function saveTodos(todos) {
      setCookie(cookieName, JSON.stringify(todos), 7); 
    }
    let todos = loadTodos();

    renderTodos(todos);

    
    todoForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const newTodo = todoInput.value.trim();
      if (newTodo === '') {
        return;
      }
    
      todos.push(newTodo);
    
      saveTodos(todos);
    
      renderTodos(todos);
      todoInput.value = '';
      todoInput.focus();
    });


