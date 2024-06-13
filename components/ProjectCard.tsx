import Image from 'next/image'


export default function ProjectCard({ project }: { project: any }) {
    
    return (
            <article className="flex flex-col items-center lg:flex-row border border-gray-200 hover:bg-gray-100 shadow dark:border-slate-700 dark:hover:bg-slate-700 m-2 rounded-lg">
                <Image
                    src={project.image}
                    width={250}
                    height={250}
                    alt="Project picture"
                    className='object-cover w-full rounded-t-lg h-96 lg:h-auto lg:w-48 lg:rounded-none lg:rounded-s-lg'
                />
                <div className='p-4 flex flex-col justify-between leading-normal'>
                    <h2 className="text-xl text-gray-900 dark:text-white font-mono ">{project.title}</h2>
                    <p className="text-gray-700 dark:text-gray-400 font-mono">{project.description}</p>
                </div>
                
            </article>
    );
}