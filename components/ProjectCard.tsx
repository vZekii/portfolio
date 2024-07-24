import Image from 'next/image'


function Tags({tags }: { tags: string[] }) {
    return (
        <div className='flex flex-wrap my-2'>
            {tags.map((tag, index) => (
                <span
                    key={tag}
                    className={`text-xs font-semibold  font-mono  border-gray-300 dark:border-slate-600  rounded-full border px-3 py-1 mb-1 mr-1 ${
                        index === 0 ? 'bg-primary-700 border-none text-white dark:text-black hover:bg-primary-600' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600'
                    }`}
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default function ProjectCard({ project }: { project: any }) {
    
    return (
            <article className="flex overflow-hidden flex-col items-center border border-gray-200 shadow dark:border-slate-700  m-2 rounded-lg">
                <Image
                    src={project.image}
                    width={544}
                    height={286}
                    alt="Project picture"
                    className=' rounded-t-lg object-fit object-center'
                />
                <div className='p-6 flex flex-col justify-between leading-normal'>
                    <h2 className="text-2xl text-gray-900 dark:text-white font-mono">{project.title}</h2>
                    <Tags tags={project.tags} />
                    <p className="text-gray-700 dark:text-gray-400 font-mono">{project.description}</p>
                </div>
                
            </article>
    );
}