import css from './styles.module.scss'
import Image from 'next/image';

import aboutme from '@/assets/data/aboutme'
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "@/app/store";
import { selectProject } from '@/features/projects/projectSlice';

export default function Projects() {
  const projects = aboutme.projects
  const [filtered, setFiltered] = useState(projects)
  const [filterWord] = useSelector((state: RootState) => [state.project.filterWord])
  const dispatch = useDispatch()

  useEffect(() => {
    if (filterWord === '') {
      setFiltered(projects)
      return
    }

    const filtered = Object.keys(projects).filter((index) => {
      const project = projects[index]
      const text = `${project.description} ${project.alt || ''}`
      return text.toLowerCase().includes(filterWord.toLowerCase())
    })
    
    const filteredList: {[key:string]:any} = {}
    filtered.forEach((index) => {
      filteredList[index] = projects[index]
    })

    setFiltered(filteredList)
  }, [filterWord])

  const handleSelectProject = (project: string) => {
    dispatch(selectProject(project))
  }

  return (
    <section className={css["projects"]}>
      <h2>Projetos</h2>

      <div className={css["body"]}>
        {
          Object.keys(filtered).map((project, index) => (
            <div className={css["item"]} key={index} onClick={() => handleSelectProject(project)}>
              <Image src={`/images/projects/${project}.png`} alt={project} width={240} height={135}  />
              <h3 className='small'>{filtered[project].resume}</h3>
            </div>
          ))
        }
      </div>
    </section>
  );
}