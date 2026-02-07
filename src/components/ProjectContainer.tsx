import { type Project } from './Projects.ts'

type Props = {
    project: Project;
}

export default function ProjectCard({project}: Props) {
    return (
        <div>
            <img src={project.imageSrc}/>

        </div>
    )
}