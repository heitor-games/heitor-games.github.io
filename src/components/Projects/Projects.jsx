
const projects = [
    {
        name: 'Project Nyxmoor',
        description: 'Um jogo de aventura e exploração em um mundo sombrio e misterioso.',
        link: 'https://heitor-games.github.io/project-K.I.R.A/'
    },
    {
        name: 'Portifolio',
        description: 'Meu portifolio pessoal.',
        link: 'https://heitor-games.github.io/portfolio/'
    },
    {
        name: 'Todo List API',
        description: 'Uma API para gerenciamento de tarefas.',
        link: 'https://heitor-games.github.io/todo-list-api/'
    }
];


function Projects() {
    return(
        <div className="projects">
            <h1>Projetos</h1>
            <p>Lista de projetos</p>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                Ver projeto
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects;