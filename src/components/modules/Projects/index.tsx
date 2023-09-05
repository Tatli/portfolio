import getRepos from '../../../lib/getRepos';
import Repository from '../../ui/Repository';

const Projects = async () => {
  const data = await getRepos();

  return (
    <div className="container py-8" id="projects" data-test-id="projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <p className="mb-[2.5rem] text-2xl md:text-4xl text-brand-secondary dark:text-slate-200 typography">
        Wow. I just realized that this project <strong>AUTOMATICALLY</strong>{' '}
        listed the elements below by using my public github repositories
        *surprisedpikachuface that's <strong>AWESOME</strong>
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
        {data.map(({ node }) => {
          if (!node) return null;
          return <Repository key={`repository-${node.id}`} {...node} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
