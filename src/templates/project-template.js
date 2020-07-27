// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Project from '../components/Project';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const ProjectTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: projectTitle, description: projectDescription, socialImage } = frontmatter;
  const metaDescription = projectDescription !== null ? projectDescription : siteSubtitle;

  return (
    <Layout title={`${projectTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImage} >
      <Project project={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
      }
    }
  }
`;

export default ProjectTemplate;

