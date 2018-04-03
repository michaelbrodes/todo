# What is this?

This is a quick and dirty command line utility that manages a list of todos. 
I needed to get back into the grove of writing typescript, so I figured this 
would be a good start. 

commands:
    list - list all todos by descending date
    list reverse - list all todos by ascending date
    new *message* - create a new todo message
    delete *message* - delete the todo that matches message
    local-mode *filename* - start logging todos to the local todo file *filename* 
    global-mode - start logging todos to the global todo file. 