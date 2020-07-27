// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Project.module.scss';
import type { Node } from '../../types';

type Props = {
  project: Node
};

const Project = ({ project }: Props) => {
  const { html } = project;
  const { tagSlugs, slug } = project.fields;
  const { tags, title, date } = project.frontmatter;

  return (
    <div className={styles['project']}>
      <Link className={styles['project__home-button']} to="/">All Projects</Link>

      <div className={styles['project__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['project__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['project__comments']}>
        <Comments projectSlug={slug} projectTitle={project.frontmatter.title} />
      </div>
    </div>
  );
};

export default Project;
